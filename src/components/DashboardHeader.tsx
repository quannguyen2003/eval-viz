import { BarChart3 } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-dashboard-header to-dashboard-header bg-[--gradient-dashboard] text-dashboard-header-foreground shadow-[--shadow-header]">
      <div className="relative px-6 py-8 sm:px-8 sm:py-12">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Project Evaluation Dashboard
            </h1>
            <p className="mt-2 text-sm opacity-90 sm:text-base">
              Comprehensive scoring across evaluation categories
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
    </div>
  );
};