import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
}

const StatCard = ({ icon: Icon, title, value, subtitle, trend = "neutral" }: StatCardProps) => {
  const trendColors = {
    up: "text-primary",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold mb-2">{value}</p>
          {subtitle && (
            <p className={`text-sm ${trendColors[trend]}`}>{subtitle}</p>
          )}
        </div>
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
