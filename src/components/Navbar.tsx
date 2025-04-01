
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Code, GitBranch, GitPullRequest, Home, Star, Users } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <GitBranch className="h-6 w-6 text-github-blue" />
            <span className="hidden font-bold sm:inline-block">GitHub Portfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/projects" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
              <Code className="h-4 w-4" />
              <span>Projects</span>
            </Link>
            <Link to="/about" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
              <Book className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
              <Users className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <GitPullRequest className="h-4 w-4" />
              <span className="hidden sm:inline">PR</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Star</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
