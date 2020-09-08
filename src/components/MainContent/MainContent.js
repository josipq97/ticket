import React from 'react';
import "./MainContent.css";



const MainContent = () => {
    return (
        <div className="MainContent__container">
            <header>
                <h1>All tickets</h1>
                <div className="filterContainer">
                    <button className="reverseOrder"><i class="fas fa-exchange-alt"></i></button>
                    <button className="orderByButton">Last replied - Ascending</button>
                    <button className="numberOfItemsDisplayedButton">1-50</button>
                    <div className="pageButtons">
                    <button className="prevPageButton">&lt;</button>
                    <button className="nextPageButton">&gt;</button>
                        
                    </div>

                </div>
            </header>
        </div>
    );
};

export default MainContent;