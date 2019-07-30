import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="nav">
            <div className="round">
                <h2>Round {props.round}</h2>
            </div>
        </div>
    );
}

export default Nav;