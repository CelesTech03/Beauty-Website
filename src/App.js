import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.js';
import Catalog from './components/Catalog.js';
import Account from './components/Account.js';
import Cart from './components/Cart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path='account' element={<Account />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
