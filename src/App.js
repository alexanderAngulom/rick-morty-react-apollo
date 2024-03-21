// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import CharacterList from './components/CharacterList.js';
import CharacterDetails from './components/CharacterDetails.js';

const client = new ApolloClient({
  uri: 'https://sunvalley-backend-default--production-alexanderangulom.sierranegra.cloud/graphql/rick-and-morty',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router> {}
        <Routes>
          <Route exact path="/" element={<CharacterList />} /> {}
          <Route path="/character/:id" element={<CharacterDetails />} /> {}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
