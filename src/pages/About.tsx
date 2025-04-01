
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Globe, Mail, MapPin, User } from "lucide-react";

const About = () => {
  // Skills data
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", 
    "MongoDB", "PostgreSQL", "HTML", "CSS", "Tailwind CSS", 
    "Git", "GitHub", "Docker", "AWS", "CI/CD",
    "Python", "Django", "GraphQL", "Redux", "Next.js"
  ];

  // Experience data
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Led the development of multiple web applications using React, TypeScript, and Tailwind CSS. Implemented state management with Redux and improved performance by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions Ltd.",
      period: "2018 - 2020",
      description: "Developed and maintained RESTful APIs using Node.js and Express. Built responsive and interactive UI components with React and Angular."
    },
    {
      title: "Junior Developer",
      company: "CodeCraft Studios",
      period: "2016 - 2018",
      description: "Worked on various client projects, predominantly focusing on frontend technologies like HTML, CSS, and JavaScript."
    }
  ];

  // Education data
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with focus on web technologies and distributed systems."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Science College",
      period: "2010 - 2014",
      description: "Fundamental computer science education with courses in algorithms, data structures, and software development."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container py-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-24 w-24 border-2 border-border">
                      <AvatarImage src="https://github.com/github.png" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h2 className="text-xl font-semibold">John Doe</h2>
                      <p className="text-muted-foreground">Full Stack Developer</p>
                    </div>
                    <Button className="w-full bg-github-green text-white hover:bg-github-green/90">Hire Me</Button>
                    <div className="w-full space-y-2 pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>@johndoe</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>john.doe@example.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>johndoe.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-github-gray px-3 py-1 text-xs"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-semibold">About Me</h3>
                  <p className="text-muted-foreground">
                    I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                    I specialize in JavaScript, TypeScript, React, and Node.js. My goal is to create high-quality, 
                    scalable, and user-friendly applications that solve real-world problems.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    I'm enthusiastic about open-source projects and regularly contribute to the community. 
                    I enjoy tackling complex problems and constantly learning new technologies to stay 
                    ahead in the rapidly evolving tech landscape.
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-semibold">Experience</h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-github-blue pl-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{exp.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Briefcase className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-semibold">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-github-green pl-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{edu.degree}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="h-4 w-4" />
                              <span>{edu.school}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
