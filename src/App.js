import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ConfirmMail from './ConfirmMail';
import Home from './HomePage';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/ConfirmMail" element={<ConfirmMail/>} />
          <Route path="/home" element={<Home/>} />

          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
