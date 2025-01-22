import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const [authData, setAuthData] = useState({
        login: "", password: "", name: "", surname: "", birtDate: "", confirmPassword: "",
    });
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleAuthChange = (e) => {
        const {name, value} = e.target;
        setAuthData({...authData, [name]: value});
    };

    const handleLogin = async () => {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(authData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Response data:", data);
            if (data.accessToken) {
                localStorage.setItem("token", data.accessToken);
                navigate("/home");
            } else {
                alert("Токен не получен");
            }
        } else {
            alert("Ошибка входа");
        }
    };


    const handleRegister = async () => {
        if (authData.password !== authData.confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }

        const response = await fetch("http://localhost:8080/auth/register", {
            method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({
                login: authData.login,
                name: authData.name,
                surname: authData.surname,
                birtDate: authData.birtDate,
                password: authData.password,
            }),
        });

        if (response.ok) {
            alert("Регистрация успешна. Теперь войдите.");
            setIsRegistering(false);
        } else {
            alert("Ошибка регистрации");
        }
    };

    return (<div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f8f9fa",
        }}
    >
        <div
            style={{
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "300px",
                textAlign: "center",
            }}
        >
            {isRegistering ? (<>
                <h2>Регистрация</h2>
                <input
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={authData.login}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={authData.name}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Фамилия"
                    value={authData.surname}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="date"
                    name="birtDate"
                    value={authData.birtDate}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={authData.password}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Подтвердите пароль"
                    value={authData.confirmPassword}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <button
                    onClick={handleRegister}
                    style={{
                        margin: "10px 0",
                        padding: "10px",
                        width: "80%",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Зарегистрироваться
                </button>
                <button
                    onClick={() => setIsRegistering(false)}
                    style={{
                        margin: "10px 0",
                        padding: "10px",
                        width: "80%",
                        borderRadius: "5px",
                        backgroundColor: "transparent",
                        color: "#007bff",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Уже есть аккаунт? Войти
                </button>
            </>) : (<>
                <h2>Вход</h2>
                <input
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={authData.login}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={authData.password}
                    onChange={handleAuthChange}
                    style={{
                        margin: "10px 0", padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #ccc",
                    }}
                />
                <button
                    onClick={handleLogin}
                    style={{
                        margin: "10px 0",
                        padding: "10px",
                        width: "80%",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        backgroundColor: "#007bff",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Войти
                </button>
                <button
                    onClick={() => setIsRegistering(true)}
                    style={{
                        margin: "10px 0",
                        padding: "10px",
                        width: "80%",
                        borderRadius: "5px",
                        backgroundColor: "transparent",
                        color: "#007bff",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Нет аккаунта? Зарегистрироваться
                </button>
            </>)}
        </div>
    </div>);
}
