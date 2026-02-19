
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FreeAlertsPage from './pages/FreeAlertsPage';
import VIPPage from './pages/VIPPage';
import ResultsPage from './pages/ResultsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#050505]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/free" element={<FreeAlertsPage />} />
            <Route path="/vip" element={<VIPPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
