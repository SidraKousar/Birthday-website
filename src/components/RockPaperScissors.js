import React, { useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const choices = [
  { name: 'rock', icon: FaHandRock },
  { name: 'paper', icon: FaHandPaper },
  { name: 'scissors', icon: FaHandScissors },
];

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getResult = (user, computer) => {
    if (user === computer) {
      return "It's a tie!";
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  };

  const handleClick = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)].name;
    setUserChoice(choice.name);
    setComputerChoice(computerRandomChoice);
    setResult(getResult(choice.name, computerRandomChoice));
  };

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" mb={4}>Rock, Paper, Scissors</Text>
      <VStack spacing={4}>
        {choices.map((choice) => (
          <Button
            key={choice.name}
            leftIcon={<choice.icon />}
            colorScheme="teal"
            onClick={() => handleClick(choice)}
            size="lg"
          >
            {choice.name.charAt(0).toUpperCase() + choice.name.slice(1)}
          </Button>
        ))}
      </VStack>
      {userChoice && (
        <Box mt={8}>
          <Text fontSize="xl">You chose: {userChoice}</Text>
          <Text fontSize="xl">Computer chose: {computerChoice}</Text>
          <Text fontSize="2xl" fontWeight="bold" mt={4}>{result}</Text>
        </Box>
      )}
    </Box>
  );
}

export default RockPaperScissors;
