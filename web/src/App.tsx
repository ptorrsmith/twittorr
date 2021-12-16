import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import './App.css'
import Users from './components/Users'
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>

      {/* <div className="Test">
        <Users />
      </div> */}
    </ApolloProvider>
  );
}

export default App;
