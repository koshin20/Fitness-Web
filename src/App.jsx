import React, { useState } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import FitnessRegistration from './pages/FitnessRegistration'; // New component for fitness registration
import Home from './pages/Home';
import FitnessList from './pages/FitnessList'; // New component for fitness list
import Login from './components/Login';
import Receipt from './pages/Receipt';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Fitness Registration */}
        <Route path="/register" element={<FitnessRegistration />} />

        {/* Fitness List */}
        <Route path="/lists" element={<FitnessList />} />
        {/* Receipt */}
        <Route path="/receipts" element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
