import React from "react";
import Nav from "./Nav/index.js";
import Card from "./Card/index.js";
import cards from "../cards.json";
import "../styles/Gameboard.css";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        cards: cards,
        message: "Don't click on the same card twice!"
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
        }
        return arr;
    }

    handleScore = (id) => {
        //find the card obj by id
        let clickedCard = this.state.cards.filter(cards => cards.id === id);
        //if card has not been clicked yet
        if (clickedCard[0].clicked !== true) {
            //if clicked all cards once
            if (this.state.round === 15) {
                //you win, reset game
                this.resetGame("You win!");
            //continue game
            } else {
                //switched to clicked
                clickedCard[0].clicked = true;
                //update state with new values
                this.setState({
                    round: this.state.round + 1,
                    score: this.state.score + 100,
                    cards: this.state.cards,
                    message: "Correct!"
                });
            }
        //if clicked on card already clicked
        } else {
            //you lose, reset game
            this.resetGame("You lose!");
        }
        //shuffle cards every round
        this.shuffle(this.state.cards);
    }

    resetGame = (message) => {
        this.shuffle(this.state.cards);
        this.state.cards.map(cards => cards.clicked = false);
        this.setState({
            round: 1,
            score: 0,
            cards: this.state.cards,
            message: message
        });
    }

    render() {
        return (
            <div>
                <Nav round={this.state.round} message={this.state.message} score={this.state.score} />
                <div className="gameboard">
                    {this.state.cards.map(card => (
                        <Card key={card.id} id={card.id} number={card.number} suite={card.suite} color={card.color} click={this.handleScore}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Game;