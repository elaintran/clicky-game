import React from "react";
import Nav from "../Nav/index.js";
import Card from "../Card/index.js";
import GameModal from "../GameModal/index.js";
import cards from "../../cards.json";
import "./style.css";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        cards: cards,
        modalTitle: "Test Your Memory",
        modalMessage: `Advance through rounds by clicking on
cards, but make sure you don’t
select the same card twice!`,
        show: true
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
            if (this.state.round === this.state.cards.length) {
                //you win, reset game
                this.resetGame("You Win!", "Congratulations! Keep that winning streak going and play another round!");
            //continue game
            } else {
                //switched to clicked
                clickedCard[0].clicked = true;
                //update state with new values
                this.setState({
                    round: this.state.round + 1,
                    score: this.state.score + 100,
                    cards: this.state.cards
                });
            }
        //if clicked on card already clicked
        } else {
            //you lose, reset game
            this.resetGame("You Lose!", "But don't lose hope! Keep trying and remember not to click on the same card!");
        }
        //shuffle cards every round
        this.shuffle(this.state.cards);
    }

    resetGame = (title, message) => {
        this.shuffle(this.state.cards);
        this.state.cards.map(cards => cards.clicked = false);
        this.setState({
            round: 1,
            score: 0,
            cards: this.state.cards,
            modalTitle: title,
            modalMessage: message,
            show: true
        });
    }

    //opens modal
    showModal = () => {
        console.log("clicked");
        this.setState({ show: true });
    }

    //resets modal info when closed
    hideModal = () => {
        this.setState({
            show: false,
            modalTitle: "Test Your Memory",
            modalMessage: `Advance through rounds by clicking on
cards, but make sure you don’t
select the same card twice!`,
        });
    }

    render() {
        return (
            <div>
                <Nav round={this.state.round} message={this.state.message} score={this.state.score} show={this.showModal} />
                <div className="gameboard">
                    {this.state.cards.map(card => (
                        <Card key={card.id} id={card.id} number={card.number} suite={card.suite} color={card.color} click={this.handleScore}/>
                    ))}
                </div>
                <GameModal show={this.state.show} close={this.hideModal} title={this.state.modalTitle} message={this.state.modalMessage}/>
            </div>
        );
    }
}

export default Game;