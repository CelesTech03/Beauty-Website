import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Homepage from './Views/Homepage.js';
import Account from './Views/Account.js';
import Cart from './Views/Cart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Homepage />} />
          <Route path='account' element={<Account />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
