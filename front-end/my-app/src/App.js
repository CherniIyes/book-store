// App.js
import React, { useState } from 'react';
import './App.css';
import Products from './components/products.js';
import OneProduct from './components/oneProduct.js';
import Cart from './components/cart.js';
import Search from './components/search.js';
import axios from 'axios';
import Logo from './pics/logo.png';
import Add from './components/add.js';

const App = () => {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Products');
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
  };

  const handleSearch = (searchTerm) => {
    fetchData(searchTerm);
  };

  const fetchData = (searchTerm = '') => {
    axios
      .get(`http://localhost:9999/search/${searchTerm}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const DELETE = (id) => {
    axios
      .delete(`http://localhost:9999/DELETE/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const pay = () => {
    // Define your payment logic here
    console.log('Payment logic goes here');
  };





  return (
    <div>
      <div className="nav">
        <span className="logo" onClick={() => switchView('Products')}>
          <img className='logoo' src={Logo} alt="Logo" />
        </span>
        {view === 'Products' && <Search onSearch={handleSearch} />}
        {view === 'Cart' && <Search onSearch={handleSearch} />}
        {view === 'OneProduct' && <Search onSearch={handleSearch} />}
        {view === 'Add' && <Search onSearch={handleSearch} />}

        <span className="items" onClick={() => switchView('Cart')}>
          🛒 Your Cart
        </span>
        <span className="items" onClick={() => switchView('Add')}>
          🔻 Add A Book
        </span>
      </div>

      {view === 'Products' && <Products setView={setProduct} switchView={switchView} />}
      {view === 'Add' && <Add />}
      {view === 'OneProduct' && <OneProduct product={product} DELETE={DELETE} addToCart={addToCart} />}
      {view === 'Cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} pay={pay} clearCart={clearCart} />}
    </div>
  );
};

export default App;
