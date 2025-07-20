import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="logo">
      <Link to="/">GorynychAI</Link>
    </div>
    <ul>
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/about">О нас</Link></li>
      <li><Link to="/webdevelopment">Веб-разработка</Link></li>
      <li><Link to="/jobproject">Проектная работа</Link></li>
      <li><Link to="/topagents">Топ агенты</Link></li>
      <li><Link to="/privacy">Политика</Link></li>
    </ul>
  </nav>
);

export default Header; 