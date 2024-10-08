export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  quizzes: Quiz[];
}

export interface Quiz {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  categoryId: string;
  category: string;
  exam: Question[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
}
