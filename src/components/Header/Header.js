import React from 'react';

function Header() {
    return(
        <div className="header">
            <a className="logo" href="#home">
                <div className="logo">
                    <h1>
                        Welcome to <i>Shyam's</i> website!
                    </h1>
                </div>
            </a>
            <div className="header-right">
                <a className="active" href="#Home">Home</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    );
}

export default Header;