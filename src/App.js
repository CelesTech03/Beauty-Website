import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Homepage from './Views/Homepage.js';
import Account from './Views/Account.js';
import TrackOrder from './Views/TrackOrder.js';
import Cart from './Views/Cart.js';
import ProductDetails from './Views/ProductDetails.js';
import Checkout from './Views/Checkout.js';
import './App.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#331e36",
    },
    secondary: {
      main: "#ecfee8"
    }
  },
  typography: {
    fontFamily: '"Segoe UI"',
    h4: {
      color: '#41337a',
      fontWeight: '600'
    },
    subtitle2: {
      color: '#41337a'
    },
    subtitle1: {
      color: '#41337a',
      fontWeight: 'bold'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Homepage />} />
            <Route path='account' element={<Account />} />
            <Route path="/track-order/:id" element={<TrackOrder />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
