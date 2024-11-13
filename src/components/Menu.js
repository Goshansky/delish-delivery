import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import Cart from './Cart';

const Menu = ({ menuItems }) => {
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const increaseQuantity = (itemId) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    };

    const decreaseQuantity = (itemId) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === itemId ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) } : cartItem
        ));
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    };

    return (
        <div className="menu-container">
            <div className="menu">
                <h2>Меню ресторана {id}</h2>
                <div className="menu-list">
                    {menuItems.map(item => (
                        <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>
            <Cart
                cartItems={cartItems}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
            />
        </div>
    );
};

export default Menu;
