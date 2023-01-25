import * as React from "react";
import { CardActions, CardContent, Button, Typography, Card, Box } from "@mui/material";
import s from "styled-components";

interface ICardProps {
  title: string;
  description: string;
  id: string;
  onRemove: (id: string) => void;
}

const StyledCardBox = s(Box)`
min-Width : 275px;
&:hover .deleteButton {
  opacity:1;
  background-color:red;
  color:white;
}
`;

const StyledCardTypography = s(Typography)`
margin-bottom : 2px;
font-size : 14px;
`;

const StyledDeleteButton = s(Button)`
padding:10px;
opacity:0;
transition: 0.6s;
`;

export default function DefaultCardLayot({ title, description, id, onRemove }: ICardProps) {
  const handleCardRemove = (id: string) => {
    onRemove(id);
  };
  return (
    <StyledCardBox>
      <Card variant="outlined">
        <>
          <CardContent>
            <StyledCardTypography color="text.secondary" gutterBottom>
              Word of the Day
            </StyledCardTypography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <StyledCardTypography color="text.secondary">adjective</StyledCardTypography>
            <StyledCardTypography variant="body2">{description}</StyledCardTypography>
          </CardContent>
          <StyledDeleteButton onClick={() => handleCardRemove(id)} className="deleteButton">
            Delete
          </StyledDeleteButton>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      </Card>
    </StyledCardBox>
  );
}
