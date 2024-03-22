import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { Card, CardMedia, CardContent, Typography, Button, Zoom, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './CharacterDetails.css'; 
const {  typeDefsById } = require('../typeDefs/typeDefs');

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    margin: 'auto',
    marginTop: theme.spacing(10), 
    opacity: 1,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1.6,
    },
  },
}));

const CharacterDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(typeDefsById, {
    variables: { id },
  });
  const classes = useStyles();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { character } = data;

  return (
    <Zoom in={true}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={character.name}
          height="300"
          width="200"
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<FavoriteIcon />}
            style={{ marginTop: '10px' }}
          >
            Add to Favorites
          </Button>
        </CardContent>
      </Card>
    </Zoom>
  );
};


export default CharacterDetails;
