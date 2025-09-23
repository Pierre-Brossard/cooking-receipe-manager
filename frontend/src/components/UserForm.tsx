import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Button,
  Divider,
  Link,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import MuiCard from '@mui/material/Card';

interface IuserForm {
  method: string;
  route: string;
}

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

const UserForm = ({ method, route }: IuserForm) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const name = method === 'login' ? 'Login' : 'Register';

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });

      if (method === 'login') {
        login(res.data.access, res.data.refresh);
        navigate('/');
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
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
          {name}
        </Typography>

        <TextField
          id="username"
          label="username"
          variant="filled"
          type="text"
          value={username}
          color="primary"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="password"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          color="primary"
        />
        <Button variant="contained" type="submit">
          {name}
        </Button>

        <Divider></Divider>

        {name === 'Login' ? (
          <Typography sx={{ textAlign: 'center' }}>
            Don&apos;t have an account?{' '}
            <Link href="/register" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign up
            </Link>
          </Typography>
        ) : (
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link href="/login" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign in
            </Link>
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default UserForm;
