import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Импортируем jwt-decode

export default function FriendsPage() {
    const [friends, setFriends] = useState([]);
    const [newFriendLogin, setNewFriendLogin] = useState("");
    const [loading, setLoading] = useState(false); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние для ошибок
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const userLogin = token ? jwtDecode(token).sub : null; // Используем jwtDecode

    const fetchFriends = async () => {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:8080/friends?user=${userLogin}`, {
            method: "GET", headers: {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`, // Добавляем токен в заголовки
            },
        });
        setLoading(false);
        if (response.ok) {
            const data = await response.json();
            setFriends(data);
        } else {
            setError("Ошибка при получении списка друзей");
        }
    };

    useEffect(() => {
        if (userLogin) {
            fetchFriends();
        } else {
            navigate("/");
        }
    }, [userLogin, token, navigate]);

    const handleAddFriend = async () => {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:8080/friends?user=${userLogin}&friendLogin=${newFriendLogin}`, {
            method: "POST", headers: {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
            },
        });
        setLoading(false);
        if (response.ok) {
            setNewFriendLogin("");
            fetchFriends();
        } else {
            if (userLogin === newFriendLogin) {
                setError("Шиза??");
            } else {
                setError("Ошибка при добавлении друга");
            }

        }
    };

    const handleRemoveFriend = async (friendLogin) => {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:8080/friends?user=${userLogin}&friendLogin=${friendLogin}`, {
            method: "DELETE", headers: {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
            }
        });
        setLoading(false);
        if (response.ok) {
            fetchFriends();
        } else {
            setError("Ошибка при удалении друга");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (<div>
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#007bff",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div style={{display: "flex", gap: "20px"}}>
                <button
                    onClick={() => navigate("/home")}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    Home
                </button>
                <button
                    onClick={() => navigate("/friends")}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    Друзья
                </button>
                <button
                    onClick={() => navigate("/regions")}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    Регионы
                </button>
                <button
                    onClick={() => navigate("/places")}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    Места
                </button>
            </div>
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: "transparent", color: "white", border: "none", cursor: "pointer", fontSize: "16px",
                }}
            >
                Выйти
            </button>
        </header>

        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 80px)",
                backgroundColor: "#f8f9fa",
                flexDirection: "column",
                padding: "20px",
            }}
        >
            <h1
                style={{
                    fontSize: "40px", fontWeight: "bold", color: "#007bff", marginBottom: "20px",
                }}
            >
                Друзья
            </h1>

            {loading && <p>Загрузка...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}

            <div style={{marginBottom: "20px"}}>
                <input
                    type="text"
                    placeholder="Логин нового друга"
                    value={newFriendLogin}
                    onChange={(e) => setNewFriendLogin(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                    }}
                />
                <button
                    onClick={handleAddFriend}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Добавить друга
                </button>
            </div>

            <table
                style={{
                    width: "100%", maxWidth: "800px", borderCollapse: "collapse", marginTop: "20px",
                }}
            >
                <thead>
                <tr>
                    <th>Логин</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Дата рождения</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {friends.map((friend) => (<tr key={friend.login}>
                    <td>{friend.login}</td>
                    <td>{friend.name}</td>
                    <td>{friend.surname}</td>
                    <td>{friend.birtDate}</td>
                    <td>
                        <button
                            onClick={() => handleRemoveFriend(friend.login)}
                            style={{
                                backgroundColor: "transparent", color: "red", border: "none", cursor: "pointer",
                            }}
                        >
                            ❌
                        </button>
                    </td>
                </tr>))}
                </tbody>
            </table>
        </main>
    </div>);
}
