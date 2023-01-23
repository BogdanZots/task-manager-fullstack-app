import * as React from "react";
import { CardActions, CardContent, Button, Typography, Card, Box } from "@mui/material";
import s from "styled-components";

interface ICardProps {
  title: string;
  description: string;
}

const StyledCardBox = s(Box)`
min-Width : 275px;
`;

const StyledCardTypography = s(Typography)`
margin-bottom : 2px;
font-size : 14px;
`;

export default function DefaultCardLayot({ title, description }: ICardProps) {
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
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      </Card>
    </StyledCardBox>
  );
}
