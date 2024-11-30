import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import '../../styles/header.css';

function Header() {
  return (
    <div className="header">
      <div className="flex items-center gap-4">
        <button className="menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Order something</h1>
      </div>
      
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>

      <div className="user-section">
        <div className="cart-icon-wrapper">
          <ShoppingBag className="w-6 h-6" />
          <span className="cart-badge">4</span>
        </div>
        <div className="user-info">
          <User className="w-6 h-6" />
          <span className="font-medium">Sarah James</span>
        </div>
      </div>
    </div>
  );
}

export default Header;