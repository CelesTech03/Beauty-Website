import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Layout() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6'>
            Website Name
          </Typography>
          <p>Search</p>
          <p>Account</p>
          <p>Cart</p>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Layout;