
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GitFork, Star } from "lucide-react";

interface RepositoryCardProps {
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  languageColor: string;
}

const RepositoryCard = ({
  title,
  description,
  language,
  stars,
  forks,
  languageColor,
}: RepositoryCardProps) => {
  return (
    <Card className="h-full overflow-hidden border border-border hover:border-primary/20 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-github-blue" />
              <span className="text-github-blue hover:underline cursor-pointer">{title}</span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span 
                  className="absolute inline-flex h-full w-full rounded-full" 
                  style={{ backgroundColor: languageColor }}
                ></span>
              </span>
              <span>{language}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              <span>{forks}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-[10px] h-5">Public</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RepositoryCard;
