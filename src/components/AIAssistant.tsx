
import { useState } from "react";
import { useAI } from "@/hooks/useAI";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Wand2 } from "lucide-react";

interface AIAssistantProps {
  type: 'portfolio' | 'resume' | 'coverLetter' | 'interview' | 'jobSearch' | 'default';
  placeholder?: string;
  context?: string;
  onResult?: (result: string) => void;
  buttonText?: string;
}

const AIAssistant = ({ 
  type, 
  placeholder = "Enter your prompt here...", 
  context,
  onResult,
  buttonText = "Generate with AI"
}: AIAssistantProps) => {
  const [prompt, setPrompt] = useState("");
  const { generateContent, loading, result } = useAI({ defaultType: type });

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    const content = await generateContent(prompt, type, context);
    if (content && onResult) {
      onResult(content);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-600" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder={placeholder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] mb-4"
        />
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">AI Response:</h3>
            <div className="whitespace-pre-wrap">{result}</div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleGenerate} 
          disabled={loading || !prompt.trim()} 
          className="flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4" />
              {buttonText}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
