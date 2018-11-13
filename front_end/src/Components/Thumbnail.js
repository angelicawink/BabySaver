import React from 'react'
import { Grid} from 'semantic-ui-react';
import MiniCard from './MiniCard'


class Thumbnail extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cards: []
    }
  }

  componentDidMount(){
    let totalCards = this.props.game.card_pairs_left * 2;
    let cards = new Array(totalCards).fill("card")
    this.setState({
      cards: cards
    })
  }


  render(){
    return(
      <>
        {this.props.game.card_pairs_left === 0 ?
          <div className="game-summary">May your name be enscribed in the sands of eternity
            <img src="https://images.emojiterra.com/twitter/v11/512px/2764.png"/>
          </div>
        :
        (this.props.game.seconds_left === 0 ?
          <div className="game-summary">Thanks for nothing
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <img src="https://1.bp.blogspot.com/-RwMDBFkA-nY/V4Tt-niTjwI/AAAAAAAAEI0/-3ozejhMcIkmaF5P3mmhWRxf4miqfyhAgCLcB/s1600/broken-heart-icon-69513.png"/>
          </div>
          :
          <div id='mini-grid-container'>
            <Grid className="mini-grid">
              {this.state.cards
                ?
                this.state.cards.map(card =>
                  <MiniCard key={Math.random(Math.floor())}/>)
                    :
                  null}
            </Grid>
          </div>
              )
          }
      </>
    )
  }
}

export default Thumbnail
