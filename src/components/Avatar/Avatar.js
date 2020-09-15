import React from 'react';
import "./Avatar.css"

const Avatar = ({name, clss}) => {
    const getInitials = name => {
        let initials = "";
        const splitedName = name.split(" ");
        for (let i = 0; i < splitedName.length; i++) {
            initials += splitedName[i][0];        
        } 
        return initials;
    }
    return (   
        <div className={`Avatar__container ${clss}`}>
            <p>{getInitials(name)}</p>
        </div>
      );
}
 
export default Avatar;