
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
  const { toast } = useToast();

  const generateContent = async (prompt: string, type: AIFeatureType = defaultType, context?: string) => {
    setLoading(true);
    setResult(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { prompt, type, context }
      });
      
      if (error) {
        throw error;
      }
      
      setResult(data.content);
      return data.content;
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "AI Generation Failed",
        description: error.message || "Failed to generate content. Please try again."
      });
      console.error("AI generation error:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateContent,
    loading,
    result,
    setResult
  };
};
