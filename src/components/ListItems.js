import React, { Component } from 'react';
import './ListItems.css';

import Modal from './Modal';

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
        <div className="title">
          <h1>Supermarket List</h1>
          <p>{this.state.items.length} ITEMS</p>
        </div>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i} className="item">
              {item}
            </li>
          ))}
        </ul>
        <Modal/>
        
      </div>

    )
  }
}

export default ListItems;