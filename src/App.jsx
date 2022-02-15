import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Devs from './pages/Devs';
import DevsProvider from './context/DevsContext';
function App() {
    return (
        <DevsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/devs" element={<Devs />} />
                </Routes>
            </Router>
        </DevsProvider>
    );
}

export default App;
