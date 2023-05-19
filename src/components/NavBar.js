import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='h6'
              component={Link} to='/'
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Beautify
            </Typography>
            <Box>
              <IconButton sx={{color: 'inherit'}}>
                <SearchIcon />
              </IconButton>
              <IconButton component={Link} to='account' sx={{color: 'inherit'}}>
                <AccountCircleIcon />
              </IconButton>
              <IconButton component={Link} to='cart' sx={{color: 'inherit'}}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default NavBar;