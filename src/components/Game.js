import React from "react";
import Nav from "./Nav/index.js";
import Modal from "./Modal/index.js";
import Card from "./Card/index.js";
import cards from "../cards.json";
import "../styles/Gameboard.css";
// import Gameboard from "./Gameboard.js";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        cards: cards,
        message: ""
    }

    //run functions when page loads
    componentDidMount() {
        //add click property to all card objects and set clicked as false
        this.state.cards.map(cards => cards.clicked = false);
        //shuffle cards
        this.shuffle(this.state.cards);
        //update set with new cards
        this.setState({ cards: this.state.cards });
    }

    //modern ver of fisher-yates shuffle algorithm
    shuffle = (arr) => {
        //start at the last index and end at first
        for (let i = arr.length - 1; i > 0; i--) {
            //generate a random index
            let newIndex = Math.floor(Math.random() * (i + 1));
            //store value of current arr in variable
            let arrValue = arr[i];
            //swap the value of the current arr with the new value
            arr[i] = arr[newIndex];
            //the new value is assigned to the old position
            arr[newIndex] = arrValue;
            // debugger;
        }
        return arr;
    }

    handleScore = (id) => {
        let round; 
        let score;
        //find the card obj by id
        let clickedCard = this.state.cards.filter(cards => cards.id === id);
        //if card has not been clicked yet
        if (clickedCard[0].clicked !== true) {
            //switched to clicked
            clickedCard[0].clicked = true;
            //update stats
            round = this.state.round + 1;
            score = this.state.score + 100;
        //if clicked on card already clicked
        } else {
            //reset values
            this.state.cards.map(cards => cards.clicked = false);
            round = 1;
            score = 0;
        }
        //shuffle cards every round
        this.shuffle(this.state.cards);
        //update state with new values
        this.setState({
            round: round,
            score: score,
            cards: this.state.cards
        });
    }

    render() {
        return (
            <div>
                <Nav round={this.state.round} score={this.state.score} />
                <div className="gameboard">
                    {this.state.cards.map(card => (
                        <Card key={card.id} id={card.id} number={card.number} suite={card.suite} color={card.color} click={this.handleScore}/>
                    ))}
                </div>
                <Modal message={this.state.message} />
            </div>
        );
    }
}

export default Game;