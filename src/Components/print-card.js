import React from "react";

const PrintCard = (props) => {
    return (
        <div className="print-card">
            <img src={props.image} alt='title' className="print-card-image"/>
            <h2 className="print-card-title">{props.title}</h2>
            <p className="print-card-price">{props.price}</p>
        </div>
    );

};

export default PrintCard;