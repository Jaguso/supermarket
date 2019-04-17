import React, { Component } from 'react';
import './ListItems.css';

class ListItems extends Component {

  constructor() {
    super();
    this.state = {
      items: ['item1', 'item2']
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Supermarket List</h1>
        <p>{this.state.items.length} ITEMS</p>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              {item}
            </li>
          ))}
        </ul>
        
      </div>

    )
  }
}

export default ListItems;