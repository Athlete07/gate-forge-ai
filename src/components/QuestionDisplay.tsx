import { Question } from "@/data/mockExamData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface QuestionDisplayProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  showSolution?: boolean;
}

export const QuestionDisplay = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showSolution = false,
}: QuestionDisplayProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{question.section}</Badge>
            <Badge variant="secondary">{question.topic}</Badge>
            <Badge className="bg-primary">{question.marks} Mark{question.marks > 1 ? "s" : ""}</Badge>
            <Badge variant="outline" className="text-xs">
              {Math.floor(question.estimatedTime / 60)} min
            </Badge>
          </div>
          <p className="text-lg font-medium leading-relaxed">{question.stem}</p>
        </div>
      </div>

      <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect}>
        <div className="space-y-3">
          {Object.entries(question.options).map(([key, value]) => {
            const isCorrect = showSolution && key === question.correctAnswer;
            const isWrong = showSolution && key === selectedAnswer && key !== question.correctAnswer;
            
            return (
              <div
                key={key}
                className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-colors ${
                  isCorrect
                    ? "border-success bg-success/10"
                    : isWrong
                    ? "border-destructive bg-destructive/10"
                    : selectedAnswer === key
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={key} id={`${question.id}-${key}`} disabled={showSolution} />
                <Label
                  htmlFor={`${question.id}-${key}`}
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  <span className="font-semibold mr-2">{key}.</span>
                  {value}
                </Label>
              </div>
            );
          })}
        </div>
      </RadioGroup>

      {showSolution && (
        <div className="mt-6 p-4 rounded-lg bg-card border-2 border-success">
          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
            <span className="text-lg">✓</span> Explanation
          </h4>
          <p className="text-sm leading-relaxed mb-2">{question.explanation}</p>
          {question.reference && (
            <p className="text-xs text-muted-foreground">Reference: {question.reference}</p>
          )}
        </div>
      )}
    </div>
  );
};
