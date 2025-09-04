import * as React from "react";
import { Check, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface ProjectFilterProps {
  projects: string[];
  selectedProjects: string[];
  onSelectedProjectsChange: (projects: string[]) => void;
}

export const ProjectFilter = ({
  projects,
  selectedProjects,
  onSelectedProjectsChange,
}: ProjectFilterProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          Projects
          {selectedProjects.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedProjects.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedProjects.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedProjects.length} selected
                  </Badge>
                ) : (
                  projects
                    .filter((project) => selectedProjects.includes(project))
                    .map((project) => (
                      <Badge
                        variant="secondary"
                        key={project}
                        className="rounded-sm px-1 font-normal"
                      >
                        {project}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Filter projects..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {projects.map((project) => {
                const isSelected = selectedProjects.includes(project);
                return (
                  <CommandItem
                    key={project}
                    onSelect={() => {
                      if (isSelected) {
                        onSelectedProjectsChange(
                          selectedProjects.filter((p) => p !== project)
                        );
                      } else {
                        onSelectedProjectsChange([...selectedProjects, project]);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check className={cn("h-4 w-4")} />
                    </div>
                    <span>{project}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedProjects.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onSelectedProjectsChange([])}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};