import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="nav">
            <div className="round nav-item">
                <h3 className="m-0"><span className="nav-title">Round</span>{props.round}</h3>
            </div>
            <div className="score nav-item">
                <h3 className="m-0"><span className="nav-title">Score</span>{props.score}</h3>
            </div>
            <i class="fas fa-info-circle" data-toggle="modal" data-target="#gameModal"></i>
        </div>
    );
}

export default Nav;