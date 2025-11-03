import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Apple, ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Diet = () => {
  const { toast } = useToast();
  const [completedMeals, setCompletedMeals] = useState<string[]>([]);

  const dietPlan = [
    {
      meal: "Breakfast",
      time: "7:00 AM",
      foods: [
        { name: "Oatmeal with berries", calories: 250, protein: 8, carbs: 45 },
        { name: "Green tea", calories: 2, protein: 0, carbs: 0 },
        { name: "Almonds (10)", calories: 68, protein: 2.5, carbs: 2.5 },
      ],
      totalCalories: 320,
    },
    {
      meal: "Mid-Morning Snack",
      time: "10:30 AM",
      foods: [
        { name: "Apple", calories: 95, protein: 0.5, carbs: 25 },
        { name: "Greek yogurt", calories: 100, protein: 17, carbs: 6 },
      ],
      totalCalories: 195,
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      foods: [
        { name: "Grilled chicken breast", calories: 165, protein: 31, carbs: 0 },
        { name: "Quinoa salad", calories: 150, protein: 5, carbs: 25 },
        { name: "Mixed vegetables", calories: 50, protein: 2, carbs: 10 },
      ],
      totalCalories: 365,
    },
    {
      meal: "Afternoon Snack",
      time: "4:00 PM",
      foods: [
        { name: "Carrot sticks with hummus", calories: 120, protein: 4, carbs: 15 },
      ],
      totalCalories: 120,
    },
    {
      meal: "Dinner",
      time: "7:30 PM",
      foods: [
        { name: "Baked salmon", calories: 280, protein: 40, carbs: 0 },
        { name: "Steamed broccoli", calories: 55, protein: 4, carbs: 11 },
        { name: "Sweet potato", calories: 130, protein: 2, carbs: 30 },
      ],
      totalCalories: 465,
    },
  ];

  const toggleMealComplete = (mealName: string) => {
    if (completedMeals.includes(mealName)) {
      setCompletedMeals(completedMeals.filter((m) => m !== mealName));
    } else {
      setCompletedMeals([...completedMeals, mealName]);
      toast({
        title: "Meal logged! 🎉",
        description: `${mealName} marked as complete`,
      });
    }
  };

  const generateNewPlan = () => {
    toast({
      title: "AI is generating your plan... ✨",
      description: "This will take a few moments",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ChevronLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="h-5 w-5 text-primary" />
                <h1 className="text-2xl font-bold">AION</h1>
              </div>
              <p className="text-sm text-muted-foreground">Personalized Diet Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Summary Card */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Today's Diet Plan</h2>
              <p className="text-muted-foreground">
                Optimized for your IT professional lifestyle
              </p>
            </div>
            <Button onClick={generateNewPlan} className="gap-2">
              <Sparkles className="h-4 w-4" />
              Generate New Plan
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1,465</p>
              <p className="text-sm text-muted-foreground">Total Calories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">102g</p>
              <p className="text-sm text-muted-foreground">Protein</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">137g</p>
              <p className="text-sm text-muted-foreground">Carbs</p>
            </div>
          </div>
        </Card>

        {/* Meal Cards */}
        <div className="space-y-4">
          {dietPlan.map((meal, index) => {
            const isCompleted = completedMeals.includes(meal.meal);
            return (
              <Card
                key={index}
                className={`p-6 transition-all ${
                  isCompleted ? "bg-muted/50" : "hover:shadow-hover"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Apple className={`h-6 w-6 ${isCompleted ? "text-primary" : "text-muted-foreground"}`} />
                    <div>
                      <h3 className="text-xl font-semibold">{meal.meal}</h3>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                  </div>
                  <Badge variant={isCompleted ? "default" : "outline"}>
                    {meal.totalCalories} cal
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  {meal.foods.map((food, foodIndex) => (
                    <div
                      key={foodIndex}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className={isCompleted ? "line-through text-muted-foreground" : ""}>
                        {food.name}
                      </span>
                      <div className="text-sm text-muted-foreground">
                        {food.calories} cal • {food.protein}g protein
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => toggleMealComplete(meal.meal)}
                  variant={isCompleted ? "outline" : "default"}
                  className="w-full"
                >
                  {isCompleted ? "✓ Completed" : "Mark as Eaten"}
                </Button>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Diet;
