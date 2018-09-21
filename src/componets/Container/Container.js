import React from 'react';
import "./ContainerStyle.css";

let Container = (props) => (
    <div className="container">
        <div className="grid-container">
            {props.children}
        </div>
    </div>

)



export default Container;
