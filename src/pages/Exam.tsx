import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExamTimer } from "@/components/ExamTimer";
import { QuestionNavigator } from "@/components/QuestionNavigator";
import { QuestionDisplay } from "@/components/QuestionDisplay";
import { mockExamQuestions, ExamState } from "@/data/mockExamData";
import { Flag, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Exam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const [examState, setExamState] = useState<ExamState>(() => {
    const saved = localStorage.getItem("examState");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        markedForReview: new Set(parsed.markedForReview),
      };
    }
    return {
      answers: {},
      markedForReview: new Set<string>(),
      timeRemaining: 180 * 60, // 3 hours in seconds
      currentQuestion: 0,
      isSubmitted: false,
    };
  });

  useEffect(() => {
    const toSave = {
      ...examState,
      markedForReview: Array.from(examState.markedForReview),
    };
    localStorage.setItem("examState", JSON.stringify(toSave));
  }, [examState]);

  const currentQuestionData = mockExamQuestions[examState.currentQuestion];
  const currentQuestionId = `Q${examState.currentQuestion + 1}`;

  const handleAnswerSelect = (answer: string) => {
    setExamState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [currentQuestionId]: answer },
    }));
  };

  const handleMarkForReview = () => {
    setExamState((prev) => {
      const newMarked = new Set(prev.markedForReview);
      if (newMarked.has(currentQuestionId)) {
        newMarked.delete(currentQuestionId);
        toast({ title: "Unmarked for review" });
      } else {
        newMarked.add(currentQuestionId);
        toast({ title: "Marked for review", variant: "default" });
      }
      return { ...prev, markedForReview: newMarked };
    });
  };

  const handleNext = () => {
    if (examState.currentQuestion < mockExamQuestions.length - 1) {
      setExamState((prev) => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    }
  };

  const handlePrevious = () => {
    if (examState.currentQuestion > 0) {
      setExamState((prev) => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }));
    }
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(examState.answers).length;
    const unansweredCount = mockExamQuestions.length - answeredCount;
    
    if (unansweredCount > 0) {
      toast({
        title: "Warning",
        description: `You have ${unansweredCount} unanswered questions`,
        variant: "destructive",
      });
    }
    
    setShowSubmitDialog(true);
  };

  const confirmSubmit = () => {
    localStorage.setItem("examAnswers", JSON.stringify(examState.answers));
    localStorage.removeItem("examState");
    navigate("/results");
  };

  const handleTimeEnd = () => {
    toast({
      title: "Time's Up!",
      description: "Your exam has been auto-submitted",
      variant: "destructive",
    });
    confirmSubmit();
  };

  const answeredCount = Object.keys(examState.answers).length;
  const markedCount = examState.markedForReview.size;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">GATE CS Mock Exam</h1>
              <p className="text-xs text-muted-foreground">
                Question {examState.currentQuestion + 1} of {mockExamQuestions.length}
              </p>
            </div>
            <ExamTimer
              timeRemaining={examState.timeRemaining}
              onTimeUpdate={(time) => setExamState((prev) => ({ ...prev, timeRemaining: time }))}
              onTimeEnd={handleTimeEnd}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Area */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <QuestionDisplay
                question={currentQuestionData}
                selectedAnswer={examState.answers[currentQuestionId]}
                onAnswerSelect={handleAnswerSelect}
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={examState.currentQuestion === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                variant={examState.markedForReview.has(currentQuestionId) ? "default" : "outline"}
                onClick={handleMarkForReview}
                className={
                  examState.markedForReview.has(currentQuestionId)
                    ? "bg-accent hover:bg-accent/90"
                    : ""
                }
              >
                <Flag className="w-4 h-4 mr-2" />
                {examState.markedForReview.has(currentQuestionId) ? "Unmark" : "Mark for Review"}
              </Button>

              <Button
                variant="outline"
                onClick={handleNext}
                disabled={examState.currentQuestion === mockExamQuestions.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Navigator Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <QuestionNavigator
                totalQuestions={mockExamQuestions.length}
                currentQuestion={examState.currentQuestion}
                answers={examState.answers}
                markedForReview={examState.markedForReview}
                onQuestionSelect={(index) =>
                  setExamState((prev) => ({ ...prev, currentQuestion: index }))
                }
              />

              <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Answered:</span>
                    <span className="font-semibold">{answeredCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Not Answered:</span>
                    <span className="font-semibold">
                      {mockExamQuestions.length - answeredCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marked:</span>
                    <span className="font-semibold">{markedCount}</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/80"
                  onClick={handleSubmit}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Exam
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Exam?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit your exam? You have answered {answeredCount} out of{" "}
              {mockExamQuestions.length} questions. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSubmit}>Submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Exam;
