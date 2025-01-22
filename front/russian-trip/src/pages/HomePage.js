import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

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
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "80px", fontWeight: "bold", color: "#007bff",
                }}
            >
                RUSSIAN TRIP
            </h1>
        </main>
    </div>);
}
