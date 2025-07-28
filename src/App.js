import React, { useState } from 'react';
import ShoeList from './Component/ShoeList';
import Cart from './Component/Cart';
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const shoes = [
    {
      id: 1,
      name: 'Nike Classic Sneaker',
      price: 75,
      image: 'https://via.placeholder.com/100?text=Nike+Classic',
    },
    {
      id: 2,
      name: 'Nike Running Shoes',
      price: 80,
      image: 'https://via.placeholder.com/100?text=Nike+Running',
    },
  ];

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="container">
      <ShoeList shoes={shoes} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;


