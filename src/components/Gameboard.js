import React from "react";
import Card from "./Card.js";
import "../styles/Gameboard.css";

function Gameboard() {
    return (
        <div className="gameboard">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Gameboard;