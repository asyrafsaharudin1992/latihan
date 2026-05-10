import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { askTutor } from "../lib/gemini";
import Mascot from "./Mascot";
import { Send, Sparkles } from "lucide-react";

interface AITutorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mascotImage: string;
  initialQuestion?: string;
}

export default function AITutorDialog({ open, onOpenChange, mascotImage, initialQuestion }: AITutorDialogProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>(
    initialQuestion ? [{ role: 'user', content: initialQuestion }] : []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;
    
    const newUserMsg = { role: 'user' as const, content: text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setIsLoading(true);

    const aiResponse = await askTutor(text, "JAIS School subjects");
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse || "Ops!" }]);
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex-shrink-0">
               <img src={mascotImage} alt="Mascot" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div>
              <DialogTitle>Tanya Kawan AI 🤖</DialogTitle>
              <DialogDescription className="text-blue-100">
                Tutor interaktif anda untuk subjek JAIS
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                <Sparkles className="mx-auto h-12 w-12 mb-4 opacity-20" />
                <p>Hai! Saya kawan AI anda. Ada apa-apa nak tanya tentang pelajaran hari ini? 😊</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl p-4 rounded-tl-none animate-pulse">
                  Sedang berfikir... 🤔
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-4 border-t bg-slate-50">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex w-full items-center gap-2"
          >
            <Input 
              placeholder="Tulis soalan anda di sini..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
