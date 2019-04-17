import React, { Component } from 'react';

class ListItems extends Component {

  constructor() {
    super();
    this.state = {
      items: ['item1', 'item2']
    }
  }

  render() {
    return (
      <div>
        <h1>Supermarket List</h1>
        <p>{this.state.items.length} ITEMSssods</p>
        <ul>
          {this.state.items.map(item => (
            <li>
              {item}
            </li>
          ))}
        </ul>
        
      </div>

    )
  }
}

export default ListItems;