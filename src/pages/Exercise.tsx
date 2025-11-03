import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Dumbbell, ChevronLeft, Play, Pause, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Exercise = () => {
  const { toast } = useToast();
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const exercisePlan = [
    {
      name: "Morning Desk Stretch",
      time: "8:00 AM",
      duration: "10 min",
      difficulty: "Easy",
      exercises: [
        "Neck rolls - 2 min",
        "Shoulder shrugs - 2 min",
        "Seated spinal twist - 3 min",
        "Wrist circles - 3 min",
      ],
      benefits: "Reduces stiffness from sitting",
    },
    {
      name: "Midday Energy Boost",
      time: "12:30 PM",
      duration: "15 min",
      difficulty: "Medium",
      exercises: [
        "Standing desk push-ups - 3 sets",
        "Chair squats - 3 sets of 10",
        "Wall sits - 3 x 30 sec",
        "Calf raises - 3 sets of 15",
      ],
      benefits: "Increases alertness and energy",
    },
    {
      name: "Eye Relaxation",
      time: "3:00 PM",
      duration: "5 min",
      difficulty: "Easy",
      exercises: [
        "Palming - 2 min",
        "Eye circles - 1 min",
        "Focus shifting - 2 min",
      ],
      benefits: "Reduces screen strain",
    },
    {
      name: "Evening Full Body",
      time: "6:00 PM",
      duration: "30 min",
      difficulty: "Hard",
      exercises: [
        "Jumping jacks - 3 min",
        "Push-ups - 3 sets of 10",
        "Planks - 3 x 45 sec",
        "Squats - 3 sets of 15",
        "Lunges - 3 sets of 10 each leg",
        "Cool down stretch - 5 min",
      ],
      benefits: "Full body workout for strength",
    },
  ];

  const difficultyColors = {
    Easy: "bg-primary/10 text-primary",
    Medium: "bg-secondary/10 text-secondary",
    Hard: "bg-accent/10 text-accent",
  };

  const toggleExercise = (exerciseName: string) => {
    if (activeExercise === exerciseName) {
      setActiveExercise(null);
      setCompletedExercises([...completedExercises, exerciseName]);
      toast({
        title: "Great work! 💪",
        description: `${exerciseName} completed`,
      });
    } else {
      setActiveExercise(exerciseName);
      toast({
        title: "Exercise started",
        description: `${exerciseName} timer running`,
      });
    }
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
              <p className="text-sm text-muted-foreground">Exercise Plan for IT Professionals</p>
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
              <h2 className="text-2xl font-bold mb-2">Today's Workout Plan</h2>
              <p className="text-muted-foreground">
                Designed to combat sedentary work lifestyle
              </p>
            </div>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              New Plan
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">60</p>
              <p className="text-sm text-muted-foreground">Total Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">4</p>
              <p className="text-sm text-muted-foreground">Sessions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">
                {completedExercises.length}/{exercisePlan.length}
              </p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </Card>

        {/* Exercise Cards */}
        <div className="space-y-4">
          {exercisePlan.map((workout, index) => {
            const isActive = activeExercise === workout.name;
            const isCompleted = completedExercises.includes(workout.name);
            
            return (
              <Card
                key={index}
                className={`p-6 transition-all ${
                  isCompleted ? "bg-muted/50" : "hover:shadow-hover"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Dumbbell className={`h-6 w-6 ${isCompleted ? "text-primary" : "text-muted-foreground"}`} />
                    <div>
                      <h3 className="text-xl font-semibold">{workout.name}</h3>
                      <p className="text-sm text-muted-foreground">{workout.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{workout.duration}</Badge>
                    <Badge className={difficultyColors[workout.difficulty as keyof typeof difficultyColors]}>
                      {workout.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2 text-muted-foreground">Exercises:</p>
                  <ul className="space-y-1">
                    {workout.exercises.map((exercise, exerciseIndex) => (
                      <li
                        key={exerciseIndex}
                        className={`text-sm py-1 ${isCompleted ? "line-through text-muted-foreground" : ""}`}
                      >
                        • {exercise}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium">Benefits:</span> {workout.benefits}
                  </p>
                </div>

                <Button
                  onClick={() => toggleExercise(workout.name)}
                  variant={isCompleted ? "outline" : isActive ? "secondary" : "default"}
                  className="w-full gap-2"
                  disabled={isCompleted}
                >
                  {isCompleted ? (
                    "✓ Completed"
                  ) : isActive ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Stop & Complete
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Start Exercise
                    </>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Exercise;
