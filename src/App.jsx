import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Devs from './pages/Devs';
import './index.css';
import DevsProvider from './context/DevsContext';
import NavBar from './layout/NavBar';
import NavBarProvider from './context/NavBarContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
    AOS.init({
        once: false,
    });
    return (
        <DevsProvider>
            <NavBarProvider>
                <Router>
                    <NavBar />
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
