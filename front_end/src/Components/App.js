import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome'
import Login from './Login'
import Home from './Home'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users: [],
      currentUser: null,
      userID: 1
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(users => this.setState({
      users: users
    }))
  }

    handleLogin = (e) => {
      e.preventDefault()
      let username = e.target.children[0].children[0].value

      fetch('http://localhost:3000/api/v1/login', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          name: username
        })
      })
      .then(res => res.text())
      .then(json =>
        this.setState({
          currentUser: (this.state.users.filter(user => user.name === username)[0])
        })
      )
    }



  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact  path="/" component={Welcome} />
            <Route exact path="/login"  render={(props) => <Login {...props} isThereCurrentUser={this.state.currentUser} handleLogin={this.handleLogin} />}/>
            <Route exact path="/home"  render={(props) => <Home {...props} currentUserID={this.state.userID} />}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
