import { cn } from "@/lib/utils";

interface ScoreCardProps {
  score: number;
  className?: string;
}

export const ScoreCard = ({ score, className }: ScoreCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "bg-status-excellent text-status-excellent-foreground";
    if (score >= 40) return "bg-status-good text-status-good-foreground";
    return "bg-status-poor text-status-poor-foreground";
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium",
        getScoreColor(score),
        className
      )}
    >
      {score}%
    </span>
  );
};