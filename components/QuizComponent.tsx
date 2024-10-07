'use client';

import { useState } from 'react';
import { Quiz } from '@/lib/types';

export default function QuizComponent({ quiz }: { quiz: Quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    const answerIndex = newSelectedAnswers.indexOf(answer);
    if (answerIndex > -1) {
      newSelectedAnswers.splice(answerIndex, 1);
    } else {
      newSelectedAnswers.push(answer);
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    setShowExplanation(true);
    if (currentQuestionIndex === quiz.questions.length - 1) {
      setIsQuizCompleted(true);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswers([]);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      const correctAnswers = question.answers.filter(a => a.isCorrect).map(a => a.text);
      const userAnswers = selectedAnswers[index] || [];
      if (JSON.stringify(correctAnswers.sort()) === JSON.stringify(userAnswers.sort())) {
        score++;
      }
    });
    return (score / quiz.questions.length) * 100;
  };

  if (isQuizCompleted) {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="mb-4">Your score: {calculateScore().toFixed(2)}%</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Question {currentQuestionIndex + 1}</h2>
      <p className="mb-4">{currentQuestion.text}</p>
      <div className="mb-4">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedAnswers.includes(answer.text)}
                onChange={() => handleAnswerSelect(answer.text)}
                disabled={showExplanation}
              />
              <span className="ml-2">{answer.text}</span>
            </label>
          </div>
        ))}
      </div>
      {!showExplanation ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <div>
          <p className="mb-4">
            {currentQuestion.answers.filter(a => a.isCorrect).map(a => a.text).join(', ')}
          </p>
          <p className="mb-4">{currentQuestion.explanation}</p>
          {currentQuestionIndex < quiz.questions.length - 1 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNext}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
}