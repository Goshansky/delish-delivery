import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:8083/api/orders', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setOrders(data);
                } else {
                    console.error('Ошибка при получении списка заказов');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders">
            <h2>Заказы</h2>
            {orders.length === 0 ? (
                <p>У вас нет заказов</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <h3>Заказ #{order.id}</h3>
                            <p>Адрес доставки: {order.deliveryAddress}</p>
                            <p>Статус: {order.status}</p>
                            <ul>
                                {order.orderItems.map(item => (
                                    <li key={item.id}>
                                        {item.menuId} - {item.quantity} шт.
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
