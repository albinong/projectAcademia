// Login.js

import React, { useState } from 'react'; // Importa o módulo React e a função useState do pacote 'react'
import './App.css'; // Importa os estilos globais da aplicação
import './Login.css'; // Importe o arquivo CSS com estilos
import { Link } from 'react-router-dom'; // Importa o componente Link do pacote 'react-router-dom'


// Definição do componente funcional Login
function Login() {

    // Declaração de estados locais utilizando o hook useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Função para lidar com o evento de login
    const handleLogin = (event) => {
        event.preventDefault();

        const storedUser = localStorage.getItem(username);
        if (storedUser) {
            const storedPassword = JSON.parse(storedUser).password;
            if (password === storedPassword) {
                console.log('Login bem-sucedido');
                alert('Login bem-sucedido');
                setError('');
            } else {
                setError('Senha incorreta');
            }
        } else {
            setError('Usuário não encontrado');
        }
    };

    // Função para lidar com o evento de cadastro
    const handleSignup = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError('Por favor, insira um nome de usuário e senha válidos');
            return;
        }

        if (localStorage.getItem(username)) {
            setError('Este nome de usuário já está em uso');
            return;
        }

        const newUser = { username, password };
        localStorage.setItem(username, JSON.stringify(newUser));
        console.log('Conta criada com sucesso');
        alert('Conta criada com sucesso');
        setUsername(''); // Limpa o nome de usuário
        setPassword(''); // Limpa a senha
        setError('');
    };

    // Renderização do componente
    return (
        <div className="login-container">
            {/* Formulário de login */}
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        placeholder='Digite o Nome de Usuário:'
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        placeholder='Digite a Senha:'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {/* Formulário de cadastro */}
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Criar Conta</h2>
                <div className="form-group">
                    <label htmlFor="newUsername"></label>
                    <input
                        placeholder='Criar Nome de Usuário:'
                        type="text"
                        id="newUsername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword"></label>
                    <input
                        placeholder='Criar Nova Senha:'
                        type="password"
                        id="newPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Criar Conta</button>
            </form>

            {/* Botão de voltar */}
            <div className="back-button">
                <Link to="/">VOLTAR</Link>
            </div>
        </div>
    );
}

export default Login; // Exporta o componente Login para uso em outras partes da aplicação