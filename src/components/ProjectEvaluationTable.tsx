import { useMemo } from "react";
import { ScoreCard } from "./ScoreCard";
import { ScoreTooltip } from "./ScoreTooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectData {
  project_id: string;
  q_id: string;
  question: string;
  result: string;
  detail: string;
  source: string;
  source_entity: string;
  muc_danh_gia: string;
}

interface ProjectScore {
  projectId: string;
  categoryScores: Record<string, { score: number; items: any[] }>;
  totalScore: number;
}

interface ProjectEvaluationTableProps {
  data: ProjectData[];
}

export const ProjectEvaluationTable = ({ data }: ProjectEvaluationTableProps) => {
  const { projectScores, categories } = useMemo(() => {
    const projectGroups = data.reduce((acc, item) => {
      if (!acc[item.project_id]) {
        acc[item.project_id] = [];
      }
      acc[item.project_id].push(item);
      return acc;
    }, {} as Record<string, ProjectData[]>);

    const allCategories = [...new Set(data.map(item => item.muc_danh_gia))];

    const scores = Object.entries(projectGroups).map(([projectId, items]) => {
      const categoryScores: Record<string, { score: number; items: any[] }> = {};
      
      allCategories.forEach(category => {
        const categoryItems = items.filter(item => item.muc_danh_gia === category);
        if (categoryItems.length > 0) {
          const successCount = categoryItems.reduce((sum, item) => sum + parseInt(item.result, 10), 0);
          categoryScores[category] = {
            score: Math.round((successCount / categoryItems.length) * 100),
            items: categoryItems,
          };
        } else {
          categoryScores[category] = { score: 0, items: [] };
        }
      });

      const totalScore = Math.round(
        Object.values(categoryScores).reduce((sum, { score }) => sum + score, 0) /
        Object.keys(categoryScores).length
      );

      return {
        projectId,
        categoryScores,
        totalScore,
      } as ProjectScore;
    });

    return { projectScores: scores, categories: allCategories };
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
                {categories.map((category) => (
                  <TableHead key={category} className="font-semibold text-foreground text-center min-w-[140px]">
                    <div className="flex items-center justify-center">
                      <span className="text-xs leading-tight">{category}</span>
                    </div>
                  </TableHead>
                ))}
                <TableHead className="font-semibold text-foreground text-center bg-highlight">
                  <div className="flex items-center justify-center">
                    <span>Total Score</span>
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
                    <div className="flex items-center gap-2">
                      <img
                        src={`/${project.projectId.toLowerCase()}.png`}
                        alt={project.projectId}
                        className="h-6 w-6"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      {project.projectId}
                    </div>
                  </TableCell>
                  {categories.map((category) => (
                    <TableCell key={category} className="text-center">
                      <div className="flex items-center justify-center">
                        <ScoreCard score={project.categoryScores[category]?.score ?? 0} />
                        <ScoreTooltip items={project.categoryScores[category]?.items ?? []} />
                      </div>
                    </TableCell>
                  ))}
                  <TableCell className="text-center bg-highlight">
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