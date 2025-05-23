
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your career transformation",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-gray-500 to-gray-600",
      features: [
        "1 AI-generated portfolio",
        "Basic résumé optimization",
        "5 cover letter generations",
        "Basic interview practice",
        "Job search guidance",
        "Community support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Everything you need for a successful job search",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-brand-500 to-brand-600",
      features: [
        "Unlimited portfolios",
        "Advanced ATS optimization",
        "Unlimited cover letters",
        "Advanced mock interviews",
        "Priority job alerts",
        "Career coaching sessions",
        "Custom domain hosting",
        "Email support"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Advanced features for teams and organizations",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Bulk user management",
        "Custom integrations",
        "Advanced analytics",
        "Dedicated account manager",
        "SLA guarantees",
        "Priority support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Career Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI features 
            to help you land your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-2 border-brand-500 shadow-lg scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-12" : "pt-8"}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center text-white`}>
                    {plan.icon}
                  </div>
                  {plan.popular && (
                    <div className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Recommended
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white' 
                      : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial • No credit card required • Cancel anytime
          </p>
          <p className="text-sm text-gray-500">
            Questions? Check our <a href="#" className="text-brand-600 hover:underline">FAQ</a> or 
            <a href="#" className="text-brand-600 hover:underline ml-1">contact support</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
