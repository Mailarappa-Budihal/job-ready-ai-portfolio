
import { useState } from "react";
import { useAI } from "@/hooks/useAI";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, Wand2, RefreshCw, Copy, Check } from "lucide-react";

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
  const [copied, setCopied] = useState(false);
  const { generateContent, loading, result, error, clearResult } = useAI({ defaultType: type });

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    const content = await generateContent(prompt, type, context);
    if (content && onResult) {
      onResult(content);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRefresh = () => {
    clearResult();
    setPrompt("");
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
        
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">AI Response:</h3>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleCopy}
                  className="h-8 px-2 text-gray-500"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleRefresh}
                  className="h-8 px-2 text-gray-500"
                >
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>
            </div>
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
