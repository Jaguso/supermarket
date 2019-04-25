import React, { Component } from 'react';
import ListItems from  './components/ListItems';

class App extends Component {

  constructor() {
    super();
    this.state = { isLoading: true }
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({isLoading: false})
    }.bind(this), 1500)
  }

  render() {
    return (
      this.state.isLoading ? 
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h4>Loading...</h4>
      </div>
      : 
      <div className="App">
        <ListItems/>
      </div>
    );
  }
}

export default App;
