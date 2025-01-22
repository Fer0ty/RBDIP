import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export default function PlacesPage() {
    const [places, setPlaces] = useState([]);
    const [newPlace, setNewPlace] = useState({
        placeId: "", name: "", description: "", location: "", access: true,
    });
    const [editingPlace, setEditingPlace] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const userLogin = token ? jwtDecode(token).sub : null;

    const fetchPlaces = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:8080/places", {
                method: "GET", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setPlaces(data);
            } else {
                throw new Error("Ошибка при получении списка мест");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userLogin) {
            fetchPlaces();
        } else {
            navigate("/");
        }
    }, [userLogin, token, navigate]);

    const handleAddPlace = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:8080/places", {
                method: "POST", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                }, body: JSON.stringify(newPlace),
            });
            if (response.ok) {
                fetchPlaces();
                setNewPlace({name: "", description: "", location: "", access: true}); // Очищаем форму
            } else {
                throw new Error("Ошибка при добавлении места");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEditPlace = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/places/${editingPlace.placeId}`, {
                method: "PUT", headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                }, body: JSON.stringify(editingPlace),
            });
            console.log(editingPlace)
            if (response.ok) {
                fetchPlaces();
                setEditingPlace(null);
            } else {
                throw new Error("Ошибка при редактировании места");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeletePlace = async (id) => {
        if (window.confirm("Вы уверены, что хотите удалить это место?")) {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:8080/places/${id}`, {
                    method: "DELETE", headers: {
                        "Content-Type": "application/json", "Authorization": `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    fetchPlaces();
                    setEditingPlace(null);
                } else {
                    throw new Error("Ошибка при удалении места");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
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
                Места
            </h1>

            {loading && <p>Загрузка...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}

            <div style={{marginBottom: "20px", width: "100%", maxWidth: "800px"}}>
                <h2>Добавить новое место</h2>
                <input
                    type="text"
                    placeholder="Название"
                    value={newPlace.name}
                    onChange={(e) => setNewPlace({...newPlace, name: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    value={newPlace.description}
                    onChange={(e) => setNewPlace({...newPlace, description: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <input
                    type="text"
                    placeholder="Расположение"
                    value={newPlace.location}
                    onChange={(e) => setNewPlace({...newPlace, location: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={newPlace.access}
                        onChange={(e) => setNewPlace({...newPlace, access: e.target.checked})}
                    />
                    Доступно
                </label>
                <button
                    onClick={handleAddPlace}
                    style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Добавить место
                </button>
            </div>

            <div
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "calc(100vh - 300px)",
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
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Расположение</th>
                        <th>Доступно</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {places.map((place) => (<tr key={place.id}>
                        <td>{place.name}</td>
                        <td>{place.description}</td>
                        <td>{place.location}</td>
                        <td>{place.access ? "Да" : "Нет"}</td>
                        <td>
                            <button
                                onClick={() => setEditingPlace(place)}
                                style={{
                                    backgroundColor: "transparent", color: "blue", border: "none", cursor: "pointer",
                                }}
                            >
                                Редактировать
                            </button>
                        </td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        </main>

        {editingPlace && (<div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "400px",
                }}
            >
                <h3>Редактировать место</h3>
                <input
                    type="text"
                    value={editingPlace.name}
                    onChange={(e) => setEditingPlace({...editingPlace, name: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <input
                    type="text"
                    value={editingPlace.description}
                    onChange={(e) => setEditingPlace({...editingPlace, description: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <input
                    type="text"
                    value={editingPlace.location}
                    onChange={(e) => setEditingPlace({...editingPlace, location: e.target.value})}
                    style={{width: "100%", padding: "10px", marginBottom: "10px"}}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={editingPlace.access}
                        onChange={(e) => setEditingPlace({...editingPlace, access: e.target.checked})}
                    />
                    Доступно
                </label>
                <button
                    onClick={handleEditPlace}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Сохранить изменения
                </button>
                <button
                    onClick={() => setEditingPlace(null)}
                    style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Закрыть
                </button>
                <button
                    onClick={() => handleDeletePlace(editingPlace.placeId)}
                    style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                        marginTop: "10px",
                        width: "100%",
                    }}
                >
                    Удалить место
                </button>
            </div>
        </div>)}
    </div>);
}
