import React from 'react';
import "./SideBar.css";
import Avatar from "../Avatar/Avatar"


const SideBar = () => {
    return (
        <div className="SideBar__container">
            <Avatar clss="SideBar__avatar" name="Josip Glasnovic"></Avatar>
            <Avatar clss="SideBar__avatar" name="I T"></Avatar>
        </div>
    );
};

export default SideBar;