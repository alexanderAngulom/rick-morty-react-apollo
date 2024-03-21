import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useCharacterQuery from '../Hooks/querys.js';
import './CharacterList.css';

const CharacterList = () => {
  const { loading, error, data } = useCharacterQuery();
  console.log("desde", loading, data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data || data.length === 0) return <p>No data available.</p>;

  return (
    <Grid container spacing={3}>
      {data.map(character => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <Card>
            <CardActionArea component={Link} to={`/character/${character.id}`}>
              <CardMedia
                component="img"
                alt={character.name}
                height="140"
                image={character.image}
                title={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {character.species}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
