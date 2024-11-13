import React from 'react';

const Orders = ({ orders }) => {
    return (
        <div className="orders">
            <h2>Заказы</h2>
            {orders.length === 0 ? (
                <p>У вас нет заказов</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <h3>{order.restaurant}</h3>
                            <p>Сумма: {order.total} руб.</p>
                            <p>Дата: {order.date}</p>
                            <ul>
                                {order.items.map(item => (
                                    <li key={item.id}>
                                        {item.name} - {item.quantity} шт.
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;