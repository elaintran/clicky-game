import React from "react";
import Card from "./Card.js";
import "../styles/Gameboard.css";

function Gameboard() {
    return (
        <div className="gameboard">
            <Card number="2" suite="Heart" color="#f54242" />
            <Card number="3" suite="Spade" color="#252525" />
            <Card number="4" suite="Diamond" color="#f54242"/>
            <Card number="5" suite="Clover" color="#252525" />
            <Card />
        </div>
    );
}

export default Gameboard;