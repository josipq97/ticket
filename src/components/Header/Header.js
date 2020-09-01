import React from 'react';
import "./Header.css";
import avatar from "../../assets/img/avatar.jpg"
import downArrow from "../../assets/img/downArrow.jpg"
import bell from "../../assets/img/bell.jpg"




const Header = () => {
    return (
        <div className="Header__container">
            <p>Tickets</p>
            <input className="Header__searchBox" type="text" placeholder="Search Tickets"/>
            <div>
                <button className="Header__menuButton">
                    <img src={avatar} alt=""/>
                    <img src={downArrow} alt=""/>
                </button>
                <button className="Header__notificationButton">
                    <img src={bell} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default Header;