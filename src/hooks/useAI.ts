
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./use-toast";

type AIFeatureType = 'portfolio' | 'resume' | 'coverLetter' | 'interview' | 'jobSearch' | 'default';

interface UseAIProps {
  defaultType?: AIFeatureType;
}

export const useAI = ({ defaultType = 'default' }: UseAIProps = {}) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const generateContent = async (prompt: string, type: AIFeatureType = defaultType, context?: string) => {
    setLoading(true);
    setResult(null);
    setError(null);
    
    try {
      // Log the request for debugging purposes
      console.log(`Sending AI request for ${type} with prompt:`, prompt);
      
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { prompt, type, context }
      });
      
      if (error) {
        throw error;
      }
      
      if (!data?.content) {
        throw new Error("No content returned from AI service");
      }
      
      console.log(`Received AI response for ${type}:`, data);
      
      setResult(data.content);
      toast({
        title: "AI Content Generated",
        description: "Your content has been successfully generated.",
        variant: "default"
      });
      
      return data.content;
      
    } catch (error: any) {
      const errorMessage = error.message || "Failed to generate content. Please try again.";
      setError(errorMessage);
      console.error("AI generation error:", error);
      
      toast({
        variant: "destructive",
        title: "AI Generation Failed",
        description: errorMessage
      });
      
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearResult = () => {
    setResult(null);
    setError(null);
  };

  return {
    generateContent,
    loading,
    result,
    error,
    setResult,
    clearResult
  };
};
