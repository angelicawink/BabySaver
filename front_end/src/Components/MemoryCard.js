import React from 'react'

class MemoryCard extends React.Component{



  render(){
    return(
      <div className="memory-card" data-id={this.props.id} onClick={this.props.handleFlip}>
        {this.props.youLost ?
          <div className="flipped-img"><img src={this.props.flippedSide} alt="rut-roh"/></div>
           :

        (this.props.matched ?
          <div className="flipped-img"><img src={this.props.flippedSide} alt="rut-roh"/></div>
          :
          (this.props.flipped) ?
          <div className="flipped-img"><img src={this.props.flippedSide} alt="rut-roh"/></div>
          :
           <div className="card-img"></div>)
          }
      </div>
    )
  }
}

export default MemoryCard
