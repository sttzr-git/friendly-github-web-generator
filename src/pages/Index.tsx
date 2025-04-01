
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import RepositoryCard from "@/components/RepositoryCard";
import ContributionGraph from "@/components/ContributionGraph";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Book, Globe, Pin, Star } from "lucide-react";

const Index = () => {
  // Mock data for the contribution graph
  const generateContributionData = () => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < 100; i++) {
      const date = new Date();
      date.setDate(now.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 15),
      });
    }
    return data;
  };

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
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container py-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <aside className="md:col-span-1">
              <ProfileCard
                name="John Doe"
                username="johndoe"
                avatarUrl="https://github.com/github.png"
                bio="Full-stack developer passionate about building great web applications. Lover of open-source and contributing to the community."
                location="San Francisco, CA"
                followers={142}
                following={87}
              />
              
              {/* Globe Image */}
              <div className="mt-6 rounded-lg border border-border/40 overflow-hidden">
                <h3 className="p-3 text-lg font-medium border-b border-border/40 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-github-blue" />
                  <span>Weltkugel</span>
                </h3>
                <AspectRatio ratio={1/1} className="bg-github-gray">
                  <img 
                    src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Weltkugel" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </aside>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Popular repositories</h2>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Book className="h-4 w-4" />
                    <span>New</span>
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {repositories.map((repo, index) => (
                    <RepositoryCard key={index} {...repo} />
                  ))}
                </div>
                <div className="mt-4">
                  <ContributionGraph data={generateContributionData()} />
                </div>
                <div className="mt-4 rounded-lg border border-border/40 bg-github-gray p-4">
                  <h3 className="mb-4 text-lg font-medium">Pinned</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-md border border-border/40 bg-background p-3">
                      <Pin className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <h4 className="font-medium text-github-blue hover:underline">awesome-project</h4>
                        <p className="text-sm text-muted-foreground">A collection of awesome things</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5" />
                        <span>278</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-md border border-border/40 bg-background p-3">
                      <Pin className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <h4 className="font-medium text-github-blue hover:underline">portfolio-website</h4>
                        <p className="text-sm text-muted-foreground">My personal portfolio website</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5" />
                        <span>134</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
