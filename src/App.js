import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { message: 'default message' }
  handleClick = async () => {
    try {
      const resp = await fetch('/.netlify/functions/hello')
      const msg = await resp.json()
      this.setState({ message: msg.message })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default App;
