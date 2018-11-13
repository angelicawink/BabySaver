import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Welcome extends Component {
  constructor(props){
    super(props);
    this.state={

      }
    }

  handleLogin = () => {
      debugger
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Welcome, savior.</div>
          <br></br>
          <sub >The babies have been waiting.</sub>
          <br></br>
          <br></br>
          <Link className="link" to="/login">Log in.</Link>
        </header>
      </div>
    );
  }
}

export default Welcome;
