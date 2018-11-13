import React from 'react'
import StartGame from './StartGame'
import Timer from './Timer'
import BoardGame from './BoardGame'
import array1 from '../A-Images'
import array2 from '../B-Images'
import Cage from './Cage'
import Shelf from './Shelf'

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state={
      onShelf: null,
      timerIsOn: false,
      seconds_left: this.props.game.seconds_left,
      youLost: false,
      flippedCards: [],
      matchedCards: [],
      cards: null,
      pairsLeft: this.props.game.card_pairs_left,
      game: null,
      baby: null
    }
  }

componentDidMount(){
  let gameID = this.props.game.id

    this.calculateCards();
    fetch(`http://localhost:3000/api/v1/games/${gameID}`)
    .then(res => res.json())
    .then(gameObj => this.setState({
      game: gameObj,
      onShelf: gameObj.baby.onShelf,
      baby: gameObj.baby,

    }))
  }

  calculateCards = () => {
    let numberOfPairs = this.props.game.card_pairs_left;
    let aArray = array1.slice(0, numberOfPairs);
    let bArray = array2.slice(0, numberOfPairs)
    let cardArray = aArray.concat(bArray)

    this.shuffleCardArray(cardArray)
  }


  shuffleCardArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    this.setState({
      cards: array
    })
  }


startGame = () => {
  if (this.state.seconds_left > 0){

    this.setState({
      timerIsOn: !this.state.timerIsOn
    }, () => this.startTimer())
  }
  else {

    return
  }
}

startTimer = () => {
  if (this.state.timerIsOn) {

    this.countDown()
  }
    else {

      clearInterval(this.state.timer)
    }
  }

  countDown = () => {
    this.setState({
      timer: setInterval(() => {
        if(this.state.seconds_left > 0 && this.state.pairsLeft > 0){

          this.setState({
            seconds_left: this.state.seconds_left -1
          })
        } else {

          clearInterval(this.state.timer)
        }
       }, 1000)
    })
  }



handleFlip = (e) => {

  let id = e.currentTarget.dataset.id;
  let flippedCards = this.state.flippedCards
  if (flippedCards.length === 2){
    return
  }
  else if (flippedCards.includes(id)) {
    return
  }
   else {
    this.setState({
      flippedCards: [...flippedCards, id]
    }, () => this.checkForMatch())
  }
}

checkForMatch(){
  let flippedCards = this.state.flippedCards

  if (this.state.flippedCards.length === 2) {
    if ((flippedCards[0] + '2' == flippedCards[1]) || (flippedCards[1] + '2' == flippedCards[0])) {
      this.updateMatchedCards()
    }
    else {
      setTimeout(() => this.clearFlippedCards(), 1000)
    }
  }
}

// updateMatchedCards = () => {
//   this.setState({
//     matchedCards: [...this.state.matchedCards, ...this.state.flippedCards],
//     pairsLeft: this.state.pairsLeft -1
//   }, () => this.clearFlippedCards())
// }

updateMatchedCards = () => {
  this.setState({
    matchedCards: [...this.state.matchedCards, ...this.state.flippedCards],
    pairsLeft: this.state.pairsLeft -1
  }, () => this.clearFlippedCards())
}



clearFlippedCards = () => {
  this.setState({
    flippedCards: []
  })
}

exitGame = () => {
  let gameID = this.state.game.id;
  var body = {
    card_pairs_left: this.state.pairsLeft,
    seconds_left: this.state.seconds_left
  }

 fetch(`http://localhost:3000/api/v1/games/${gameID}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(body)
  })
  this.props.unselectGame()
}

  render(){
    return(
      <div className="game">
        <div className="centered-content">
          <Timer secondsLeft={this.state.seconds_left}/>
          <BoardGame
            youLost={this.state.youLost}
            cards={this.state.cards}
            handleFlip={this.handleFlip}
            flippedCards={this.state.flippedCards}
            matchedCards={this.state.matchedCards}/>
          {!this.state.timerIsOn && (this.state.pairsLeft !== 0 && this.state.seconds_left !== 0)
           ?
          <StartGame startGame={this.startGame}/>
          :
          <button id="pause-game" onClick={this.startGame}>Pause Game</button>
        }
        </div>
        <button id="exit-button" onClick={this.exitGame}>save + exit </button>
        <Cage onShelf={this.state.onShelf}/>
        <Shelf onShelf={this.state.onShelf}/>
        {this.state.baby ?
          (this.state.pairsLeft !== 0 ?
            <div className="baby-cage-div">
              <img className="in-cage" src={this.state.baby.img_url} alt="rut-roh"/>
            </div>
            :
            <div className="baby-shelf-div">
              <img className="on-shelf" src={this.state.baby.img_url} alt="rut-roh"/>
            </div>
          )
        :
        null
      }
      {this.state.pairsLeft === 0 ?
        <div className="thank-you">thank you for our freedom</div>
        :
        null
      }
      {this.state.seconds_left === 0 ?
        <div className="disappointing">thank you for the letdown</div>
        :
        null
      }
      </div>
    )
  }
}

export default Game
