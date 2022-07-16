import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const showNavigation = () => (
    <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
            <Link className="navbar-brand" to="#">
            <img src="/images/Logo.png" alt="LifeKicks Logo" width="50" height="30" className="d-inline-block align-text-top"/>
                LifeKicks
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="#">Home</Link>
                        <Link className="nav-link" to="#">Store</Link>
                        <Link className="nav-link" to="#">Sign In</Link>
                        <Link className="nav-link" to='#'>Register</Link>
                    </div>
                </div>
            </div>
    </nav>
    );

    return (
        <header id='header'>
            {showNavigation()}
        </header>
    )
}

export default Header;