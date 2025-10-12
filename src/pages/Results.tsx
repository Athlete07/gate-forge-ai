import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionDisplay } from "@/components/QuestionDisplay";
import {
  mockExamQuestions,
  calculateScore,
  getTopicWiseAnalysis,
} from "@/data/mockExamData";
import { Award, TrendingUp, Clock, Target, Home } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Results = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("examAnswers");
    if (!savedAnswers) {
      navigate("/");
      return;
    }
    const parsedAnswers = JSON.parse(savedAnswers);
    setAnswers(parsedAnswers);
    setScore(calculateScore(parsedAnswers));
  }, [navigate]);

  const topicAnalysis = getTopicWiseAnalysis(answers);
  const totalQuestions = mockExamQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = mockExamQuestions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Exam Results</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Score Overview */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-success/5">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">{score.toFixed(2)}</h2>
              <p className="text-xl text-muted-foreground">out of 100 marks</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-success">{correctCount}</p>
                <p className="text-sm text-muted-foreground">Correct</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-destructive">
                  {answeredCount - correctCount}
                </p>
                <p className="text-sm text-muted-foreground">Incorrect</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">
                  {totalQuestions - answeredCount}
                </p>
                <p className="text-sm text-muted-foreground">Unattempted</p>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="solutions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Solutions Tab */}
          <TabsContent value="solutions" className="space-y-4">
            {mockExamQuestions.map((question, index) => (
              <Card key={question.id} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold">Question {index + 1}</span>
                  {answers[question.id] === question.correctAnswer ? (
                    <span className="text-success text-sm">✓ Correct</span>
                  ) : answers[question.id] ? (
                    <span className="text-destructive text-sm">✗ Incorrect</span>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not Attempted</span>
                  )}
                </div>
                <QuestionDisplay
                  question={question}
                  selectedAnswer={answers[question.id]}
                  onAnswerSelect={() => {}}
                  showSolution={true}
                />
              </Card>
            ))}
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Topic-wise Analysis */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Topic-wise Performance</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(topicAnalysis).map(([topic, stats]) => {
                  const accuracy = (stats.correct / stats.total) * 100;
                  return (
                    <div key={topic} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{topic}</span>
                        <span className="text-muted-foreground">
                          {stats.correct}/{stats.total} ({accuracy.toFixed(0)}%)
                        </span>
                      </div>
                      <Progress value={accuracy} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Section-wise Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">General Aptitude</h3>
                </div>
                <div className="space-y-2">
                  {(() => {
                    const gaQuestions = mockExamQuestions.filter((q) => q.section === "GA");
                    const gaCorrect = gaQuestions.filter(
                      (q) => answers[q.id] === q.correctAnswer
                    ).length;
                    return (
                      <>
                        <p className="text-3xl font-bold">{gaCorrect}/{gaQuestions.length}</p>
                        <Progress value={(gaCorrect / gaQuestions.length) * 100} className="h-2" />
                      </>
                    );
                  })()}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Core CS</h3>
                </div>
                <div className="space-y-2">
                  {(() => {
                    const coreQuestions = mockExamQuestions.filter((q) => q.section === "CORE");
                    const coreCorrect = coreQuestions.filter(
                      (q) => answers[q.id] === q.correctAnswer
                    ).length;
                    return (
                      <>
                        <p className="text-3xl font-bold">{coreCorrect}/{coreQuestions.length}</p>
                        <Progress value={(coreCorrect / coreQuestions.length) * 100} className="h-2" />
                      </>
                    );
                  })()}
                </div>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="p-6 bg-accent/10">
              <h3 className="text-lg font-semibold mb-4">Personalized Recommendations</h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(topicAnalysis)
                  .filter(([_, stats]) => (stats.correct / stats.total) < 0.6)
                  .slice(0, 3)
                  .map(([topic]) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Focus on <strong>{topic}</strong> - Practice more questions and review concepts</span>
                    </li>
                  ))}
                {Object.entries(topicAnalysis).filter(([_, stats]) => (stats.correct / stats.total) < 0.6).length === 0 && (
                  <li className="text-success">Great job! Keep practicing to maintain your performance</li>
                )}
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Results;
