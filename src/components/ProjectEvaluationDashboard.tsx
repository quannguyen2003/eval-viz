import { useState, useMemo } from "react";
import evaluationData from "@/data/data_with_categories.json";
import { DashboardHeader } from "./DashboardHeader";
import { SearchBar } from "./SearchBar";
import { ProjectEvaluationTable } from "./ProjectEvaluationTable";
import { ProjectFilter } from "./ProjectFilter";

export const ProjectEvaluationDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const allProjects = useMemo(() => {
    return [...new Set(evaluationData.map(item => item.project_id))];
  }, []);

  const filteredData = useMemo(() => {
    let data = evaluationData;

    if (selectedProjects.length > 0) {
      data = data.filter(item => selectedProjects.includes(item.project_id));
    }

    if (searchTerm.trim()) {
      data = data.filter(item =>
        item.project_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return data;
  }, [searchTerm, selectedProjects]);

  const uniqueProjects = useMemo(() => {
    return [...new Set(filteredData.map(item => item.project_id))];
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader />
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center gap-4">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search projects by name..."
                className="flex-grow"
              />
              <ProjectFilter
                projects={allProjects}
                selectedProjects={selectedProjects}
                onSelectedProjectsChange={setSelectedProjects}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {uniqueProjects.length} project{uniqueProjects.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <ProjectEvaluationTable data={filteredData} />
        </div>
      </div>
    </div>
  );
};