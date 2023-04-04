import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function RecipeReviewCard({ id,name,status,species,gender,image,created,origin,location }) {
  return (
    <Card className='character-card'>      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardHeader
        id = {id}       
        title={name}
        subheader={gender}
      />
      <CardContent>
          <div className='info-item'>
            <p>Status:</p>
            <p>{status}</p>
          </div>
          <div className='info-item'>
            <p>Specie:</p>
            <p>{species}</p>
          </div>
          <div className='info-item'>
            <p>Created:</p>
            <p>{created}</p>
          </div>
          <div className='info-item'>
            <p>Origin:</p>
            <p>{origin}</p>
          </div>
          <div className='info-item'>
            <p>Location:</p>
            <p>{location}</p>
          </div>
      </CardContent>      
    </Card>
  );
}