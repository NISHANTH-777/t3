// /src/App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the global CSS file

const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
