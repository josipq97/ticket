import React from 'react';
import "./TicketItem.css"
import Avatar from "../../../Avatar/Avatar"

const TicketItem = ({type, text, img, name}) => {
    if(type==="pinned" || type==="favourite" || type==="more"){
        return (
            <div className={type}>
                <i className={img}></i>
            </div>
        )
    }
    else if(type==="Asigned to" || type==="Raised By"){
        return (
            <div className="TicketItem__container">
                 <Avatar clss="TicketItem__avatar" name={name}></Avatar>
                 <div>
                     <p className="TicketItem__type">{type}</p>
                     <p className="TicketItem__name">{name}</p>                      
                 </div>
            </div> 
          );
    }
    else{
        return (
            <div className="TicketItem__container">
                 <div>
                     <p className="TicketItem__type">{type}</p>
                     <p className="TicketItem__text">{text}</p>                      
                 </div>
            </div> 
          );
    }
}


 
export default TicketItem;