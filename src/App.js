import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Homepage from './Views/Homepage.js';
import Account from './Views/Account.js';
import Cart from './Views/Cart.js';
import ProductDetails from './Views/ProductDetails.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Homepage />} />
          <Route path='account' element={<Account />} />
          <Route path='cart' element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
