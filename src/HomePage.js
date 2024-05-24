import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

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
      <Box bg="white" p="8" borderRadius="md" boxShadow="lg" maxW="md" w="full">
        {user ? (
          <>
            <Heading as="h1" size="xl" textAlign="center" mb="4">
              Welcome, {user.email}!
            </Heading>
            <Text fontSize="lg" textAlign="center" mb="8">
              You are logged in.
            </Text>
            <Button colorScheme="teal" onClick={handleLogout} mb="4" w="full">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Heading as="h1" size="xl" textAlign="center" mb="4">
              Welcome!
            </Heading>
            <Text fontSize="lg" textAlign="center" mb="8">
              Please <Link to="/signin">Sign In</Link> or <Link to="/signup">Sign Up</Link>.
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Home;
