import React from 'react';
import logo from '../img/Dd.png'

const MenuCard = ({ item, onAddToCart }) => {
    return (
        <div className="menu-card">
            <img src={logo} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price} руб.</p>
            <button onClick={() => onAddToCart(item)}>Добавить в корзину</button>
        </div>
    );
};

export default MenuCard;