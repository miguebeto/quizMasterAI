export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  answers: Answer[];
  explanation: string;
}

export interface Quiz {
  slug: string;
  title: string;
  categorySlug: string;
  questions: Question[];
}

export interface Category {
  slug: string;
  name: string;
}