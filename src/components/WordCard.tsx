import React from "react";
import { Link } from "react-router-dom";
import { WordData } from "../types";
// MUI
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

interface CardProps {
  word: WordData;
}

export const WordCard: React.FC<CardProps> = ({ word }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h4">{word.word}</Typography>
        <Typography variant="h5">
          {word.phonetic ? word.phonetic : null}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/definitions/${word.id}`}>
          <Button>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
