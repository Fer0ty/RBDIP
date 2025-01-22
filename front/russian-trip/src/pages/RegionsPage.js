import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export default function RegionsPage() {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const userLogin = token ? jwtDecode(token).sub : null;

    const fetchRegions = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/regions?login=${userLogin}`, {
                method: "GET", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setRegions(data);
            } else {
                throw new Error("Ошибка при получении списка регионов");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userLogin) {
            fetchRegions();
        } else {
            navigate("/");
        }
    }, [userLogin, token, navigate]);

    const handleVisitRegion = async (regionId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/regions?login=${userLogin}&regionId=${regionId}`, {
                method: "POST", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                fetchRegions();
            } else {
                throw new Error("Ошибка при посещении региона");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const handleUnvisitRegion = async (regionId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/regions?login=${userLogin}&regionId=${regionId}`, {
                method: "DELETE", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                fetchRegions();
            } else {
                throw new Error("Ошибка при удалении региона");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
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
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
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
                Регионы
            </h1>

            {loading && <p>Загрузка...</p>} {/* Показываем сообщение о загрузке */}
            {error && <p style={{color: "red"}}>{error}</p>} {/* Показываем ошибку */}

            <div
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "calc(100vh - 200px)",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            >
                <table
                    style={{
                        width: "100%", borderCollapse: "collapse",
                    }}
                >
                    <thead>
                    <tr>
                        <th>Название региона</th>
                        <th>Столица</th>
                        <th>Расположение столицы</th>
                        <th>Посещен</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {regions.map((region) => (<tr key={region.regionId}>
                        <td>{region.name}</td>
                        <td>{region.capitalName}</td>
                        <td>{region.capitalLocation}</td>
                        <td>{region.visited ? "Да" : "Нет"}</td>
                        <td>
                            {region.visited ? (<button
                                onClick={() => handleUnvisitRegion(region.regionId)}
                                style={{
                                    backgroundColor: "transparent",
                                    color: "red",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Убрать из посещенных
                            </button>) : (<button
                                onClick={() => handleVisitRegion(region.regionId)}
                                style={{
                                    backgroundColor: "transparent",
                                    color: "green",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Добавить в посещенные
                            </button>)}
                        </td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        </main>
    </div>);
}
