import { Category, Quiz, Question } from './types';

export const categories: Category[] = [
  { slug: 'aws', name: 'AWS' },
  { slug: 'react', name: 'React' },
  { slug: 'english', name: 'English' },
  { slug: 'nodejs', name: 'Node.js' },
];

// Move exam1 declaration before quizzes
export const exam1 = {
  questions: [
    {
      id: 1,
      text: "Which service runs containerized applications on AWS?",
      options: [
        "Amazon SageMaker",
        "Amazon EKS",
        "Amazon Redshift",
        "Amazon Aurora",
      ],
      correctAnswers: [1],
      explanation:
        "Amazon Elastic Kubernetes Service (EKS) is designed to run containerized applications on AWS. The other services are for machine learning (SageMaker), data warehousing (Redshift), and relational databases (Aurora).",
    },
    // ... (all other questions from the provided exam1 object)
  ],
};

export const quizzes: Quiz[] = [
  {
    slug: 'aws1',
    title: 'AWS Basics',
    categorySlug: 'aws',
    questions: [
      {
        text: 'What does EC2 stand for?',
        answers: [
          { text: 'Elastic Compute Cloud', isCorrect: true },
          { text: 'Electronic Computer Cloud', isCorrect: false },
          { text: 'Elastic Computer Configuration', isCorrect: false },
          { text: 'Electronic Compute Configuration', isCorrect: false },
        ],
        explanation: 'EC2 stands for Elastic Compute Cloud, which is a web service that provides resizable compute capacity in the cloud.',
      },
      // Add more questions here
    ],
  },
  {
    slug: 'aws2',
    title: 'AWS Comprehensive Exam',
    categorySlug: 'aws',
    questions: exam1.questions.map((q): Question => ({
      text: q.text,
      answers: q.options.map((option, index) => ({
        text: option,
        isCorrect: q.correctAnswers.includes(index),
      })),
      explanation: q.explanation,
    })),
  },
  // ... other quizzes remain unchanged
];