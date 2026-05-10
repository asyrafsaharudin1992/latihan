/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Mascot from "./components/Mascot";
import SubjectGrid from "./components/SubjectGrid";
import QuizSection from "./components/QuizSection";
import AITutorDialog from "./components/AITutorDialog";
import { SUBJECTS, QUIZZES, CHAPTERS } from "./data/mockData";
import { type Quiz, type Chapter } from "./types";
import { generateChapterQuestions } from "./services/aiGenerator";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Loader2, Sparkles, Trophy, BookOpen, MessageCircle, ChevronLeft, Plus, Search, CheckCircle } from "lucide-react";
import { LoginModal, type UserData } from "./components/LoginModal";
import { AdminPanel } from "./components/AdminPanel";
import { sendSheetAction } from "./services/googleSheets";

// Hook untuk Debounce
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const MASCOT_IMG = "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Kids&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf,ffd5dc"; // Cute avatar fallback

export default function App() {
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [customQuizzes, setCustomQuizzes] = useState<Quiz[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  
  // Profile State
  const [userName, setUserName] = useState<string>("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Admin State
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const storedUser = localStorage.getItem("rh_userObj");
    
    if (storedUser) {
      try {
        const u = JSON.parse(storedUser);
        setUserName(u.nama);
        setPoints(u.score);
        setStreak(u.dayStreak || 1);
        setShowWelcome(false);
      } catch (e) {
        setShowWelcome(true);
      }
    } else {
      setShowWelcome(true);
    }
  }, []);

  const handleLogin = (userData: UserData) => {
    setUserName(userData.nama);
    setPoints(Number(userData.score) || 0);
    setStreak(Number(userData.dayStreak) || 1);
    localStorage.setItem("rh_userObj", JSON.stringify(userData));
    setShowWelcome(false);
  };

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("rh_userObj");
    setPoints(0);
    setQuestionsAnswered(0);
    setStreak(1);
    setShowWelcome(true);
  };

  const filteredChapters = CHAPTERS.filter(c => {
    const matchSubject = c.subjectId === selectedSubject && c.year === selectedYear;
    if (!matchSubject) return false;
    if (!debouncedSearch) return true;
    return c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
           (c.jawiName && c.jawiName.includes(debouncedSearch)) ||
           (c.topics && c.topics.toLowerCase().includes(debouncedSearch.toLowerCase()));
  });

  const allQuizzes = [...QUIZZES, ...customQuizzes];
  const filteredQuizzes = allQuizzes.filter(q => q.chapterId === selectedChapter);

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
  };

  const handleGenerateAIQuestions = async () => {
    if (!selectedChapter || !selectedSubject) return;
    
    setIsGenerating(true);
    try {
      const chapterObj = CHAPTERS.find(c => c.id === selectedChapter);
      const subjectObj = SUBJECTS.find(s => s.id === selectedSubject);
      
      const newQuestions = await generateChapterQuestions(
        subjectObj?.name || selectedSubject,
        selectedYear,
        chapterObj?.name || selectedChapter,
        chapterObj?.topics || "",
        10
      );

      const newQuiz: Quiz = {
        id: `ai-${Date.now()}`,
        chapterId: selectedChapter,
        title: `Latihan AI: ${chapterObj?.name || "Latihan Ekstra"}`,
        questions: newQuestions
      };

      setCustomQuizzes(prev => [...prev, newQuiz]);
      setActiveQuiz(newQuiz);
    } catch (error) {
      console.error("Failed to generate questions:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleQuizComplete = async (score: number, totalQuestions: number) => {
    const newPoints = points + (score * 50);
    const newQuestions = questionsAnswered + totalQuestions;
    
    setPoints(newPoints);
    setQuestionsAnswered(newQuestions);
    
    if (userName) {
      const ustr = localStorage.getItem("rh_userObj");
      if (ustr) {
        const u = JSON.parse(ustr);
        u.score = newPoints;
        localStorage.setItem("rh_userObj", JSON.stringify(u));
      }

      // Sync to Google Sheets
      try {
        await sendSheetAction('updateScore', {
          nama: userName,
          score: score * 50
        });
      } catch (err) {
        console.error("Failed to sync score to Google Sheets", err);
      }
    }
  };

  if (isAdminMode) {
    return <AdminPanel onClose={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F2F2F7] font-sans selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence>
        {showWelcome && (
          <LoginModal 
            onLogin={handleLogin} 
            isAdminMode={() => setIsAdminMode(true)} 
          />
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-40 w-full border-b border-white/50 bg-white/70 backdrop-blur-2xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setSelectedSubject(null); setActiveQuiz(null); }}>
            <div className="bg-primary p-2 rounded-2xl text-white shadow-sm">
              <BookOpen size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-primary">Revision Hub</h1>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {userName && (
              <Button size="sm" variant="outline" onClick={handleLogout} className="text-xs rounded-full h-8 hidden sm:inline-flex border-slate-200">
                Tukar Pengguna
              </Button>
            )}
            <Badge variant="outline" className="bg-white border-none shadow-sm text-amber-600 px-3 py-1 gap-1 flex items-center rounded-full">
              <Trophy size={14} className="fill-amber-400 text-amber-400" />
              <span className="font-bold">{points} XP</span>
            </Badge>
            <Badge variant="outline" className="bg-white border-none shadow-sm text-orange-600 px-3 py-1 gap-1 flex items-center rounded-full">
              <Sparkles size={14} className="fill-orange-400 text-orange-400" />
              <span className="font-bold">{streak} Hari</span>
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AnimatePresence mode="wait">
          {!selectedSubject ? (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-sm">
                <div className="space-y-4 text-center md:text-left flex-1">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Hai {userName || "Kawan"}, Anda Telah Menjawab <span className="text-primary">{questionsAnswered}</span> Soalan!
                  </h2>
                  <p className="text-slate-500 text-lg max-w-md">
                    Teruskan usaha anda! Jom ulangkaji subjek kegemaran anda hari ini.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3 max-w-sm mx-auto">
                  <img src={MASCOT_IMG} alt="Mascot" className="object-contain w-full h-auto drop-shadow-2xl" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center md:text-left">Pilih Tahun:</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5, 6].map(year => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      onClick={() => { setSelectedYear(year); setSelectedSubject(null); setSelectedChapter(null); setActiveQuiz(null); }}
                      className="rounded-full px-6 flex-1 sm:flex-none min-w-[80px]"
                    >
                      Tahun {year}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
                  <Sparkles className="text-primary" /> Subjek Utama
                </h3>
                <SubjectGrid 
                  subjects={SUBJECTS} 
                  onSelect={(id) => { setSelectedSubject(id); setSelectedChapter(null); }} 
                />
              </div>
            </motion.section>
          ) : activeQuiz ? (
            <motion.section
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => setActiveQuiz(null)} className="rounded-full">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Senarai Kuiz
                </Button>
              </div>
              <QuizSection 
                quiz={activeQuiz} 
                onComplete={(score) => {
                  const totalQs = activeQuiz.questions.reduce((acc, q) => acc + (q.type === 'matching' ? (q.pairs?.length || 5) : 1), 0);
                  handleQuizComplete(score, totalQs);
                }} 
                onAskAI={() => setIsAITutorOpen(true)}
                userName={userName}
              />
            </motion.section>
          ) : !selectedChapter ? (
            <motion.section
              key="chapters"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-16 z-40 bg-[#F2F2F7]/90 backdrop-blur-xl pb-4 pt-2 border-b border-slate-200/50">
                <div className="flex w-full items-center gap-4">
                  <Button variant="ghost" className="shrink-0 rounded-full" onClick={() => { setSelectedSubject(null); setSearchQuery(""); }}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Subjek
                  </Button>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
                    {SUBJECTS.find(s => s.id === selectedSubject)?.name} - Tahun {selectedYear}
                  </h2>
                </div>
                <div className="relative w-full sm:max-w-xs shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input 
                    placeholder="Cari bab atau topik..." 
                    className="pl-9 rounded-full bg-white border-slate-200 focus-visible:ring-primary/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4">
                {filteredChapters.length > 0 ? (
                  <>
                    {filteredChapters.map((chapter, idx) => (
                      <motion.div
                        key={chapter.id}
                        whileHover={{ x: 5 }}
                        className="p-6 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-sm flex items-center justify-between group cursor-pointer"
                        onClick={() => setSelectedChapter(chapter.id)}
                      >
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-primary font-bold">{chapter.jawiName}</span>
                            <Badge variant="secondary" className="text-[10px] h-4 px-2 py-0 rounded-full">
                              {selectedSubject === "arab" ? `الدرس ${idx + 1}` : `Bab ${idx + 1}`}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg">{chapter.name}</h4>
                          {chapter.topics && (
                            <p className="text-xs text-slate-400 mt-1 line-clamp-1 italic">Fokus: {chapter.topics}</p>
                          )}
                        </div>
                        <Button variant="outline" className="rounded-full hidden sm:flex">Lihat Bab</Button>
                      </motion.div>
                    ))}
                    <Button 
                      variant="outline" 
                      className="py-8 border-dashed border-2 rounded-[2rem] flex items-center justify-center gap-3 h-auto"
                      onClick={() => setSelectedChapter("new-chapter")}
                    >
                      <Plus className="h-5 w-5 text-primary" />
                      <span className="font-bold">Tambah Bab Baru dengan AI</span>
                    </Button>
                  </>
                ) : (
                  <div className="p-12 text-center bg-white/50 backdrop-blur rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center">
                    <BookOpen className="h-12 w-12 mb-4 text-slate-300" />
                    <p className="text-slate-500 mb-6">Tiada bab sedia ada untuk subjek ini lagi.</p>
                    <Button 
                      size="lg" 
                      onClick={() => setSelectedChapter("new-chapter")}
                      className="rounded-full gap-2"
                    >
                      <Sparkles className="h-5 w-5" />
                      Minta AI Bina Soalan Subjek Ini
                    </Button>
                  </div>
                )}
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="subject"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setSelectedChapter(null)} className="rounded-full">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Bab
                </Button>
                <div>
                  <h2 className="text-3xl font-bold">
                    {selectedChapter === "new-chapter" 
                      ? `Latihan Umum: ${SUBJECTS.find(s => s.id === selectedSubject)?.name}`
                      : CHAPTERS.find(c => c.id === selectedChapter)?.name}
                  </h2>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredQuizzes.length > 0 ? (
                  <>
                    {filteredQuizzes.map(quiz => (
                      <motion.div
                        key={quiz.id}
                        whileHover={{ x: 5 }}
                        className="p-6 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer"
                        onClick={() => startQuiz(quiz)}
                      >
                        <div>
                          <h4 className="font-bold text-lg">{quiz.title}</h4>
                          <p className="text-sm text-slate-500">{quiz.questions.length} Soalan Interaktif</p>
                        </div>
                        <Button variant="secondary" className="w-full sm:w-auto rounded-full">Mula Kuiz</Button>
                      </motion.div>
                    ))}
                    <Button 
                      variant="outline" 
                      className="py-12 border-dashed border-2 rounded-[2rem] flex flex-col gap-2 h-auto"
                      onClick={handleGenerateAIQuestions}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader2 className="h-6 w-6 animate-spin text-primary" />
                      ) : (
                        <Plus className="h-6 w-6 text-primary" />
                      )}
                      <span className="font-bold text-center">Jana Latihan AI (20 Objektif, 10 Padanan)</span>
                      <p className="text-xs text-slate-400 font-normal text-center">Kawan AI akan membina soalan khas untuk bab ini</p>
                    </Button>
                  </>
                ) : (
                  <div className="p-12 text-center bg-white/50 backdrop-blur rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center">
                    <BookOpen className="h-12 w-12 mb-4 text-slate-300" />
                    <p className="text-slate-500 mb-6 font-medium">
                      {selectedChapter === "new-chapter" 
                        ? "Sedia untuk menjana soalan-soalan baru mengikut silabus?" 
                        : "Tiada kuiz sedia ada untuk bab ini."}
                    </p>
                    <Button 
                      size="lg" 
                      className="rounded-full gap-2 w-full sm:w-auto" 
                      onClick={handleGenerateAIQuestions}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Sparkles className="h-5 w-5" />
                      )}
                      {isGenerating ? "Sedang Menjana..." : "Jana AI (20 Objektif, 10 Padanan)"}
                    </Button>
                  </div>
                )}
              </div>
            </motion.section>
          )
          }
        </AnimatePresence>
      </main>

      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 flex items-center justify-center p-0 z-50"
        onClick={() => setIsAITutorOpen(true)}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      <AITutorDialog 
        open={isAITutorOpen} 
        onOpenChange={setIsAITutorOpen} 
        mascotImage={MASCOT_IMG} 
      />

      <footer className="py-8 border-t mt-12 bg-white/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-bold opacity-80 flex flex-col sm:flex-row items-center justify-center gap-2">
            <Sparkles size={16} /> Dibina untuk Tariq dan Maryam oleh Mama <Sparkles size={16} />
          </p>
        </div>
      </footer>
    </div>
  );
}
