
import React from "react";
import { Link } from "react-router-dom";
import { GitBranch, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <div className="flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-github-blue" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GitHub Portfolio
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm text-muted-foreground">Built with</p>
          <Heart className="h-4 w-4 text-github-green" />
          <p className="text-sm text-muted-foreground">and React</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
