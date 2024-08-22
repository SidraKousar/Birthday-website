import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';

const employeeMessages = [
  { name: "Gul Muhammad", message: "Happy Birthday, Alexander! Your leadership and vision inspire us daily. Wishing you a year filled with success and happiness. Enjoy your special day!" },
  { name: "Tanveer Abbas", message: "Happy Birthday! 🎉 Even in my short time here, your transparent, flexible, and supportive leadership has made a strong impression. Wishing you a great day and a successful year ahead. 💼" },
  { name: "Hassaan Ahmad", message: "Hey Alexander Wishing you a very Happy Birthday! 🎉On your special day, I want to express my gratitude for your leadership and guidance. Working under your direction has been an incredible experience, and I truly appreciate the wisdom and support you bring to our team.May this year bring you even more success, happiness, and great moments. Here's to another year of achieving amazing things!Enjoy your day to the fullest!" },
  { name: "Sufyan Arshad", message: "Happy birthday @ Alexander. Wishing you a very happy birthday. Stay blessed always ❤" },
  { name: "Fatima Shabbir", message: "Wishing you a very Happy Birthday 🎉 Even though I have only been here for a few days, I have already seen how supportive, kind, and generous you are. I feel fortunate to be part of your team and look forward to learning and growing under your leadership. ✨" },
  { name: "Aroosa Adil", message: "Hey @alexander. Happy birthday 🎉🧁! I've written your birthdate (22/08/2001) so many times while applying for you that it feels like it's my birthday today! haha jk 😅 But in all seriousness, I want to express my gratitude for the amazing leader and mentor you are and I'm looking forward to continuing to learn from you and achieving great things together. ✨🎉Wishing you an amazing day and a wonderful year ahead :p" },
  { name: "Sidra Naseem", message: "Happy Birthday! Wishing you a fantastic day and a year ahead filled with happiness and success. Thanks for being an awesome boss and making work so much fun! 🎉" },
];

function EmployeeMessages() {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
      {employeeMessages.map((entry, index) => (
        <Box
          key={index}
          bg="blue.100"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          height="200px" // Increased height
          overflow="hidden"
          _hover={{ boxShadow: "xl", transform: "scale(1.02)" }} // Hover effect
          transition="all 0.2s"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontWeight="bold" mb={2}>{entry.name}</Text>
          <Text
            overflowY="auto"
            maxHeight="120px"
            css={{
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888', 
                borderRadius: '8px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '8px',
              },
            }}
          >
            {entry.message}
          </Text>
        </Box>
      ))}
    </Grid>
  );
}

export default EmployeeMessages;
