
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Target, 
  TrendingUp, 
  Zap,
  Award,
  Globe,
  Search
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AI Portfolio Builder",
      description: "Transform your résumé into a stunning, responsive portfolio website with custom subdomain hosting.",
      gradient: "from-brand-500 to-brand-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ATS-Optimized Résumés",
      description: "Generate professional résumés that pass Applicant Tracking Systems with high ATS scores.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Smart Cover Letters",
      description: "Create tailored cover letters for specific jobs using AI analysis of job descriptions.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Mock Interviews",
      description: "Practice interviews with AI-powered interviewer that adapts to your target role and experience.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Job Alert Engine",
      description: "Get personalized job recommendations from multiple sources with smart keyword matching.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Coaching",
      description: "Receive AI-powered career guidance, skill gap analysis, and development recommendations.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track your application success rate and get insights to improve your job search strategy.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "ATS Score Optimization",
      description: "Real-time scoring and suggestions to optimize your résumé for Applicant Tracking Systems.",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "One-Click Applications",
      description: "Apply to jobs instantly with your optimized portfolio and auto-generated cover letters.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From portfolio creation to interview preparation, PortfolioAI provides all the tools 
            you need to stand out in today's competitive job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
