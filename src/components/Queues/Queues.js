import React from 'react';
import "./Queues.css";
import Cog from "../../assets/img/cog.png"


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
            <div>
                
            </div>
        </div>
    );
};

export default Queues;