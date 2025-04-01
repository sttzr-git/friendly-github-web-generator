
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Globe } from "lucide-react";

const HelloWorld = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background flex flex-col items-center justify-center">
        <div className="container py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Hallo Welt</h1>
          <p className="text-xl text-muted-foreground mb-8">Willkommen auf meiner einfachen Webseite</p>
          
          {/* Weltkugel Image */}
          <div className="max-w-md mx-auto rounded-lg border border-border/40 overflow-hidden">
            <h3 className="p-3 text-lg font-medium border-b border-border/40 flex items-center justify-center gap-2">
              <Globe className="h-5 w-5 text-github-blue" />
              <span>Weltkugel</span>
            </h3>
            <AspectRatio ratio={16/9} className="bg-github-gray">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Weltkugel" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelloWorld;
