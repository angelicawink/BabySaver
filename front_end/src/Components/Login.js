import React from 'react'
import { Redirect } from 'react-router-dom';


const Login = (props) => {

  if (props.isThereCurrentUser) {
    return <Redirect push to={'/home'}/>
  } else {
    return (
      <div className="App">
        <form onSubmit={props.handleLogin} className="App-header">
          <div>
          <input type="text" name="username" placeholder="Username" />
          </div>
          <br></br>
          <input type="submit" value="Login"/>
        </form>;
      </div>
    )
  }

}

export default Login
