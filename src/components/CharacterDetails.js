import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { useQuery } from 'react-apollo';
import { Card, CardMedia, CardContent, Typography, Button, Zoom, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './CharacterDetails.css';
const { typeDefsById } = require('../typeDefs/typeDefs');

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    margin: 'auto',
    marginTop: theme.spacing(10),
    opacity: 0.7,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  progress: {
    '--progress': '80%',
    width: 500,
    height: 50,
    margin: '9em auto',
    border: '1px solid #fff',
    padding: '12px 10px',
    boxShadow: '0 0 10px #aaa',
  },
  bar: {
    width: 'var(--progress)',
    height: '100%',
    background: 'linear-gradient(#18B518, #DCDC3C, #18B518)',
    backgroundRepeat: 'repeat',
    boxShadow: '0 0 10px 0px orange',
    animation: 'shine 4s ease-in infinite, end 1s ease-out 1 7s',
    transition: 'width 3s ease 3s',
  },
  backButton: { 
    color: '#000000',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(typeDefsById, {
    variables: { id },
  });
  const classes = useStyles();

  if (loading) return (
    <div className={classes.progress}>
      <div className={classes.bar}></div>
      <div>LOADING...</div>
    </div>
  ); 
  if (error) return <p>Error</p>;

  const { character } = data;

  return (
    <Zoom in={true}>
      <div>
        <Link to="/" className={classes.backButton}>Back</Link> {}
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
      </div>
    </Zoom>
  );
};


export default CharacterDetails;
