import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="nav">
            <div className="round nav-item">
                <h3 className="m-0"><span className="nav-title">Round</span>{props.round}</h3>
            </div>
            <div className="message">
                <h3>{props.message}</h3>
            </div>
            <div className="score nav-item">
                <h3 className="m-0"><span className="nav-title">Score</span>{props.score}</h3>
            </div>
        </div>
    );
}

export default Nav;