import React from 'react';
import "./MainContent.css";
import Ticket from "./Ticket/Ticket"
import Tickets from "../../ticketsJson"



const MainContent = () => {
    const ticketsArray = Tickets.map(item =>{
        return(
            <Ticket data={item} key={item.id}/>
        )
    })    
    return (
        <div className="MainContent__container">
            <header>
                <h1>All tickets</h1>
                <div className="filterContainer">
                    <div className="orderByContainer">
                        <button className="reverseOrder"><i className="fas fa-exchange-alt"></i></button>
                        <button className="orderByButton">Last replied - Ascending  <i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div className="pageButtons">
                        <button className="numberOfItemsDisplayedButton">1-50  <i className="fas fa-chevron-down"></i></button>
                        <button className="prevPageButton"><i className="fas fa-caret-left"></i></button>
                        <button className="nextPageButton"><i className="fas fa-caret-right"></i></button>    
                    </div>
                </div>
            </header>
            {ticketsArray}
        </div>
    );
};

export default MainContent;