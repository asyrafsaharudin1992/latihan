import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quiz, Question } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, RotateCcw, HelpCircle, ChevronRight, AlertCircle } from "lucide-react";
import MatchingQuestion from "./MatchingQuestion";
import { ReportQuestionModal } from "./ReportQuestionModal";

interface QuizSectionProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
  onAskAI: (question: string) => void;
  userName?: string;
}

export default function QuizSection({ quiz, onComplete, onAskAI, userName = "Pelajar" }: QuizSectionProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [matchingCorrectCount, setMatchingCorrectCount] = useState(0);
  
  // Reporting state
  const [showReportModal, setShowReportModal] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIdx];
  const progress = ((currentQuestionIdx) / quiz.questions.length) * 100;
  const isMatching = currentQuestion.type === "matching";

  const totalMaxScore = quiz.questions.reduce((acc, q) => {
    if (q.type === "matching") return acc + (q.pairs?.length || 5);
    return acc + 1;
  }, 0);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleMatchingCheck = (correctCount: number) => {
    setMatchingCorrectCount(correctCount);
  };

  const handleNext = () => {
    let earnedPoints = 0;
    if (isMatching) {
      earnedPoints = matchingCorrectCount;
    } else {
      earnedPoints = selectedOption === Number(currentQuestion.correctAnswer) ? 1 : 0;
    }

    const newScore = score + earnedPoints;
    
    if (currentQuestionIdx + 1 < quiz.questions.length) {
      setScore(newScore);
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setMatchingCorrectCount(0);
    } else {
      setScore(newScore);
      setShowResult(true);
      onComplete(newScore);
    }
  };

  const checkAnswer = () => {
    if (!isMatching && selectedOption === null) return;
    // For matching, we allow checking anytime, but user should ideally match all.
    setIsAnswered(true);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center space-y-6 py-8"
      >
        <div className="text-6xl mb-4">
          {score / totalMaxScore >= 0.8 ? "🎉" : "💪"}
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Kuiz Selesai!</h2>
        <p className="text-xl text-slate-600">
          Markah anda: <span className="font-bold text-primary">{score}</span> / {totalMaxScore}
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => window.location.reload()} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" /> Cuba Lagi
          </Button>
          <Button onClick={() => window.location.reload()}>
            Kembali ke Laman Utama
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
          <span>Soalan {currentQuestionIdx + 1} daripada {quiz.questions.length}</span>
          <span>{Math.round(progress)}% Selesai</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIdx}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMatching ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">SOALAN PADANAN</Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary"
                    onClick={() => onAskAI(currentQuestion.question)}
                  >
                    <HelpCircle className="mr-2 h-4 w-4" /> Tanya AI
                  </Button>
              </div>
              <MatchingQuestion 
                question={currentQuestion} 
                isAnswered={isAnswered} 
                onCheck={handleMatchingCheck} 
              />
            </div>
          ) : (
            <Card className="border-2 border-slate-100 shadow-xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 pb-8">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">SOALAN OBJEKTIF</Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary"
                    onClick={() => onAskAI(currentQuestion.question)}
                  >
                    <HelpCircle className="mr-2 h-4 w-4" /> Tanya AI
                  </Button>
                </div>
                <CardTitle className="text-2xl leading-tight text-right w-full" dir="rtl">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                {currentQuestion.options?.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === Number(currentQuestion.correctAnswer);
                  
                  let buttonStyle = "w-full justify-start text-right h-auto py-4 px-6 text-lg border-2 transition-all duration-200 flex-row-reverse gap-4";
                  if (isAnswered) {
                    if (isCorrect) buttonStyle += " bg-emerald-50 border-emerald-500 text-emerald-700";
                    else if (isSelected) buttonStyle += " bg-rose-50 border-rose-500 text-rose-700";
                    else buttonStyle += " border-slate-100 opacity-50";
                  } else {
                    if (isSelected) buttonStyle += " border-primary bg-primary/5 ring-2 ring-primary/20";
                     else buttonStyle += " border-slate-100 hover:border-slate-300 hover:bg-slate-50";
                  }

                  return (
                    <Button
                      key={idx}
                      variant="ghost"
                      className={buttonStyle}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      dir="rtl"
                    >
                      <div className="flex w-full items-center justify-between flex-row-reverse" dir="rtl">
                        <span className="w-full text-right" dir="rtl">{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mr-2" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-500 shrink-0 mr-2" />}
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-100 gap-4">
        {/* Report Question Button */}
        <Button 
          variant="ghost" 
          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 w-full sm:w-auto"
          onClick={() => setShowReportModal(true)}
        >
          <AlertCircle className="w-4 h-4 mr-2" />
          Lapor Soalan
        </Button>

        <div className="flex w-full sm:w-auto justify-end">
          {!isAnswered ? (
            <Button 
              size="lg" 
              onClick={checkAnswer} 
              disabled={!isMatching && selectedOption === null}
              className="w-full sm:w-auto px-12"
            >
              Semak Jawapan
            </Button>
          ) : (
            <motion.div 
              initial={{ y: 10, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200"
            >
              <div className="text-sm text-slate-600 block text-right w-full" dir="rtl">
                <span className="font-bold text-slate-900 block" dir="rtl">Penjelasan:</span>
                <p className="mt-1">{currentQuestion.explanation}</p>
                {isMatching && (
                  <span className={`block mt-2 font-bold ${matchingCorrectCount === (currentQuestion.pairs?.length || 5) ? 'text-emerald-600' : 'text-amber-600'}`}>
                    Anda berjaya memadankan {matchingCorrectCount} dengan betul daripada {currentQuestion.pairs?.length || 5}.
                  </span>
                )}
              </div>
              <Button size="lg" onClick={handleNext} className="w-full sm:w-auto shrink-0">
                {currentQuestionIdx + 1 === quiz.questions.length ? "Selesai" : "Seterusnya"} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <ReportQuestionModal
          questionText={currentQuestion.question}
          userName={userName}
          onClose={() => setShowReportModal(false)}
        />
      )}
    </div>
  );
}
