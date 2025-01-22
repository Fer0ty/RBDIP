import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FriendsPage from "./pages/FriendsPage";
import RegionsPage from "./pages/RegionsPage";
import PlacesPage from "./pages/PlacesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/regions" element={<RegionsPage />} />
                <Route path="/places" element={<PlacesPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
