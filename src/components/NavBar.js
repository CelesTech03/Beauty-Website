import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography variant='h6' component={Link} to='/'>
              Website Name
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton component={Link} to='account'>
              <AccountCircleIcon />
            </IconButton>
            <IconButton component={Link} to='cart'>
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default NavBar;