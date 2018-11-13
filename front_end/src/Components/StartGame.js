import React from 'react'

class StartGame extends React.Component {
  render(){
    return(
      <div className="start-game" onClick={this.props.startGame}>Click to Resume Game</div>
    )
  }
}

export default StartGame
