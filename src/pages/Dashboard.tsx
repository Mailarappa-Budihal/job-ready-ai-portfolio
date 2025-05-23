
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIAssistant from "@/components/AIAssistant";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Portfolio Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-600" />
                    Portfolio Builder
                  </CardTitle>
                  <CardDescription>
                    Create a professional portfolio website to showcase your work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("portfolio")}>Create Portfolio</Button>
                </CardContent>
              </Card>

              {/* Resume Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    Resume Generator
                  </CardTitle>
                  <CardDescription>
                    Create an ATS-optimized resume tailored to your target roles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("resume")}>Create Resume</Button>
                </CardContent>
              </Card>

              {/* Cover Letter Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    Cover Letter Writer
                  </CardTitle>
                  <CardDescription>
                    Generate personalized cover letters for your job applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("resume")}>Write Cover Letter</Button>
                </CardContent>
              </Card>

              {/* Mock Interview Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-600" />
                    Mock Interviewer
                  </CardTitle>
                  <CardDescription>
                    Practice for interviews with AI-powered mock sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("interviews")}>Start Practice</Button>
                </CardContent>
              </Card>

              {/* Job Alerts Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                    Job Alerts
                  </CardTitle>
                  <CardDescription>
                    Set up personalized job alerts from multiple sources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("jobs")}>Configure Alerts</Button>
                </CardContent>
              </Card>

              {/* Saved Jobs Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-pink-600" />
                    Saved Jobs
                  </CardTitle>
                  <CardDescription>
                    Track and manage your job applications in one place
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setActiveTab("jobs")}>View Saved Jobs</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Builder</CardTitle>
                <CardDescription>Create your professional portfolio with AI assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAssistant 
                  type="portfolio"
                  placeholder="Describe your experience, skills, and the type of portfolio you want to create..."
                  buttonText="Generate Portfolio Content"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resume Tab */}
          <TabsContent value="resume">
            <Card>
              <CardHeader>
                <CardTitle>Resume & Cover Letter</CardTitle>
                <CardDescription>Create ATS-optimized resumes and tailored cover letters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <AIAssistant 
                    type="resume"
                    placeholder="Describe your experience, skills, and target job role for your resume..."
                    buttonText="Generate Resume Content"
                  />
                  <AIAssistant 
                    type="coverLetter"
                    placeholder="Paste the job description and briefly describe your relevant experience..."
                    buttonText="Generate Cover Letter"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interviews Tab */}
          <TabsContent value="interviews">
            <Card>
              <CardHeader>
                <CardTitle>Mock Interviews</CardTitle>
                <CardDescription>Practice interviews with AI and get feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAssistant 
                  type="interview"
                  placeholder="Enter the job title and type of interview you want to practice (e.g., 'Frontend Developer technical interview')..."
                  buttonText="Start Mock Interview"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Job Search Assistant</CardTitle>
                <CardDescription>Get job recommendations and application strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAssistant 
                  type="jobSearch"
                  placeholder="Describe your target role, skills, location preferences, and any other job search criteria..."
                  buttonText="Get Job Recommendations"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
