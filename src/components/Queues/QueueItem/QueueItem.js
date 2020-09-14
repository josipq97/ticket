import React from 'react';
import "./QueueItem.css"

const Queueitem = ({name, value, isActive}) => {
    return (
        <div className={`QueueItem__container${isActive ? " active" : ""}`}>
            <p className="QueueItem__name">{name}</p>
            <p className="QueueItem__value">{value}</p>
        </div>
    );
};

export default Queueitem;