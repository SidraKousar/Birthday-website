import React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const messages = [
  "Wishing you a fantastic day filled with joy!",
  "Happy Birthday Alexander!",
  "May all your birthday wishes come true!",
];

const colors = ["#FFD700", "#FF69B4", "#87CEEB"]; // Gold, Pink, Sky Blue

function Messages() {
  return (
    <VStack spacing={6} align="stretch">
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <Box
            bg={colors[index % colors.length]}
            p={4}
            borderRadius="md"
            boxShadow="lg"
            color="white"
            fontWeight="bold"
            textAlign="center"
            transform="rotate(-2deg)"
          >
            <Text fontSize="xl">{msg}</Text>
          </Box>
        </motion.div>
      ))}
    </VStack>
  );
}

export default Messages;
