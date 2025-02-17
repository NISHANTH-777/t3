// /src/components/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Entered Username: {user.username}</p>
      <p>Entered Password: {user.password}</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
