import React from 'react';
import axios from 'axios';

import GitCard from './GitCard';

import './App.css';

class App extends React.Component {
  // constructor syntax is implied
  state = {
    user: {},
    userFollowers: []
  }

  /* not going to account for errors */
  componentDidMount() {
    axios.get('https://api.github.com/users/Ladrillo')
      .then(res => this.setState({ user: res.data })); // spread syntax is implied
    axios.get('https://api.github.com/users/Ladrillo/followers')
      .then(res => this.setState({ userFollowers: res.data }));
  }

  /* not going to account for GET latency, should be irrelevant to user experience here */
  render () {
    return (
      <div className="App">
        <GitCard user={this.state.user} userFollowers={this.state.userFollowers} />
      </div>
    )
  }
}

export default App;
