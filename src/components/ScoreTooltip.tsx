import * as React from "react";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ScoreTooltipProps {
  items: {
    question: string;
    detail: string;
    source: string;
    source_entity: string;
  }[];
}

export const ScoreTooltip = ({ items }: ScoreTooltipProps) => {
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-help ml-1" />
        </TooltipTrigger>
        <TooltipContent className="max-w-2xl max-h-96 overflow-y-auto p-0">
          <div className="p-4 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-[2fr_2fr_1fr] gap-x-4 text-xs items-center">
                <div className="font-medium">{item.question}</div>
                <div>{item.detail}</div>
                <div>
                  {isValidUrl(item.source) ? (
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {item.source_entity || "Link"}
                    </a>
                  ) : (
                    <span>{item.source_entity}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};