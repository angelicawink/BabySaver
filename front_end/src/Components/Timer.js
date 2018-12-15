import React from 'react'

class Timer extends React.Component{
  render(){
    return(
      <div id="timer">
        <div id="timer-container">
      {(this.props.secondsLeft > 9) ?
        `00:${this.props.secondsLeft}`
        : `00:0${this.props.secondsLeft}` }

        </div>
      </div>
    )
  }
}

export default Timer
