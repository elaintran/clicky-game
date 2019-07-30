import React from "react";
import "../styles/Gameboard.css";
import Card from "./Card/index.js";
import cards from "../cards.json";

function Gameboard() {
    return (
        <div className="gameboard">
            {cards.map(card => (
                <Card key={card.key} number={card.number} suite={card.suite} color={card.color}/>
            ))}
        </div>
    );
}

export default Gameboard;