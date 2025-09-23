// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // ou 'dark' si tu veux un thème sombre
    primary: {
      main: '#3B82F6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FACC15',
      contrastText: '#111827',
    },
    background: {
      default: '#E5E7EB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none', // évite le all-caps par défaut
    },
  },
  shape: {
    borderRadius: 8, // Coins arrondis modernes
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
