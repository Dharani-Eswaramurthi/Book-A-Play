import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error;

      // console.log('User signed in:', user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg">
      <Heading as="h1" mb="6" textAlign="center">Sign In</Heading>
      <form onSubmit={handleSignIn}>
        <Stack spacing="4">
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" type="submit"><Link to="/home">Sign In</Link></Button>
          <Box textAlign="center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default SignIn;
