"use client";

import Link from "next/link";
import { BookOpen, Users, BarChart3, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Courses",
    description: "Access a diverse library of expertly crafted courses tailored to your learning goals and skill level",
    icon: BookOpen,
  },
  {
    title: "Interactive Learning",
    description: "Engage with dynamic content, hands-on exercises, and real-world projects that accelerate your growth",
    icon: Users,
  },
  {
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights, personalized recommendations, and achievement milestones",
    icon: BarChart3,
  },
  {
    title: "Community Network",
    description: "Connect with fellow learners and expert instructors in our vibrant community for collaborative learning",
    icon: MessageCircle,
  },
]

export const LandingPageView = () => {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">Next-Generation Learning Platform</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transform Your Educational Journey
          </h1>
          <p className="max-w-[720px] text-muted-foreground md:text-xl">
            Experience cutting-edge learning with our innovative, interactive
            course management system. Unlock premium educational content
            whenever you need it
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
              Discover the features that make learning engaging, effective, and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
