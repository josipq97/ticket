import React from 'react';
import "./QueueItem.css"

const Queueitem = (props) => {
    console.log(props.name, props.value)
    return (
        <div className="QueueItem__container">
            <p className="QueueItem__name">{props.name}</p>
            <p className="QueueItem__value">{props.value}</p>
        </div>
    );
};

export default Queueitem;