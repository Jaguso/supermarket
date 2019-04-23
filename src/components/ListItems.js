import React, { Component } from 'react';
import './ListItems.css';

import Modal from './Modal';

class ListItems extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      items: ['item1', 'item2']
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
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
        <button onClick={this.openModal}>Add Item</button>
        <Modal 
          isOpen={this.state.isOpen}
          onClose={() => this.setState({isOpen: false})}
        />
      </div>

    )
  }
}

export default ListItems;