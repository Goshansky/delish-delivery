import React, { useEffect, useState } from 'react';

const Account = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Пользователь не авторизован');
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/info', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Добавляем JWT-токен
                    },
                    mode: 'cors',
                });

                if (response.ok) {
                    const data = await response.text(); // Используем text() для получения ответа в виде строки
                    console.log('Response data:', data); // Логируем ответ
                    const parsedData = JSON.parse(data); // Пытаемся распарсить ответ как JSON
                    setUser(parsedData);
                } else {
                    const errorText = await response.text(); // Логируем текст ошибки
                    console.error('Error response:', errorText);
                    alert('Ошибка при получении информации о пользователе');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
                alert('Ошибка при отправке запроса');
            }
        };

        fetchUserInfo();
    }, []);

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="account">
            <h2>Аккаунт</h2>
            <div className="account-info">
                <p><strong>Имя пользователя:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Имя:</strong> {user.name}</p>
                <p><strong>Фамилия:</strong> {user.surname}</p>
                <p><strong>Отчество:</strong> {user.patronymic}</p>
                <p><strong>Номер телефона:</strong> {user.phone}</p>
            </div>
        </div>
    );
};

export default Account;