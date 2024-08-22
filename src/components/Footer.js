import React from 'react';
import { Box, Text, HStack, VStack, Link } from '@chakra-ui/react';

function Footer({ setView }) {
  return (
    <Box as="footer" bg="purple.200" py={4} mt={8} textAlign="center">
      <VStack spacing={2}>
        <Text fontSize="lg" fontWeight="bold">Thank you for being an amazing boss!</Text>
        <Text fontSize="sm">We appreciate your leadership and wish you a fantastic year ahead.</Text>
        <HStack spacing={4}>
          <Link onClick={() => setView('home')} color="blue.500" fontWeight="bold">
            Home
          </Link>
          <Link onClick={() => setView('games')} color="blue.500" fontWeight="bold">
            Play Games
          </Link>
          <Link onClick={() => setView('messages')} color="blue.500" fontWeight="bold">
            Team Messages
          </Link>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Created with ❤️ by your team | {new Date().getFullYear()}
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
