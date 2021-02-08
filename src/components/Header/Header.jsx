import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  const history = useHistory();

  return (
    <div className={style.header}>
      <div className='header-user-info'>
        <p>Welcome back, Kim</p>
      </div>
      <div className='header-navigation'>
        <a href='/' className={style.header_navigation_link}>
          CONNECTION
        </a>
        <a href='/' className={style.header_navigation_link}>
          SERVER
        </a>
        <a href='/' className={style.header_navigation_link}>
          TAGS
        </a>
        <a href='/' className={style.header_navigation_link}>
          LOGS
        </a>
      </div>
      <div className='header-system-info'>
        <p>System available</p>
      </div>
    </div>
  );
}

export default Header;
