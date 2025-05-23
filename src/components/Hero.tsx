
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 rounded-full">
            <Sparkles className="w-4 h-4 text-brand-600 mr-2" />
            <span className="text-sm font-medium text-brand-700">
              AI-Powered Career Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-brand-800 to-purple-800 bg-clip-text text-transparent">
              Build Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Dream Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-brand-800 to-purple-800 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your résumé into a stunning portfolio, ace interviews with AI coaching, 
            and land your dream job with personalized career guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-4 text-lg h-auto"
            >
              Start Building for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 px-8 py-4 text-lg h-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Portfolio Builder</h3>
              <p className="text-sm text-gray-600 text-center">
                Transform your résumé into a professional website in minutes
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mock Interviews</h3>
              <p className="text-sm text-gray-600 text-center">
                Practice with AI interviewer and get real-time feedback
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Job Matching</h3>
              <p className="text-sm text-gray-600 text-center">
                Get personalized job alerts and application assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
