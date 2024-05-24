import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ConfirmMail() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.100"
      px="6"
    >
      <VStack
        spacing="6"
        bg="white"
        p="8"
        borderRadius="md"
        boxShadow="lg"
        maxW="md"
        w="full"
      >
        <Heading as="h1" size="xl" textAlign="center">
          Thank You!
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your email has been verified successfully.
        </Text>
        <Button colorScheme="teal" as={Link} to="/signin">
          Go to Sign In
        </Button>
      </VStack>
    </Box>
  );
}

export default ConfirmMail;
