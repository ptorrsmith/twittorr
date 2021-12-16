import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="Test">
    </ApolloProvider>
  );
}

export default App;
