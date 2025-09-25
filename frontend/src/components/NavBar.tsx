import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const pages = ['test', 'test1'];
const settings = ['profile', 'dashboard', 'logout'];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const capitalizeFirstLetter = (word: string): string => {
    const firstLetter = word.charAt(0).toUpperCase();

    return firstLetter + word.slice(1);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => {
              navigate('/');
            }}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RECEIPE MANAGER
          </Button>
          {/* xs nav menu  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              R
            </IconButton>
            <Menu
              id="menu-pages"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => {
                      navigate(`/${page}`);
                    }}
                    sx={{ textAlign: 'center' }}
                  >
                    {capitalizeFirstLetter(page)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => {
              navigate('/');
            }}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RECEIPE MANAGER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  navigate(`/${page}`);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {capitalizeFirstLetter(page)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                U
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    onClick={() => {
                      navigate(`/${setting}`);
                    }}
                    sx={{ textAlign: 'center' }}
                  >
                    {capitalizeFirstLetter(setting)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
