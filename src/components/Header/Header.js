import React from 'react';
import './Header.css';

function Header() {
    return(
        <div className="header">
                <div className="title">
                    <h1>
                        Welcome to <i>Shyam's</i> website!
                    </h1>
                </div>
            <div className="header-right">
                <a href="#Home">Home</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </div>

        </div>
    );
}

export default Header;