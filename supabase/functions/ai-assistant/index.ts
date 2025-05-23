
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, type, context } = await req.json();
    
    // Different system prompts based on feature type
    const systemPrompts = {
      'portfolio': 'You are an expert portfolio creator. Create professional portfolio content based on the provided information.',
      'resume': 'You are an expert resume builder with ATS optimization knowledge. Create professional resume content that will score highly on ATS systems.',
      'coverLetter': 'You are a professional cover letter writer. Create a compelling cover letter that matches the job description and highlights relevant experience.',
      'interview': 'You are an expert interviewer. Ask relevant questions for the specified job role and provide constructive feedback on responses.',
      'jobSearch': 'You are a job search assistant. Provide personalized job recommendations and application strategies.',
      'default': 'You are a helpful career assistant. Provide professional guidance on career-related questions.'
    };

    const systemPrompt = systemPrompts[type] || systemPrompts.default;
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: systemPrompt },
          ...(context ? [{ role: "user", content: context }] : []),
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const data = await response.json();
    
    return new Response(JSON.stringify({
      content: data.choices[0].message.content,
      type: type
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error in AI assistant function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
