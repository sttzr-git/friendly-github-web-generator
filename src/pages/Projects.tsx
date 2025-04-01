
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RepositoryCard from "@/components/RepositoryCard";
import { Button } from "@/components/ui/button";
import { Book, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  // Sample repository data
  const repositories = [
    {
      title: "awesome-project",
      description: "A collection of awesome things related to web development and programming.",
      language: "JavaScript",
      stars: 278,
      forks: 42,
      languageColor: "#f1e05a",
    },
    {
      title: "portfolio-website",
      description: "My personal portfolio website built with React and Tailwind CSS.",
      language: "TypeScript",
      stars: 134,
      forks: 25,
      languageColor: "#3178c6",
    },
    {
      title: "backend-api",
      description: "A RESTful API built with Node.js and Express.",
      language: "JavaScript",
      stars: 89,
      forks: 12,
      languageColor: "#f1e05a",
    },
    {
      title: "machine-learning-models",
      description: "Implementation of various machine learning algorithms from scratch.",
      language: "Python",
      stars: 165,
      forks: 37,
      languageColor: "#3572A5",
    },
    {
      title: "data-visualization",
      description: "Beautiful data visualizations using D3.js and SVG.",
      language: "JavaScript",
      stars: 72,
      forks: 16,
      languageColor: "#f1e05a",
    },
    {
      title: "mobile-app",
      description: "Cross-platform mobile application built with React Native.",
      language: "TypeScript",
      stars: 122,
      forks: 31,
      languageColor: "#3178c6",
    },
    {
      title: "algorithm-challenges",
      description: "Solutions to various algorithm and data structure challenges.",
      language: "Python",
      stars: 56,
      forks: 8,
      languageColor: "#3572A5",
    },
    {
      title: "game-development",
      description: "2D game development with JavaScript and HTML5 Canvas.",
      language: "JavaScript",
      stars: 91,
      forks: 14,
      languageColor: "#f1e05a",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container py-6">
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Repositories</h1>
              <Button className="gap-2 bg-github-green text-white hover:bg-github-green/90">
                <Book className="h-4 w-4" />
                <span>New</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Find a repository..."
                  className="pl-8"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  Type
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  Language
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  Sort
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="bg-background border-b border-border/40 w-full justify-start rounded-none p-0 h-auto">
              <TabsTrigger value="all" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-github-blue data-[state=active]:bg-transparent px-4 py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="public" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-github-blue data-[state=active]:bg-transparent px-4 py-2">
                Public
              </TabsTrigger>
              <TabsTrigger value="private" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-github-blue data-[state=active]:bg-transparent px-4 py-2">
                Private
              </TabsTrigger>
              <TabsTrigger value="sources" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-github-blue data-[state=active]:bg-transparent px-4 py-2">
                Sources
              </TabsTrigger>
              <TabsTrigger value="forks" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-github-blue data-[state=active]:bg-transparent px-4 py-2">
                Forks
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {repositories.map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="public" className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {repositories.slice(0, 6).map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="private" className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {repositories.slice(6, 8).map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sources" className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {repositories.slice(0, 4).map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="forks" className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {repositories.slice(4, 7).map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
