import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import ContactInfo from './components/ContactInfo/ContactInfo.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={
                                <ContactInfo />
                        } />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;