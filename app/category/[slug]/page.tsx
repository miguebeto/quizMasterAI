import { notFound } from 'next/navigation';
import QuizList from '@/components/QuizList';
import { categories } from '@/lib/data';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category.name} Quizzes</h1>
      <QuizList categorySlug={params.slug} />
    </div>
  );
}