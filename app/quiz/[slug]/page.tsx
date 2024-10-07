import { notFound } from 'next/navigation';
import QuizComponent from '@/components/QuizComponent';
import { quizzes } from '@/lib/data';

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

export default function QuizPage({ params }: { params: { slug: string } }) {
  const quiz = quizzes.find((q) => q.slug === params.slug);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <QuizComponent quiz={quiz} />
    </div>
  );
}