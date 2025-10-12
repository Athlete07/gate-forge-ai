import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Clock, FileText, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">GATE Exam Simulator</h1>
                <p className="text-xs text-muted-foreground">Computer Science & IT</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Master Your GATE Preparation
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience real GATE exam conditions with our comprehensive mock test platform
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={() => navigate("/exam")}
              className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
            >
              Start Mock Test
            </Button>
            <Button size="lg" variant="outline">
              View Instructions
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Real-Time Timer</h3>
            <p className="text-sm text-muted-foreground">
              3-hour countdown with visual warnings to simulate actual exam pressure
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">65 Questions</h3>
            <p className="text-sm text-muted-foreground">
              10 General Aptitude + 55 Core CS questions covering all topics
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Detailed Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Topic-wise breakdown, time analysis, and personalized improvement roadmap
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg">Step-by-Step Solutions</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive explanations with references for every question
            </p>
          </Card>
        </div>
      </section>

      {/* Exam Details */}
      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Exam Specifications</h3>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="font-medium">Total Questions:</span>
              <span>65</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="font-medium">Duration:</span>
              <span>3 Hours (180 minutes)</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="font-medium">Total Marks:</span>
              <span>100</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="font-medium">Negative Marking:</span>
              <span>-0.33 for 1-mark | -0.66 for 2-mark</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="font-medium">Question Type:</span>
              <span>Multiple Choice (MCQ)</span>
            </div>
          </div>
          <div className="mt-8">
            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80"
              size="lg"
              onClick={() => navigate("/exam")}
            >
              Begin Exam Now
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
