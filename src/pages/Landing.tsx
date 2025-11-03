import { Link } from "react-router-dom";
import { Brain, Apple, Activity, Heart, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized health recommendations based on your unique lifestyle and goals",
    },
    {
      icon: Apple,
      title: "Smart Diet Plans",
      description: "Customized meal plans that adapt to your preferences and nutritional needs",
    },
    {
      icon: Activity,
      title: "Exercise Routines",
      description: "Occupation-specific workouts designed to fit your daily schedule",
    },
    {
      icon: Heart,
      title: "Wellness Tracking",
      description: "Monitor stress levels and mental health with daily wellness tips",
    },
    {
      icon: Sparkles,
      title: "Motivation Boost",
      description: "Daily inspiration and guidance to keep you on track with your goals",
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visual insights into your health journey with detailed progress reports",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your AI Health Companion
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AION combines artificial intelligence with personalized wellness to help you achieve your health goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/dashboard">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/dashboard">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for a Healthier Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed to support your complete wellness journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-hero rounded-2xl p-12 text-white shadow-hover">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users already improving their lifestyle with AION
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/dashboard">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 AION. AI-Powered Health & Wellness Platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
