import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecipeReviewCard({ id,name,status,species,gender,image,created }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        id = {id}       
        title={name}
        subheader={gender}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Status = {status}
          <br />
          Specie = {species}         
          <br />
          Created = {created}
          
        </Typography>
      </CardContent>      
    </Card>
  );
}