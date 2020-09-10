import React from 'react';
import "./Ticket.css"

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
                <div className="pinned">
                    <i class="fas fa-thumbtack"></i>
                </div>
                <div className="favourite">
                    <i class="fas fa-star"></i>
                </div>
                <div className="more">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="assignedTo">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="raisedBy">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="priority">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="category">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="due">
                    <i class="fas fa-ellipsis-h"></i>
                </div>

            </div>
        </div>
    );
}
 
export default Ticket;

