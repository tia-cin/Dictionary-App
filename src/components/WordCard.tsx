import React from "react";
import { Link } from "react-router-dom";
import { WordData } from "../types";
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
    <Card sx={{ minWidth: 300, margin: ".5em" }}>
      <CardContent>
        <p className="font-bold text-3xl">
          {word.word}
          <span className="text-base font-medium italic ml-2">
            {word.phonetic ? word.phonetic : null}
          </span>
        </p>
        <p className="w-300 mt-3">
          {word.meanings[0].definitions[0].definition}
        </p>
      </CardContent>
      <CardActions>
        <Link to={`/definitions/${word.id}`}>
          <Button>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
