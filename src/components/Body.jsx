import { useState } from 'react';

import restaurantData from '../utils/mockData';
import RestaurantCard from './restaurant/RestaurantCard';

const Body = () => {
  const [restData, setRestData] = useState(restaurantData);
  return (
    <div className="main">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const data = restaurantData.filter((res) => res?.avgRating > 4.0);
            setRestData(data);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {restData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
