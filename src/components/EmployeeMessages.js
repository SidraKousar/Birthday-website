import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

const employeeMessages = [
  { name: "Alice", message: "Happy Birthday! Hope you have an amazing day!" },
  { name: "Bob", message: "Wishing you a year full of success and happiness!" },
  { name: "Charlie", message: "Happy Birthday! Thanks for being an awesome boss!" },
  { name: "David", message: "May your day be filled with joy and laughter. Happy Birthday!" },
  { name: "Eve", message: "Cheers to another year of greatness. Happy Birthday!" },
  { name: "Frank", message: "Happy Birthday! Grateful for your guidance and support." },
  { name: "Grace", message: "Wishing you a fantastic birthday and a wonderful year ahead!" },
  { name: "Heidi", message: "Happy Birthday! You inspire us every day. Enjoy your special day!" },
];

function EmployeeMessages() {
  return (
    <VStack spacing={4} align="stretch">
      {employeeMessages.map((entry, index) => (
        <Box key={index} bg="blue.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontWeight="bold">{entry.name}</Text>
          <Text>{entry.message}</Text>
        </Box>
      ))}
    </VStack>
  );
}

export default EmployeeMessages;
