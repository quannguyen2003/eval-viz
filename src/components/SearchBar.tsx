import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Search projects..." }: SearchBarProps) => {
  return (
    <Card className="shadow-[--shadow-card]">
      <CardContent className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="pl-10 bg-dashboard-surface border-0 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all"
          />
        </div>
      </CardContent>
    </Card>
  );
};