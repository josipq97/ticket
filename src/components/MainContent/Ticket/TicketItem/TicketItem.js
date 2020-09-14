import React from 'react';
import "./TicketItem.css"
import { Avatar } from '@material-ui/core';

const TicketItem = ({type, text, img, name}) => {
    const getInitials = name => {
        let initials = "";
        const splitedName = name.split(" ");
        for (let i = 0; i < splitedName.length; i++) {
            initials += splitedName[i][0];        
        }
        return initials;
    }

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
                 <Avatar style={{width:"35px", height:"35px", fontSize: "0.9em"}} className="TicketItem__userIcon">{getInitials(name)}</Avatar>
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