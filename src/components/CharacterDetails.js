// src/components/CharacterDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import './CharacterDetails.css'; 
const {  typeDefsById } = require('../typeDefs/typeDefs');



const CharacterDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(typeDefsById, {
    variables: { id },
  });

  console.log(loading);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { character } = data;

  return (
    <Card>
      <CardMedia
        component="img"
        alt={character.name}
        height="400"
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {character.species}
        </Typography>
        <Button variant="contained" color="primary">
          Add to Favorites
        </Button>
      </CardContent>
    </Card>
  );
};


export default CharacterDetails;
