import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Question } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface MatchingQuestionProps {
  question: Question;
  isAnswered: boolean;
  onCheck: (correctCount: number) => void;
}

export default function MatchingQuestion({ question, isAnswered, onCheck }: MatchingQuestionProps) {
  const [leftItems, setLeftItems] = useState<{ id: number; text: string }[]>([]);
  const [rightItems, setRightItems] = useState<{ id: number; text: string }[]>([]);
  
  // Mapping of Left ID -> Right ID
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);

  useEffect(() => {
    if (question.pairs) {
      const l = question.pairs.map((p, i) => ({ id: i, text: p.left }));
      const r = question.pairs.map((p, i) => ({ id: i, text: p.right }));
      // Shuffle
      setLeftItems(l.sort(() => Math.random() - 0.5));
      setRightItems(r.sort(() => Math.random() - 0.5));
      setMatches({});
      setSelectedLeft(null);
    }
  }, [question]);

  const handleLeftClick = (id: number) => {
    if (isAnswered) return;
    if (selectedLeft === id) {
      setSelectedLeft(null);
    } else {
      setSelectedLeft(id);
    }
  };

  const handleRightClick = (id: number) => {
    if (isAnswered) return;
    
    if (selectedLeft === null) {
      const matchedLeftIdStr = Object.keys(matches).find(k => matches[Number(k)] === id);
      if (matchedLeftIdStr !== undefined) {
        const newMatches = { ...matches };
        delete newMatches[Number(matchedLeftIdStr)];
        setMatches(newMatches);
      }
      return;
    }

    setMatches(prev => {
      const newMatches = { ...prev };
      // Remove any existing match for this right item to prevent duplicates
      const existingLeftMatchForRight = Object.keys(newMatches).find(k => newMatches[Number(k)] === id);
      if (existingLeftMatchForRight) {
        delete newMatches[Number(existingLeftMatchForRight)];
      }
      newMatches[selectedLeft] = id;
      return newMatches;
    });
    setSelectedLeft(null);
  };

  // Called from parent to submit
  useEffect(() => {
    if (isAnswered) {
      // Check if all correct
      let correctCount = 0;
      if (question.pairs) {
        correctCount = question.pairs.filter((_, i) => Number(matches[i]) === i).length;
      }
      onCheck(correctCount);
    }
  }, [isAnswered]); // Ensure onCheck runs when answered

  // To allow parent to trigger "Semak", we rely on the parent changing isAnswered.
  // Wait, the parent needs to know if the user has completed all matches so it can enable the "Semak Jawapan" button.
  // But parent state selectedOption is used for that.
  return (
    <Card className="border-2 border-slate-100 shadow-xl overflow-hidden mt-4">
      <CardHeader className="bg-slate-50/50 pb-6">
        <CardTitle className="text-2xl leading-tight" dir="rtl">
          {question.question || "Padankan yang berikut:"}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-3">
            {leftItems.map((item) => {
              const matchedRightId = matches[item.id];
              const isSelected = selectedLeft === item.id;
              
              let style = "w-full justify-start text-right h-auto py-3 px-4 border-2 ";
              if (isAnswered) {
                if (matchedRightId !== undefined && Number(matchedRightId) === item.id) style += "border-emerald-500 bg-emerald-50 text-emerald-700";
                else style += "border-rose-500 bg-rose-50 text-rose-700";
              } else {
                if (isSelected) style += "border-primary bg-primary/10 ring-2 ring-primary/20";
                else if (matchedRightId !== undefined) style += "border-slate-400 bg-slate-100";
                else style += "border-slate-200 hover:border-slate-300";
              }

              return (
                <Button
                  key={`l-${item.id}`}
                  variant="ghost"
                  className={style}
                  onClick={() => handleLeftClick(item.id)}
                  disabled={isAnswered}
                >
                  <span className="whitespace-normal text-sm sm:text-base w-full text-right" dir="rtl">{item.text}</span>
                  {isAnswered && matchedRightId === item.id && <CheckCircle2 className="h-4 w-4 mr-2 shrink-0 text-emerald-500" />}
                  {isAnswered && matchedRightId !== item.id && <XCircle className="h-4 w-4 mr-2 shrink-0 text-rose-500" />}
                </Button>
              );
            })}
          </div>

          <div className="space-y-3">
            {rightItems.map((item) => {
              // Find if this right item is matched by any left item
              const matchedLeftId = Object.keys(matches).find(k => matches[Number(k)] === item.id);
              
              let style = "w-full justify-start text-right h-auto py-3 px-4 border-2 relative overflow-visible ";
              if (isAnswered) {
                // Determine if the left it matched with is correct
                if (matchedLeftId !== undefined && Number(matchedLeftId) === item.id) style += "border-emerald-500 bg-emerald-50 text-emerald-700";
                else if (matchedLeftId !== undefined) style += "border-rose-500 bg-rose-50 text-rose-700";
                else style += "border-slate-200 opacity-50"; 
              } else {
                if (matchedLeftId !== undefined) style += "border-slate-400 bg-slate-100";
                else if (selectedLeft !== null) style += "border-primary/50 border-dashed hover:border-primary hover:bg-primary/5 cursor-pointer";
                else style += "border-slate-200";
              }

              return (
                <Button
                  key={`r-${item.id}`}
                  variant="ghost"
                  className={style}
                  onClick={() => handleRightClick(item.id)}
                  disabled={isAnswered || (!isAnswered && selectedLeft === null && matchedLeftId === undefined)}
                >
                  <span className="whitespace-normal text-sm sm:text-base w-full overflow-hidden text-right" dir="rtl">{item.text}</span>
                  {matchedLeftId !== undefined && !isAnswered && (
                     <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-slate-400" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
