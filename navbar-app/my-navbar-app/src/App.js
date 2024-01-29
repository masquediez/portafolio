import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Inicio');

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <div className="App">
      <div className="navbar">
        <NavItem name="Inicio" activeItem={activeNavItem} onClick={handleNavItemClick} />
        <NavItem name="Servicios" activeItem={activeNavItem} onClick={handleNavItemClick} />
        <NavItem name="Acerca de" activeItem={activeNavItem} onClick={handleNavItemClick} />
        <NavItem name="Contacto" activeItem={activeNavItem} onClick={handleNavItemClick} />
      </div>
    </div>
  );
}

const NavItem = ({ name, activeItem, onClick }) => {
  return (
    <div
      className={`nav-item ${name === activeItem ? 'active' : ''}`}
      onClick={() => onClick(name)}
    >
      {name}
    </div>
  );
};

export default App;
