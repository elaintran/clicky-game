import React from "react";
import Card from "./Card.js";
import "../styles/Gameboard.css";

function Gameboard() {
    return (
        <div className="gameboard">
            <Card number="5" suite="Heart" color="#f54242"/>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Gameboard;