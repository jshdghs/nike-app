import React from 'react';

const ShoeList = ({ shoes, addToCart }) => {
  return (
    <div className="shoe-list">
      <h2>Available Shoes</h2>
      <div className="shoe-grid">
        {shoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeList;
