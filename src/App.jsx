import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Devs from './pages/Devs';
import './index.css';
import DevsProvider from './context/DevsContext';
import NavBar from './layout/NavBar';
import NavBarProvider from './context/NavBarContext';
function App() {
    return (
        <DevsProvider>
            <NavBarProvider>
                <NavBar />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/devs" element={<Devs />} />
                    </Routes>
                </Router>
            </NavBarProvider>
        </DevsProvider>
    );
}

export default App;
