import React from 'react';
import MemoryCard from './MemoryCard';
import { Grid} from 'semantic-ui-react';


class BoardGame extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div>
        <div className="board-game">
                <Grid className="grid cards">
                  {this.props.cards
                    ?
                    this.props.cards.map(card =>
                      <MemoryCard
                        youLost={this.props.youLost}
                        matched={this.props.matchedCards.includes(card.num)}
                        flipped={this.props.flippedCards.includes(card.num)}
                        handleFlip={this.props.handleFlip}
                        key={card.num}
                        flippedSide={card.src}
                        id={card.num}/>)
                        :
                        null}
                </Grid>
              </div>
      </div>
    )
  }
}

//
//   render(){
//
//     return(
//       <div className="board-game">
//         <Grid>
//           {this.state.cards ? this.state.cards.map(card => <MemoryCard youLost={this.props.youLost} matched={this.props.matchedCards.includes(card.num)} flipped={this.props.flippedCards.includes(card.num)} handleFlip={this.props.handleFlip} key={card.num} backSrc={card.src} id={card.num}/>) : null}
//         </Grid>
//       </div>
//     )
//   }
// }
//
export default BoardGame
