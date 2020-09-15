import React from 'react';
import "./Header.css";




const Header = () => {
    return (
        <div className="Header__container">
            <p>Tickets</p>
            <input className="Header__searchBox" type="text" placeholder="Search Tickets"/>
            <div>
                <button className="Header__menuButton">
                    <i className="fas fa-user"></i>
                    <i className="fas fa-chevron-down"></i>
                </button>
                <button className="Header__notificationButton">
                    <i className="fas fa-bell"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;