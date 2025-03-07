import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        if (username.trim() === '') {
            alert('Por favor, ingresa un nombre de usuario.');
            return;
        }
        navigate('/Home');
    };

    return (
        <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Iniciar Sesión</h2>
                <input
                    type="text"
                    name="user"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button
                    onClick={onLogin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};