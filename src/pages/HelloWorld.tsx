
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HelloWorld = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background flex items-center justify-center">
        <div className="container py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Hallo Welt</h1>
          <p className="text-xl text-muted-foreground">Willkommen auf meiner einfachen Webseite</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelloWorld;
