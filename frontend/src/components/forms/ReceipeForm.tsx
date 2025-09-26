import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MuiCard from '@mui/material/Card';
import api from '../../api';
import type { IReceipe } from '../ReceipeCard';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

interface IReceipeForm {
  addReceipe(receipe: IReceipe): void;
  handleModalStatus(): void;
}

const ReceipeForm = ({ addReceipe, handleModalStatus }: IReceipeForm) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const createReceipe = () => {
    api
      .post('api/receipes/', { title, content })
      .then((res) => {
        if (res.status === 201) {
          addReceipe(res.data);
          handleModalStatus();
        } else {
          alert('Failed to create receipe');
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createReceipe();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Card>
        <Typography
          component="h1"
          variant="h4"
          color="primary"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Create a receipe
        </Typography>

        <TextField
          id="title"
          label="title"
          variant="filled"
          type="text"
          value={title}
          color="primary"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="content"
          label="content"
          type="text"
          variant="filled"
          multiline
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
          color="primary"
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Card>
    </Box>
  );
};

export default ReceipeForm;
