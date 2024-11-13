import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Dd.png'

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <img src={logo} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <Link to={`/menu/${restaurant.id}`}>Перейти в меню</Link>
        </div>
    );
};

export default RestaurantCard;