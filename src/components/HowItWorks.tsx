
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Download, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Info",
      description: "Upload your résumé or complete our guided questionnaire about your experience and career goals.",
      gradient: "from-brand-500 to-brand-600",
      number: "01"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Creates Your Portfolio",
      description: "Our AI analyzes your background and generates a professional portfolio, optimized résumé, and personalized content.",
      gradient: "from-purple-500 to-purple-600",
      number: "02"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Review & Customize",
      description: "Review your generated content, make edits, choose templates, and publish your portfolio with a custom domain.",
      gradient: "from-blue-500 to-blue-600",
      number: "03"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch Your Career",
      description: "Start applying to jobs with your new portfolio, practice interviews, and receive personalized job recommendations.",
      gradient: "from-emerald-500 to-emerald-600",
      number: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
              From Résumé to
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Dream Job in 4 Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process takes you from raw information to a complete 
            professional presence, ready for today's competitive job market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              <Card className="relative bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-100 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto relative -mt-12`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your career in minutes?
          </p>
          <button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
