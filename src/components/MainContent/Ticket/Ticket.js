import React from 'react';
import "./Ticket.css";
import TicketItem from "./TicketItem/TicketItem";

const Ticket = () => {
    return (
        <div className="Ticket__container">
            <div className="Ticket__top">
                <div className="Ticket__id__container">
                    <p className="Ticket__top__id">#IT00006790</p>
                    <p className="Ticket__top__status">NEW</p>
                </div>
                <div className="Ticket__text__container">
                    <p className="Ticket__top__subject">I cannot upload a non .PNG image onto my widget? <span className="Ticket__top__subject__time">3 minutes ago</span></p>
                    <p className="Ticket__top__description">I cannot upload a non .PNG image onto my widget. Does your widget support .PNG?</p>
                </div>
            </div>
            <div className="Ticket__bottom">
                <TicketItem type="pinned" img="fas fa-thumbtack"/>
                <TicketItem type="favourite" img="fas fa-star"/>
                <TicketItem type="more" img="fas fa-ellipsis-h"/>
                <TicketItem type="Asigned to" name="David Mackenzie" />
                <TicketItem type="Raised By" name="Melissa Smith" />
                <TicketItem type="Priority" text="medium"/>
                <TicketItem type="Due Date" text="in 1 Day"/>
            </div>
        </div>
    );
}
 
export default Ticket;

