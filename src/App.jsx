import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Devs from './pages/Devs';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/devs" element={<Devs />} />
            </Routes>
        </Router>
    );
}

export default App;
