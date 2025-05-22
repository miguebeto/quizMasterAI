"use client";

import { useState } from "react";
import { Quiz } from "@/lib/types";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useRouter, useParams } from "next/navigation";

export default function QuizComponent({ quiz }: { quiz: Quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const currentQuestion = quiz.exam[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (currentQuestion.correctAnswers.length === 1) {
      setSelectedAnswers([index]);
    } else {
      setSelectedAnswers((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleSubmit = () => {
    const isCorrect =
      currentQuestion.correctAnswers.every((answer) =>
        selectedAnswers.includes(answer)
      ) && selectedAnswers.length === currentQuestion.correctAnswers.length;

    if (isCorrect) {
      setTotalCorrect((prev) => prev + 1);
    }
    setShowResult(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.exam.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
  };

  const { replace } = useRouter();
  const firstParam = useParams()?.slug;

  const handleRedirect = () => {
    replace(`/category/${firstParam}`);
  };

  const calculateScore = () => {
    return Math.round((totalCorrect / quiz.exam.length) * 100);
  };

  if (isQuizCompleted) {
    return (
      <AlertDialog>
        <AlertDialog open={isQuizCompleted} onOpenChange={setIsQuizCompleted}>
          <AlertDialogContent>
            <AlertDialogTitle>Quiz Completed!</AlertDialogTitle>
            <AlertDialogDescription>
              Your score: {calculateScore()}%
            </AlertDialogDescription>
            <Button onClick={handleRedirect} color="gray">
              Back to Category
            </Button>
            <AlertDialogAction onClick={() => window.location.reload()}>
              Restart Quiz
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </AlertDialog>
    );
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestionIndex + 1}/{quiz.exam.length}
      </h2>
      <span className="absolute right-4 top-4 text-sm text-gray-500 dark:text-gray-400 dark:text-white">
        {calculateScore()}%
      </span>
      <p className="mb-4">{currentQuestion?.text}</p>
      <div className="mb-4">
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label
              className={`flex items-center p-2 rounded ${
                showResult
                  ? currentQuestion.correctAnswers.includes(index)
                    ? "bg-green-100"
                    : selectedAnswers.includes(index)
                    ? "bg-red-100"
                    : ""
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <input
                type={
                  currentQuestion.correctAnswers.length === 1
                    ? "radio"
                    : "checkbox"
                }
                name="answer"
                value={index}
                checked={selectedAnswers.includes(index)}
                onChange={() => handleAnswerSelect(index)}
                disabled={showResult}
                className="mr-2"
              />
              <span
                className={`${
                  showResult && selectedAnswers.includes(index)
                    ? currentQuestion.correctAnswers.includes(index)
                      ? "text-green-700"
                      : "text-red-700"
                    : ""
                }`}
              >
                {option}
              </span>
            </label>
          </div>
        ))}
      </div>
      {!showResult ? (
        <Button onClick={handleSubmit} disabled={selectedAnswers.length === 0}>
          Submit
        </Button>
      ) : (
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            onClick={handleNext}
          >
            Next Question
          </button>
          {!currentQuestion.correctAnswers.every((answer) =>
            selectedAnswers.includes(answer)
          ) && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
          <div className="mt-4">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
            >
              {showExplanation ? (
                <>
                  <ChevronUpIcon className="w-4 h-4 mr-1" />
                  Hide Explanation
                </>
              ) : (
                <>
                  <ChevronDownIcon className="w-4 h-4 mr-1" />
                  Show Explanation
                </>
              )}
            </button>
            {showExplanation && (
              <p className="mt-2 p-2 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-200">
                {currentQuestion.explanation}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
