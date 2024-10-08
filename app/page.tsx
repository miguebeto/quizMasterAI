import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  { name: "AWS", slug: "aws" },
  { name: "React", slug: "react" },
  { name: "English", slug: "english" },
  { name: "Node.js", slug: "nodejs" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">QuizMasterAI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card
            key={category.slug}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>
                Practice {category.name} quizzes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Test your knowledge in {category.name} with our AI-generated
                questions.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/category/${category.slug}`} passHref>
                <Button>Show Quizzes</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
