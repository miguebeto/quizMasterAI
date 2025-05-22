import { Quiz } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function QuizList({
  categoryQuizzes,
  params,
}: {
  categoryQuizzes: Quiz[];
  params: { slug: string };
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoryQuizzes.map((quiz) => (
        <Card
          key={quiz.id}
          className="block p-6 bg-white dark:border-slate-700 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>{quiz.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{quiz.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/category/${params.slug}/quiz/${quiz.id}`}>
                Start Quiz
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
