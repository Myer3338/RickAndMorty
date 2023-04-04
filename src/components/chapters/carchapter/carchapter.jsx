import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function RecipeReviewCard({ id,name,air_date,episode,characters,created,image })
 {
  return (
    <Card sx={{ maxWidth: 345 }}>      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardHeader
        id = {id}       
        title={name}
        subheader={episode}
      />      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Air_date = {air_date}
            <br />
            Created = {created}
            <br />
        </Typography>
      </CardContent>      
    </Card>
  );
}