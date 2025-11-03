import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
