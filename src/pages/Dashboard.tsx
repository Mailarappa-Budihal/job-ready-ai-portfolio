
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">PortfolioAI Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Welcome, {user?.user_metadata?.name || user?.email}
            </span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Portfolio Card */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Builder</CardTitle>
              <CardDescription>
                Create a professional portfolio website to showcase your work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Create Portfolio</Button>
            </CardContent>
          </Card>

          {/* Resume Card */}
          <Card>
            <CardHeader>
              <CardTitle>Resume Generator</CardTitle>
              <CardDescription>
                Create an ATS-optimized resume tailored to your target roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Create Resume</Button>
            </CardContent>
          </Card>

          {/* Cover Letter Card */}
          <Card>
            <CardHeader>
              <CardTitle>Cover Letter Writer</CardTitle>
              <CardDescription>
                Generate personalized cover letters for your job applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Write Cover Letter</Button>
            </CardContent>
          </Card>

          {/* Mock Interview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Mock Interviewer</CardTitle>
              <CardDescription>
                Practice for interviews with AI-powered mock sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Start Practice</Button>
            </CardContent>
          </Card>

          {/* Job Alerts Card */}
          <Card>
            <CardHeader>
              <CardTitle>Job Alerts</CardTitle>
              <CardDescription>
                Set up personalized job alerts from multiple sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Configure Alerts</Button>
            </CardContent>
          </Card>

          {/* Saved Jobs Card */}
          <Card>
            <CardHeader>
              <CardTitle>Saved Jobs</CardTitle>
              <CardDescription>
                Track and manage your job applications in one place
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>View Saved Jobs</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
