import React from 'react';

const Account = ({ user }) => {
    return (
        <div className="account">
            <h2>Аккаунт</h2>
            <div className="account-info">
                <p><strong>Имя пользователя:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Дата регистрации:</strong> {user.registrationDate}</p>
                {/* Добавь другие поля, если необходимо */}
            </div>
        </div>
    );
};

export default Account;