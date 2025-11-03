import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Activity className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`transition-colors ${
                isActive("/dashboard") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Button asChild variant="default">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/") ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`transition-colors ${
                  isActive("/dashboard") ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Button asChild variant="default" className="w-full">
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
