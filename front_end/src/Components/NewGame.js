import React from 'react'
import { Form, Button } from 'semantic-ui-react';


class NewGame extends React.Component{
  render(){
    return(
      <div className="new-game">
        <Form onSubmit={this.props.handleSubmit}>

          <Form.Field>
            <input type="text" placeholder="game title"></input>
          </Form.Field>

          <Form.Field>
            <input type="text" placeholder="timer (seconds)"></input>
          </Form.Field>

          <Form.Field>
            <label>Friends and family would describe me as a:</label>
            <select>
              <option value="hero">hero</option>
              <option value="noob">noob</option>
              <option value="coward">coward</option>
              <option value="bish">bish</option>
            </select>
          </Form.Field>

          <Form.Field>
            <label>Baby to imprison:</label>
            <select>
              <option value="Bruno">Bruno</option>
              <option value="Ann">Ann</option>
              <option value="Sam">Sam</option>
              <option value="Erin">Erin</option>
              <option value="Charlie">Charlie</option>
              <option value="Peter">Peter</option>
              <option value="Ricky">Ricky</option>
              <option value="Angelica">Angelica</option>
              <option value="Sasha">Sasha</option>
              <option value="Juliette">Juliette</option>
            </select>
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewGame
