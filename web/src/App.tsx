import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import React from 'react'
import './App.css'
import Users from './components/Users'
import Landing from './components/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({uri: 'http://localhost:4000/graphql'})

const authLink = setContext(async(_req, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }
})

const link = authLink.concat(httpLink as any) // should be typed

const client = new ApolloClient({
  link: (link as any), // should be typed
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
