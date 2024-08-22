import React, { useState } from 'react';
import { Box, Heading, VStack, Text, Button, HStack, Divider, Flex } from '@chakra-ui/react';
import ReactConfetti from 'react-confetti';
import Messages from './components/Messages';
import MemoryGame from './components/MemoryGame';
import RockPaperScissors from './components/RockPaperScissors';
import EmployeeMessages from './components/EmployeeMessages';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('home'); // 'home', 'games', 'messages'

  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1" bg="purple.100" p={5} textAlign="center" display="flex" alignItems="center" justifyContent="center">
        <Box>
          <ReactConfetti width={window.innerWidth} height={200} numberOfPieces={200} />
          <Heading as="h1" size="2xl" mb={6}>🎉 Happy Birthday, Boss! 🎉</Heading>
          {view === 'home' && (
            <VStack spacing={8}>
              <Text fontSize="xl">We hope you have a day full of joy and surprises!</Text>
              <Messages />
              <Divider my={4} borderColor="gray.400" />
              <HStack spacing={4} mt={4}>
                <Button colorScheme="blue" size="lg" onClick={() => setView('games')}>
                  Play Games
                </Button>
                <Button colorScheme="blue" size="lg" onClick={() => setView('messages')}>
                  See Messages of Team
                </Button>
              </HStack>
            </VStack>
          )}
          {view === 'games' && (
            <VStack spacing={8}>
              <Text fontSize="xl">Choose a Game to Play:</Text>
              <VStack spacing={4}>
                <Button colorScheme="teal" onClick={() => setView('memory')}>Memory Matching Game</Button>
                <Button colorScheme="teal" onClick={() => setView('rock-paper-scissors')}>Rock, Paper, Scissors</Button>
              </VStack>
              <Button colorScheme="gray" onClick={() => setView('home')}>Back to Home</Button>
            </VStack>
          )}
          {view === 'messages' && (
            <VStack spacing={8}>
              <Text fontSize="xl">Messages from Your Team:</Text>
              <EmployeeMessages />
              <Button colorScheme="gray" onClick={() => setView('home')}>Back to Home</Button>
            </VStack>
          )}
          {view === 'memory' && (
            <VStack spacing={8}>
              <MemoryGame />
              <Button colorScheme="gray" onClick={() => setView('games')}>Back to Games</Button>
            </VStack>
          )}
          {view === 'rock-paper-scissors' && (
            <VStack spacing={8}>
              <RockPaperScissors />
              <Button colorScheme="gray" onClick={() => setView('games')}>Back to Games</Button>
            </VStack>
          )}
        </Box>
      </Box>
      <Footer setView={setView} />
    </Flex>
  );
}

export default App;
