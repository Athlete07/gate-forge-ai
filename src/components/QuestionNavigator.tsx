import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Flag } from "lucide-react";

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<string, string>;
  markedForReview: Set<string>;
  onQuestionSelect: (index: number) => void;
}

export const QuestionNavigator = ({
  totalQuestions,
  currentQuestion,
  answers,
  markedForReview,
  onQuestionSelect,
}: QuestionNavigatorProps) => {
  const getQuestionStatus = (index: number) => {
    const questionId = `Q${index + 1}`;
    const isAnswered = !!answers[questionId];
    const isMarked = markedForReview.has(questionId);

    if (isAnswered && isMarked) return "answered-marked";
    if (isAnswered) return "answered";
    if (isMarked) return "marked";
    return "not-answered";
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-semibold mb-4">Question Navigator</h3>
      
      <div className="flex flex-col gap-2 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-success" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-accent" />
          <span>Marked for Review</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-destructive/20" />
          <span>Not Answered</span>
        </div>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }).map((_, index) => {
            const status = getQuestionStatus(index);
            return (
              <Button
                key={index}
                variant={index === currentQuestion ? "default" : "outline"}
                size="sm"
                onClick={() => onQuestionSelect(index)}
                className={`relative h-10 ${
                  status === "answered"
                    ? "bg-success hover:bg-success/90 text-success-foreground"
                    : status === "marked"
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : status === "answered-marked"
                    ? "bg-success hover:bg-success/90 text-success-foreground"
                    : "bg-destructive/20 hover:bg-destructive/30"
                }`}
              >
                {index + 1}
                {status === "answered-marked" && (
                  <Flag className="w-3 h-3 absolute top-1 right-1" />
                )}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
