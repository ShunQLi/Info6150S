import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import JobMap from '../JobMap';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

function Jobs() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="h5" component="div">
          These{bull}are{bull}jobs
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          home
        </Typography>
        <Typography variant="body2">
          This is home.
        
         <JobMap />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

  )
}

export default Jobs
