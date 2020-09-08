import React from 'react';
import "./Header.css";




const Header = () => {
    return (
        <div className="Header__container">
            <p>Tickets</p>
            <input className="Header__searchBox" type="text" placeholder="Search Tickets"/>
            <div>
                <button className="Header__menuButton">
                <i class="fas fa-user"></i>
                    <i class="fas fa-sort-down"></i>
                </button>
                <button className="Header__notificationButton">
                <i class="fas fa-bell"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;