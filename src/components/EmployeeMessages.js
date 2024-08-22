import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

const employeeMessages = [
  { name: "Gul Muhammad", message: "Happy Birthday, Alexander! Your leadership and vision inspire us daily. Wishing you a year filled with success and happiness. Enjoy your special day!" },
  { name: "Tanveer Abbas", message: "Happy Birthday!🎉Even in my short time here, your transparent, flexible and supportive leadership has made a strong impression🌟Wishing you a great day and a successful year ahead🥳🍰I look forward to contributing to the team under your guidance" },
  { name: "Hassaan Ahmad", message: "Happy Birthday! Thanks for being an awesome boss!" },
  { name: "Sufyan Arshad", message: "May your day be filled with joy and laughter. Happy Birthday!" },
  { name: "Fatima Shabbir", message: "Wishing you a very Happy Birthday ✨Even though I have only been here from few days, I have already seen how supportive, kind, and generous you are. I feel fortunate to be part of your team and look forward to learning and growing under your leadership✨. I wish this year brings you as much joy and success as you bring to those around you.Have a wonderful day!✨🎈" },
  { name: "Aroosa Adil", message: "Happy Birthday! Grateful for your guidance and support." },
  { name: "Sidra Naseem", message: "Happy Birthday! Wishing you a fantastic day and a year ahead filled with happiness and success. Thanks for being an awesome boss and making work so much fun!✨🎈" },
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
