import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <li className="nav-item">
</li>
                    <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
                    </li>
                    <li className="nav-item">
                        
                        <a className="nav-link" href="/app">Gifts</a> {/* Updated Link */}
             {/* try change from link to a */}       
                        <a className="nav-link" href="/app/search" to="/app/search">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}