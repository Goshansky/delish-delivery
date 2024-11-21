import React, { useEffect, useState } from 'react';

const Delivery = () => {
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
                    console.error('Ошибка при получении заказов');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        };

        fetchOrders();
    }, []);

    const updateOrderStatus = async (orderId, status) => {
        try {
            const response = await fetch(`http://localhost:8084/api/deliveries/${orderId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                const updatedOrders = orders.map(order =>
                    order.id === orderId ? { ...order, status } : order
                );
                setOrders(updatedOrders);
                alert(`Статус заказа ${orderId} обновлен на ${status}`);
            } else {
                alert('Ошибка при обновлении статуса заказа');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            alert('Ошибка при обновлении статуса заказа');
        }
    };

    const takeOrder = (orderId) => {
        updateOrderStatus(orderId, 'DELIVERE');
    };

    const deliverOrder = (orderId) => {
        updateOrderStatus(orderId, 'DELIVERED');
    };

    return (
        <div className="delivery">
            <h2>Доставка</h2>
            {orders.length === 0 ? (
                <p>Нет заказов для доставки</p>
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
                            <div className="delivery-controls">
                                <button onClick={() => takeOrder(order.id)}>Взять заказ</button>
                                <button onClick={() => deliverOrder(order.id)}>Доставлено</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Delivery;
