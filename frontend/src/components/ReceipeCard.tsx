import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React from 'react';

export interface IReceipe {
  id: number;
  title: string;
  content: string;
  date: Date;
  author: number;
}

interface IReceipeCardProps {
  receipe: IReceipe;
  onDelete(id: number): void;
}

const ReceipeCard = ({ receipe, onDelete }: IReceipeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {receipe.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {receipe.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="error"
          variant="outlined"
          onClick={() => {
            onDelete(receipe.id);
          }}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReceipeCard;
