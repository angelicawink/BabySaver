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
        <Grid className="mini-grid">
          {this.state.cards
            ?
            this.state.cards.map(card =>
              <MiniCard key={Math.random(Math.floor())}/>)
                :
                null}
        </Grid>
      </>
    )
  }
}

export default Thumbnail
