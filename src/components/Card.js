import React from "react";
import Spade from "./Spade.js";
import Clover from "./Clover.js";
import Heart from "./Heart.js";
import Diamond from "./Diamond.js";
import "../styles/Card.css";

const checkSuite = (suite) => {
    if (suite === "Spade") {
        return <Spade />;
    } else if (suite === "Clover") {
        return <Clover />;
    } else if (suite === "Diamond") {
        return <Diamond />;
    } else if (suite === "Heart") {
        return <Heart />;
    }
}

function Card(props) {
    return (
        <div className="card">
            <h1 className="card-number" style={{color: props.color}}>{props.number}</h1>
            <div className="card-suite">
                {checkSuite(props.suite)}
            </div>
        </div>
    );
}

export default Card;