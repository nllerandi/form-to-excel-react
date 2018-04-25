import React from 'react';
import logo from '../vzw-logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to VZMediaOps</h1>
        </header>
    );
};

export default Header;