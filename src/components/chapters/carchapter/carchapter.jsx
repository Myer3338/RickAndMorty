import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function RecipeReviewCard({ id,name,air_date,episode,characters,created,image })
 {
  return (
    <Card className='chapter-card'>      
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
        <div className='info-item'>
          <p>
            Air_date:
          </p>
          <p>{air_date}</p>
        </div>
        <div className='info-item'>
          <p>
            Created:
          </p>
          <p>{created}</p>
        </div>
      </CardContent>      
    </Card>
  );
}