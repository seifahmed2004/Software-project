import React, { useState } from 'react';
import Header from '../components/home/Header.jsx';
import CategoryList from '../components/home/CategoryList.jsx';
import DishCard from '../components/home/DishCard.jsx';
import Cart from '../components/home/Cart.jsx';
import { popularDishes } from '../components/data/dishes.js';
import '../styles/layout.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems] = useState([
    { id: 1, name: 'Greek Salad', price: 5.4, quantity: 1, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=100&q=80' },
    { id: 2, name: 'Grilled Fish', price: 5.7, quantity: 1, image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=100&q=80' },
    { id: 3, name: 'Beef Steak', price: 4.8, quantity: 1, image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=100&q=80' },
    { id: 4, name: 'Ramen', price: 3.9, quantity: 1, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=100&q=80' }
  ]);

  return (
    <div className="container">
      <div className="main-content">
        <Header />
        <CategoryList 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        <div className="content-grid">
          <div className="dishes-container">
            <h2 className="text-2xl font-semibold mb-6">Popular dishes</h2>
            <div className="dishes-grid">
              {popularDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>

          <Cart items={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Home;