import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setSuccess('Sign up successful. You can now sign in.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg">
      <Heading as="h1" mb="6" textAlign="center">Sign Up</Heading>
      <form onSubmit={handleSignUp}>
        <Stack spacing="4">
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success">
              <AlertIcon />
              {success}
            </Alert>
          )}
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" type="submit">Sign Up</Button>
          <Box textAlign="center">
            Already have an account? <Link to="/signin">Sign In</Link>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default SignUp;
