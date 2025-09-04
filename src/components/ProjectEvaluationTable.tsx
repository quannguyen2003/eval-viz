import { useMemo } from "react";
import { ProjectEvaluationData, EVALUATION_CATEGORIES, CATEGORY_DESCRIPTIONS } from "@/data/mockData";
import { ScoreCard } from "./ScoreCard";
import { CategoryTooltip } from "./CategoryTooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectScore {
  projectId: string;
  categoryScores: Record<string, number>;
  totalScore: number;
}

interface ProjectEvaluationTableProps {
  data: ProjectEvaluationData[];
}

export const ProjectEvaluationTable = ({ data }: ProjectEvaluationTableProps) => {
  const projectScores = useMemo(() => {
    const projectGroups = data.reduce((acc, item) => {
      if (!acc[item.project_id]) {
        acc[item.project_id] = [];
      }
      acc[item.project_id].push(item);
      return acc;
    }, {} as Record<string, ProjectEvaluationData[]>);

    return Object.entries(projectGroups).map(([projectId, items]) => {
      const categoryScores: Record<string, number> = {};
      
      EVALUATION_CATEGORIES.forEach(category => {
        const categoryItems = items.filter(item => item.muc_danh_gia === category);
        if (categoryItems.length > 0) {
          const successCount = categoryItems.filter(item => item.result === "1").length;
          categoryScores[category] = Math.round((successCount / categoryItems.length) * 100);
        } else {
          categoryScores[category] = 0;
        }
      });

      const totalScore = Math.round(
        Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / 
        Object.keys(categoryScores).length
      );

      return {
        projectId,
        categoryScores,
        totalScore,
      } as ProjectScore;
    });
  }, [data]);

  return (
    <Card className="shadow-[--shadow-card]">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-dashboard-surface hover:bg-dashboard-surface-hover">
                <TableHead className="font-semibold text-foreground">
                  Project Name
                </TableHead>
                {EVALUATION_CATEGORIES.map((category) => (
                  <TableHead key={category} className="font-semibold text-foreground text-center min-w-[140px]">
                    <div className="flex items-center justify-center">
                      <span className="text-xs leading-tight">{category}</span>
                      <CategoryTooltip description={CATEGORY_DESCRIPTIONS[category]} />
                    </div>
                  </TableHead>
                ))}
                <TableHead className="font-semibold text-foreground text-center">
                  <div className="flex items-center justify-center">
                    <span>Total Score</span>
                    <CategoryTooltip description="Average of all category percentages for this project" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectScores.map((project) => (
                <TableRow 
                  key={project.projectId} 
                  className="hover:bg-dashboard-surface-hover transition-colors"
                >
                  <TableCell className="font-medium">
                    {project.projectId}
                  </TableCell>
                  {EVALUATION_CATEGORIES.map((category) => (
                    <TableCell key={category} className="text-center">
                      <ScoreCard score={project.categoryScores[category]} />
                    </TableCell>
                  ))}
                  <TableCell className="text-center">
                    <ScoreCard 
                      score={project.totalScore} 
                      className="font-semibold px-3 py-1.5" 
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};