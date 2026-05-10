export interface Subject {
  id: string;
  name: string;
  jawiName: string;
  icon: string;
  color: string;
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface Question {
  type?: "objective" | "matching";
  question: string;
  options?: string[];
  correctAnswer?: number;
  pairs?: MatchingPair[];
  explanation: string;
}

export interface Chapter {
  id: string;
  subjectId: string;
  year: number;
  name: string;
  jawiName: string;
  topics?: string;
  pageNumber?: string;
}

export interface Quiz {
  id: string;
  chapterId: string;
  title: string;
  questions: Question[];
}

export interface UserProfile {
  uid: string;
  displayName: string;
  points: number;
  streak: number;
  lastActive: string;
}

export interface UserProgress {
  userId: string;
  quizId: string;
  score: number;
  completedAt: string;
}
