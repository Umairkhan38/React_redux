import React from 'react'
import CartItems from './Components/CartItems.js';
import Navbar from './Components/Navbar.js';
import Shop from './Components/Shop.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className='container my-2'>
      <Shop />
      <CartItems />
      </div>
      
    </div>
  );
}

export default App;
