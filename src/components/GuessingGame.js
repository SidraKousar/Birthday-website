import React, { useState } from 'react';
import { VStack, Text, Input, Button } from '@chakra-ui/react';

function GuessingGame() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (guess.toLowerCase() === 'happy birthday') {
      setMessage('🎉 You guessed it right! Happy Birthday! 🎉');
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <VStack spacing={4}>
      <Text>Guess the Secret Phrase:</Text>
      <Input
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <Button onClick={handleGuess}>Submit</Button>
      {message && <Text>{message}</Text>}
    </VStack>
  );
}

export default GuessingGame;
