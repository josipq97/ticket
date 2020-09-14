import React from 'react';
import "./SideBar.css";
import { Avatar } from '@material-ui/core';


const SideBar = () => {
    return (
        <div className="SideBar__container">
            <Avatar className="SideBar__avatar">JG</Avatar>
            <Avatar className="SideBar__avatar">IT</Avatar>
        </div>
    );
};

export default SideBar;