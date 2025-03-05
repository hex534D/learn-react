import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => (
  <div className="header">
    <div className="logo">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg"
        height="20px"
        alt="Food app logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = () => (
  <div className="res-card" style={{ backGroundColor: '#f0f0f0' }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbGnKlHcN4VwmLUtANujTyMVO-I16xvmIvQ&s"
      alt="Restaurant Image"
    />
    <h3>Olive Garden</h3>
    <h4>Italian Kitchen</h4>
    <h4>4.1 stars</h4>
    <h4>20 minutes</h4>
  </div>
);

const BodyComponent = () => (
  <div className="main">
    <div className="search">Search Component</div>
    <div className="restaurant-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

const AppLayoutComponent = () => (
  <div className="container">
    <HeaderComponent />
    <BodyComponent/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
