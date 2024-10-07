import Link from 'next/link';
import { quizzes } from '@/lib/data';

export default function QuizList({ categorySlug }: { categorySlug: string }) {
  const categoryQuizzes = quizzes[categorySlug as keyof typeof quizzes] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoryQuizzes.map((quiz) => (
        <Link
          key={quiz.id}
          href={`/quiz/${quiz.id}`}
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">Start Quiz</p>
        </Link>
      ))}
    </div>
  );
}