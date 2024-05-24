// src/App.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Mui/Loginpage';
import SignUp from './components/Mui/SignupPage';
import Login from './components/login';
import Homepage from './components/Homepage';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <main>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/loginold" element={<Login/>} />
              <Route path="/homepage" element={<Homepage/>} />



            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
