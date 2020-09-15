import React from 'react';
import "./Ticket.css";
import TicketItem from "./TicketItem/TicketItem";

const Ticket = ({data}) => {
    return (
        <div className="Ticket__container">
            <div className="Ticket__top">
                <div className="Ticket__id__container">
                    <p className="Ticket__top__id">{data.id}</p>
                    <p className={`Ticket__top__status ${data.status}`}>{data.status}</p>
                </div>
                <div className="Ticket__text__container">
                    <p className="Ticket__top__subject">{data.subject}<span className="Ticket__top__subject__time">{`${data.time}, ${data.date}`}</span></p>
                    <p className="Ticket__top__description">{data.description}</p>
                </div>
            </div>
            <div className="Ticket__bottom">
                <TicketItem type="pinned" img="fas fa-thumbtack"/>
                <TicketItem type="favourite" img="fas fa-star"/>
                <TicketItem type="more" img="fas fa-ellipsis-h"/>
                <TicketItem type="Asigned to" name="David Mackenzie" />
                <TicketItem type="Raised By" name="Melissa Smith" />
                <TicketItem type="Priority" text={data.priority}/>
                <TicketItem type="Due Date" text="in 1 Day"/>
                <TicketItem type="Important"/>
            </div>
        </div>
    );
}
 
export default Ticket;

