import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Text } from '@chakra-ui/react';
import { FaApple, FaCar, FaCoffee, FaHeart, FaStar, FaTree } from 'react-icons/fa';

const cardIcons = [
  { icon: FaApple, matched: false },
  { icon: FaCar, matched: false },
  { icon: FaCoffee, matched: false },
  { icon: FaHeart, matched: false },
  { icon: FaStar, matched: false },
  { icon: FaTree, matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.icon === choiceTwo.icon) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.icon === choiceOne.icon) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" mb={4}>Memory Matching Game</Text>
      <Button onClick={shuffleCards} mb={4} colorScheme="teal">New Game / Shuffle Cards</Button>
      <Text mb={4}>Turns: {turns}</Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {cards.map((card) => (
          <Box
            key={card.id}
            onClick={() => !disabled && !card.matched && handleChoice(card)}
            bg={card === choiceOne || card === choiceTwo || card.matched ? "white" : "gray.200"}
            borderRadius="md"
            boxShadow="md"
            p={6}
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="2xl"
          >
            {card === choiceOne || card === choiceTwo || card.matched ? (
              <card.icon />
            ) : null}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default MemoryGame;
