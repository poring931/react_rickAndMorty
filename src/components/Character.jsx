import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Character = (props) => {
   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="300"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>

        <Typography gutterBottom  component="div" >
          <Typography gutterBottom variant="h6" component="span" >
          <span className="status__icon"></span> {`${props.status} - `} 
          </Typography>
          <Typography gutterBottom variant="h7" component="span" >
            <em> {props.species} </em> 
            {
            props.type ? ` (${props.type})` : ''
            } - {props.gender}
          </Typography>
        </Typography>

        <Typography variant="body2" component="div" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Character;
