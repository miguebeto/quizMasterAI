import { notFound } from "next/navigation";
import QuizComponent from "@/components/QuizComponent";
import { quizzes, categories } from "@/lib/data";

export async function generateStaticParams() {
  return quizzes.flatMap((quiz) =>
    categories.map((category) => ({
      slug: category.name,
      quizId: quiz.id.toString(),
    }))
  );
}

export default function QuizPage({
  params,
}: {
  params: { slug: string; quizId: string };
}) {
  const quiz = quizzes.find(
    (q) => q.id === parseInt(params.quizId) && q.slug === params.slug
  );

  if (!quiz) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:max-w-screen-md py-8">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <QuizComponent quiz={quiz} />
    </div>
  );
}
