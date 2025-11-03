import { Link } from "react-router-dom";
import { Activity, ChevronLeft, User, Briefcase, Calendar, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const userStats = {
    weeklyGoals: {
      meals: { completed: 18, target: 21, percentage: 85 },
      workouts: { completed: 4, target: 5, percentage: 80 },
      water: { completed: 42, target: 56, percentage: 75 },
    },
    healthMetrics: {
      currentWeight: 75,
      targetWeight: 70,
      bmi: 24.2,
      activityLevel: "Moderate",
    },
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
              <p className="text-sm text-muted-foreground">Your Health Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground mb-2">john.doe@example.com</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                  <Calendar className="h-3 w-3" />
                  <span>28 years</span>
                </div>
                <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                  <Briefcase className="h-3 w-3" />
                  <span>IT Professional</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" defaultValue="28" />
              </div>
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input id="occupation" defaultValue="IT Professional" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </Card>

          {/* Health Metrics */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Health Metrics
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight">Current Weight (kg)</Label>
                  <Input id="weight" type="number" defaultValue="75" />
                </div>
                <div>
                  <Label htmlFor="target">Target Weight (kg)</Label>
                  <Input id="target" type="number" defaultValue="70" />
                </div>
              </div>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" defaultValue="175" />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">BMI</span>
                  <span className="text-2xl font-bold text-primary">{userStats.healthMetrics.bmi}</span>
                </div>
                <p className="text-xs text-muted-foreground">Normal weight range</p>
              </div>
              <div>
                <Label htmlFor="activity">Activity Level</Label>
                <Input id="activity" defaultValue="Moderate" />
              </div>
            </div>
          </Card>

          {/* Weekly Goals */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weekly Progress
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Meals Completed</span>
                  <span className="text-sm font-medium">
                    {userStats.weeklyGoals.meals.completed}/{userStats.weeklyGoals.meals.target}
                  </span>
                </div>
                <Progress value={userStats.weeklyGoals.meals.percentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {userStats.weeklyGoals.meals.percentage}% of weekly goal
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Workouts Done</span>
                  <span className="text-sm font-medium">
                    {userStats.weeklyGoals.workouts.completed}/{userStats.weeklyGoals.workouts.target}
                  </span>
                </div>
                <Progress value={userStats.weeklyGoals.workouts.percentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {userStats.weeklyGoals.workouts.percentage}% of weekly goal
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Water Glasses (8oz)</span>
                  <span className="text-sm font-medium">
                    {userStats.weeklyGoals.water.completed}/{userStats.weeklyGoals.water.target}
                  </span>
                </div>
                <Progress value={userStats.weeklyGoals.water.percentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {userStats.weeklyGoals.water.percentage}% of weekly goal
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
