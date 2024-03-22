import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Zoom, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AdbIcon from '@material-ui/icons/Adb';

import { Link } from 'react-router-dom';
import useCharacterQuery from '../Hooks/querys.js';

const CharacterList = () => {
  const { loading, error, data } = useCharacterQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data || data.length === 0) return <p>No data available.</p>;

  return (
    <Grid container spacing={3}>
      {data.map((character, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card style={{ opacity: 0.7, transition: 'opacity 1s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
              <CardActionArea component={Link} to={`/character/${character.id}`}>
                <CardMedia
                  component="img"
                  alt={character.name}
                  height="280"
                  image={character.image}
                  title={character.name}
                />
                <CardContent style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
                  {character.species === 'Human' ? (
                    <Avatar style={{ backgroundColor: '#DCDC3C', marginRight: '8px' }}>
                      <PersonIcon />
                    </Avatar>
                  ) : (
                    <Avatar style={{ backgroundColor: '#18B518', marginRight: '8px' }}>
                      <AdbIcon />
                    </Avatar>
                  )}
                  <div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {character.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {character.species}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
