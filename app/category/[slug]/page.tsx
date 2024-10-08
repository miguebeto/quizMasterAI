import { notFound } from "next/navigation";
import { categories, quizzes } from "@/lib/data";
import QuizList from "@/components/QuizList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.name,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.name === params.slug);
  const categoryQuizzes = quizzes.filter((quiz) => quiz.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category.name.toLocaleUpperCase()} Quizzes
      </h1>
      <QuizList categoryQuizzes={categoryQuizzes} params={params} />
      <Button className="mt-4 justify-self-start" asChild>
        <Link href="/">Back</Link>
      </Button>
    </div>
  );
}
