import React from "react";
import "../styles/Number.css";

function Number(props) {
    return <h1 className="card-number" style={{color: props.color}}>{props.number}</h1>;
}

export default Number;