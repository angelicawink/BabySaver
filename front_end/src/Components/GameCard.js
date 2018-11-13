import React from 'react'
import { Card, Button, Header } from 'semantic-ui-react'
import Thumbnail from './Thumbnail'

class GameCard extends React.Component{
  render(){
    return(
      <Card className="game-card">
       <Header>{this.props.game.name}</Header>
        <Card.Content className="game-card">
          {(this.props.game.seconds_left > 9) ?
            `Timer: 00:${this.props.game.seconds_left}`
            :
            `Timer: 00:0${this.props.game.seconds_left}`
          }
        </Card.Content>
        <Card.Content className="game-card">
          <Thumbnail className="thumbnail" game={this.props.game}/>
        </Card.Content>
        <Card.Content className="game-card">Unmatched : {this.props.game.card_pairs_left *2}</Card.Content>

        <Button onClick={this.props.selectGame} data-id={this.props.id}>Resume</Button>
      </Card>
    )
  }
}

export default GameCard
