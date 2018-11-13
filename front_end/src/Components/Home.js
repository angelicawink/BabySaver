import React from 'react';
import GameCard from './GameCard';
import { Card, Container, Header } from 'semantic-ui-react';
import Game from './Game'
import NewGame from './NewGame'
// import { Redirect } from 'react-router-dom';



class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userID: 1,
      currentUser: {},
      games: [],
      selectedGame: null,
      newGame: false,
      babys: []
    }
  }

  componentDidMount(){
    this.fetchGames()
    this.fetchBabies()
  }

  fetchGames = () => {
    return fetch(`http://localhost:3000/api/v1/users/${this.state.userID}`)
    .then(res => res.json())
    .then(userObj => this.setState({
      currentUser: userObj,
      games: userObj.games
    }))
  }

  fetchBabies = () => {
    return fetch(`http://localhost:3000/api/v1/babies/`)
    .then(res => res.json())
    .then(babies => this.setState({
      babies: babies
    }))
  }

  unselectGame = () => {
    this.setState({
      selectedGame: null
    }, () => this.fetchGames())
  }

  selectGame = (e) => {
    let gameId = e.target.dataset.id

    let gameObj = this.state.games.find(game => game.id == gameId)

    this.setState({
      selectedGame: gameObj
    })
  }

  handleNewGameClick = () => {
    this.setState({
      newGame: true
    })
  }

  handleSubmit = (e) => {
    let userID = this.state.userID
    let newName = e.currentTarget[0].value;
    let secondsLeft = parseInt(e.currentTarget[1].value)
    let difficulty = e.currentTarget[2].value
    var cardPairs;

    switch (difficulty){
      case "hero":
        cardPairs = 8;
        break;
      case "noob":
        cardPairs = 6;
        break;
      case "coward":
        cardPairs = 4;
        break;
      case "bish":
        cardPairs = 2;
        break;
    }

    debugger
    let babyName = e.currentTarget[3].value

    let baby = this.state.babies.find(baby => baby.name === babyName)
    let babyID = baby.id

    var body = {
      seconds_left: secondsLeft,
      card_pairs_left: cardPairs,
      user_id: userID,
      baby_id: babyID,
      name: newName
    }
    this.fetchPostNewGame(body).then(this.setState({
      newGame: false
    }, () => this.fetchGames()))
  }

  fetchPostNewGame(body){
    return fetch('http://localhost:3000/api/v1/games', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).then(game => console.log(game))
  }

  render(){
    return(
      <Container>
        {!this.state.selectedGame ?
          <div>
            <Header as='h1'>Welcome back, {this.state.userID ?
              this.state.currentUser.name
              : null}
            </Header>
            <div className="memo">
                <br></br>
                Suffering has ensued in your absence.
                <br></br>
                Don't forget it.
            </div>
            <div className="memo-heart">
              <img src="https://openclipart.org/image/2400px/svg_to_png/234835/heart-outline.png"/>
            </div>
          </div>
           :
           null
        }

        <br></br>
        <br></br>
        {this.state.newGame ?
          <NewGame handleSubmit={this.handleSubmit}/>
          :
          (!this.state.selectedGame ?
            (<div>
                <Card.Group id="card-group">
                  {this.state.userID ?
                  this.state.games.map(gameObj => <GameCard selectGame={this.selectGame} key={gameObj.id} id={gameObj.id} game={gameObj}/>)
                  : null}
                </Card.Group>
                <button id="new-game" onClick={this.handleNewGameClick}>New Game</button>
              </div>)
            :
            <Game unselectGame={this.unselectGame} game={this.state.selectedGame}/>)
        }


      </Container>
    )
  }
}

export default Home
