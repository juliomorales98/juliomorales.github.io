import React from 'react';
import './Menu.css';

const menu = (props) => {
    return(
        <div className="navBar">
            <img src="https://s.gravatar.com/avatar/4739833a0eb55835314144db57e698c5?s=130" alt=""></img>
            <h3>{props.name}</h3>
            {props.children}
        </div>
    );
};

export default menu;