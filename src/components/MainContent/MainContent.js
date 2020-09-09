import React from 'react';
import "./MainContent.css";
import Ticket from "./Ticket/Ticket"



const MainContent = () => {
    return (
        <div className="MainContent__container">
            <header>
                <h1>All tickets</h1>
                <div className="filterContainer">
                    <div className="orderByContainer">
                        <button className="reverseOrder"><i class="fas fa-exchange-alt"></i></button>
                        <button className="orderByButton">Last replied - Ascending  <i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div className="pageButtons">
                        <button className="numberOfItemsDisplayedButton">1-50  <i class="fas fa-chevron-down"></i></button>
                        <button className="prevPageButton"><i class="fas fa-caret-left"></i></button>
                        <button className="nextPageButton"><i class="fas fa-caret-right"></i></button>    
                    </div>
                </div>
            </header>
            <Ticket />
        </div>
    );
};

export default MainContent;