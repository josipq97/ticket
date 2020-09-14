import React from 'react';
import "./Queues.css";
import QueueItem from "./QueueItem/QueueItem"


const Queues = () => {
    return (
        <div className="Queues__container">
            <header>
                <div>
                    <h4>QUEUES</h4>
                    <i class="fas fa-cog"></i>
                </div>
                <h3>+</h3>
            </header>
            <div className="Queues__Options">
                <QueueItem name="All Tickets" value="4k" isActive="true"/>
                <QueueItem name="Priority" value="2k" />
                <QueueItem name="Unresponded" value="2k" />
                <QueueItem name="Pending Tickets" value="3k" />
                <QueueItem name="Priority Tickets" value="2k" />
                <QueueItem name="Open Queue" value="4k" />
                <QueueItem name="Today" value="9" />
 
            </div>

            <h4>STATUSES</h4>
            <QueueItem name="New" value="" />
            <QueueItem name="Open" value="" />
            <QueueItem name="Closed" value="" />
            <QueueItem name="Solved" value="" />

            <h4>CATEGORIES</h4>
            <QueueItem name="Acquisition" value="" />
            <QueueItem name="Administration" value="" />
            <QueueItem name="Billing" value="" />
            <QueueItem name="Customer support" value="" />
            <QueueItem name="Default Category" value="" />
            <QueueItem name="Human Resource" value="" />
            <QueueItem name="Operation" value="" />
            <QueueItem name="Product support" value="" />

            <div>
                
            </div>
        </div>
    );
};

export default Queues;