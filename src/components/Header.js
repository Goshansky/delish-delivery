import React from 'react';
import logo from '../img/Dd.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="Иконка сайта" className="header-icon" />
                    <span className="header-text">Delish Delivery</span>
                </Link>
                <input type="text" placeholder="Поиск ресторана" className="header-search" />
                <button className="header-button">Укажите адрес доставки</button>
                <nav className="header-nav">
                    <ul>
                        <li><a href="/delivery">Доставка</a></li>
                        <li><a href="/orders">Заказы</a></li>
                        <li><a href="/login">Авторизация</a></li>
                        <li><a href="/account">Аккаунт</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;