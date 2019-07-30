import React from "react";
import Spade from "../Suite/Spade/index.js";
import Clover from "../Suite/Clover/index.js";
import Heart from "../Suite/Heart/index.js";
import Diamond from "../Suite/Diamond/index.js";
import "./style.css";

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
        <div className="card" onClick={() => props.click(props.id)}>
            <h1 className="card-number" style={{color: props.color}}>{props.number}</h1>
            <div className="card-suite">
                {checkSuite(props.suite)}
            </div>
        </div>
    );
}

export default Card;