import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav className="navbar  fixed-top navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">Logo</Link>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/explore" className="nav-link">Explorar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}