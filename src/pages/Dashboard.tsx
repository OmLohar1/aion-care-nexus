import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Activity,
  Apple,
  Dumbbell,
  Heart,
  User,
  LayoutDashboard,
  Menu,
  X,
  TrendingUp,
  Flame,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Apple, label: "Diet Plan", path: "/diet" },
    { icon: Dumbbell, label: "Exercise", path: "/exercise" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const todaysMeals = [
    { meal: "Breakfast", food: "Oatmeal with berries", calories: 320, completed: true },
    { meal: "Lunch", food: "Grilled chicken salad", calories: 450, completed: true },
    { meal: "Snack", food: "Greek yogurt", calories: 150, completed: false },
    { meal: "Dinner", food: "Salmon with vegetables", calories: 520, completed: false },
  ];

  const exercises = [
    { name: "Morning Stretch", duration: "10 min", completed: true },
    { name: "Desk Exercises", duration: "15 min", completed: false },
    { name: "Evening Walk", duration: "30 min", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-card border-r border-border w-64 z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-8">
            <Activity className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AION
            </span>
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 mt-12 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={Flame}
              title="Calories Today"
              value="920"
              subtitle="of 2000 goal"
              trend="up"
            />
            <StatCard
              icon={Activity}
              title="Steps"
              value="6,234"
              subtitle="of 10,000 goal"
              trend="neutral"
            />
            <StatCard
              icon={Dumbbell}
              title="Active Minutes"
              value="25"
              subtitle="of 60 goal"
              trend="up"
            />
            <StatCard
              icon={Heart}
              title="Wellness Score"
              value="85%"
              subtitle="+5% this week"
              trend="up"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Today's Meals */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Apple className="h-5 w-5 text-primary" />
                  Today's Meals
                </h2>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/diet">View All</Link>
                </Button>
              </div>
              <div className="space-y-3">
                {todaysMeals.map((meal, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      meal.completed ? "bg-muted/50 border-muted" : "bg-card border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{meal.meal}</p>
                        <p className="text-sm text-muted-foreground">{meal.food}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{meal.calories} cal</p>
                        {meal.completed && (
                          <p className="text-xs text-primary">✓ Completed</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Exercise Routine */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  Exercise Routine
                </h2>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/exercise">View All</Link>
                </Button>
              </div>
              <div className="space-y-3">
                {exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      exercise.completed ? "bg-muted/50 border-muted" : "bg-card border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{exercise.name}</p>
                        <p className="text-sm text-muted-foreground">{exercise.duration}</p>
                      </div>
                      {exercise.completed ? (
                        <p className="text-sm text-primary">✓ Done</p>
                      ) : (
                        <Button size="sm" variant="outline">Start</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Weekly Progress
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Meals Completed</span>
                    <span className="text-sm font-medium">18/21</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Workouts Done</span>
                    <span className="text-sm font-medium">4/5</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Wellness Score</span>
                    <span className="text-sm font-medium">85/100</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
