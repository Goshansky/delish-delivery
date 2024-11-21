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
import Delivery from './components/Delivery';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<RestaurantList />} />
                        <Route path="/menu/:id" element={<Menu />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/delivery" element={<Delivery />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
