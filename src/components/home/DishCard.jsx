import React from 'react';
import '../../styles/dish-card.css';

function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-content">
        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-category">{dish.category}</p>
        <div className="dish-footer">
          <span className="dish-price">{dish.price.toFixed(1)}</span>
          <button className="add-to-cart-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;