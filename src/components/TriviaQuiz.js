import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function TriviaQuiz() {
  const questions = [
    {
      question: "What is your boss's favorite color?",
      options: ["Blue", "Green", "Red", "Yellow"],
      answer: "Blue",
    },
    {
      question: "How many years has your boss been with the company?",
      options: ["1", "3", "5", "10"],
      answer: "5",
    },
    {
      question: "What is your boss's favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Salad"],
      answer: "Sushi",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Box textAlign="center">
      {showScore ? (
        <Text fontSize="xl">
          You scored {score} out of {questions.length}!
        </Text>
      ) : (
        <>
          <Text fontSize="lg" mb={4}>
            {questions[currentQuestion].question}
          </Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerOptionClick(option)}
              m={2}
              colorScheme="teal"
            >
              {option}
            </Button>
          ))}
        </>
      )}
    </Box>
  );
}

export default TriviaQuiz;
