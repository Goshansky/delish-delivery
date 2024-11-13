import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Orders from './components/Orders';
import Account from './components/Account';

const restaurants = [
    { id: 1, name: 'Ресторан 1', image: './img/cubok.jpg' },
    { id: 2, name: 'Ресторан 2', image: '' },
    { id: 2, name: 'Ресторан 2', image: '' },
    { id: 2, name: 'Ресторан 2', image: '' },
    { id: 2, name: 'Ресторан 2', image: '' },
    { id: 2, name: 'Ресторан 2', image: '' },
    // Добавь другие рестораны
];

const menuItems = [
    { id: 1, name: 'Блюдо 1', description: 'Описание блюда 1', price: 100 },
    { id: 2, name: 'Блюдо 2', description: 'Описание блюда 2', price: 200 },
    // Добавь другие блюда
];

const orders = [
    {
        id: 1,
        restaurant: 'Ресторан 1',
        total: 300,
        date: '2023-10-01',
        items: [
            { id: 1, name: 'Блюдо 1', quantity: 2 },
            { id: 2, name: 'Блюдо 2', quantity: 1 },
        ],
    },
    {
        id: 2,
        restaurant: 'Ресторан 2',
        total: 200,
        date: '2023-10-02',
        items: [
            { id: 1, name: 'Блюдо 1', quantity: 2 },
        ],
    },
    // Добавь другие заказы
];

const user = {
    username: 'user123',
    email: 'user123@example.com',
    registrationDate: '2023-01-01',
    // Добавь другие поля, если необходимо
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<RestaurantList restaurants={restaurants} />} />
                        <Route path="/menu/:id" element={<Menu menuItems={menuItems} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orders" element={<Orders orders={orders} />} />
                        <Route path="/account" element={<Account user={user} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
