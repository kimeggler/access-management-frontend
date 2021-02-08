import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './dashboard.module.css';

function Dashboard() {
  const history = useHistory();

  return (
    <div>
      <h1>ACCESS CONTROL DASHBOARD</h1>
      <h2>
        Welcome back, <span style={{ color: '#04dac3' }}>Kim</span>
      </h2>
    </div>
  );
}

export default Dashboard;
