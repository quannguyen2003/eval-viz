import { useState, useMemo } from "react";
import { mockEvaluationData } from "@/data/mockData";
import { DashboardHeader } from "./DashboardHeader";
import { SearchBar } from "./SearchBar";
import { ProjectEvaluationTable } from "./ProjectEvaluationTable";

export const ProjectEvaluationDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockEvaluationData;
    }
    
    return mockEvaluationData.filter(item =>
      item.project_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const uniqueProjects = useMemo(() => {
    return [...new Set(filteredData.map(item => item.project_id))];
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader />
        
        <div className="space-y-4">
          <div>
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search projects by name..."
            />
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