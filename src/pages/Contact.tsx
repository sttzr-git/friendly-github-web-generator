
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { GitIssue, Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container py-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center text-3xl font-bold">Get in Touch</h1>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to me using any of the following methods.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray">
                        <Mail className="h-5 w-5 text-github-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray">
                        <MessageSquare className="h-5 w-5 text-github-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Contact Form</p>
                        <p className="text-sm text-muted-foreground">Fill out the form to reach me directly.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray">
                        <GitIssue className="h-5 w-5 text-github-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Issue Tracker</p>
                        <p className="text-sm text-muted-foreground">Report bugs or request features on GitHub.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="mb-3 text-sm font-medium">Social Media</p>
                    <div className="flex gap-3">
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray hover:bg-github-gray/80">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray hover:bg-github-gray/80">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-github-gray hover:bg-github-gray/80">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Your message" className="min-h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-github-green text-white hover:bg-github-green/90">
                        Send Message
                      </Button>
                    </form>
                  </Form>
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

export default Contact;
