import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ICardProps {
  title: string;
  description: string;
}

export default function DefaultCardLayot({ title, description }: ICardProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
