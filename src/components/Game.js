import React from "react";
import Card from "./Card/index.js";
import cards from "../cards.json";
import "../styles/Gameboard.css";
// import Gameboard from "./Gameboard.js";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        cards: cards
    }

    componentDidMount() {
        this.shuffle(this.state.cards);
        this.setState({ cards: this.state.cards });
    }

    //modern ver of fisher-yates shuffle algorithm
    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }
        console.log(arr);
        return arr;
    }

    //increment score when unclicked card is clicked
    //else reset score back to 0
    handleScore = (id) => {
        this.shuffle(this.state.cards);
        this.setState({ cards: this.state.cards });
        // let clickedCard = this.state.cards[id-1];
        // if (clickedCard.clicked !== true) {
        //     clickedCard.clicked = true;
        //     this.setState(
        //         { score: this.state.score + 100 },
        //         { round: this.state.round + 1 }
        //     );
        // }
    }

    render() {
        return (
            <div className="gameboard">
                {this.state.cards.map(card => (
                    <Card key={card.id} id={card.id} number={card.number} suite={card.suite} color={card.color} click={this.handleScore}/>
                ))}
            </div>
        );
    }
}

export default Game;