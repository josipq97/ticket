import React from 'react';
import "./Queues.css";
import Cog from "../../assets/img/cog.png"
import QueueItem from "./QueueItem/QueueItem"


const Queues = () => {
    return (
        <div className="Queues__container">
            <header>
                <div>
                    <h4>Queues</h4>
                    <img src={Cog} alt="cogIcon"/>
                </div>
                <h3>+</h3>
            </header>
            <div className="Queues__Options">
                <QueueItem name="All Tickets" value="4k" />
                <QueueItem name="Priority" value="2k" />
                <QueueItem name="Unresponded" value="2k" />
                <QueueItem name="Pending Tickets" value="3k" />
                <QueueItem name="Priority Tickets" value="2k" />
                <QueueItem name="Open Queue" value="4k" />
                <QueueItem name="Today" value="9" />
 
            </div>



            <div>
                
            </div>
        </div>
    );
};

export default Queues;