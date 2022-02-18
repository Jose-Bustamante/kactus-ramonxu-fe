import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Todos from './containers/Todos';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ramonxu web app
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Router>
            <Routes>
              <Route path="" element={<Todos />} />
            </Routes>
          </Router>
        </Box>
      </Container>

    </ThemeProvider>

  );
}

export default App;
