import React, { Component } from 'react';
import './ListItems.css';

import Modal from './Modal';

class ListItems extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      itemname: "",
      items: []
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.itemname.length > 0) {
      this.setState({
        isOpen: false,
        itemname: "",
        items: this.state.items.concat([this.state.itemname])
      });
    } else {
      alert('No item added');
    }
  }

  removeItem = (index) => {
    const items = Object.assign([], this.state.items);
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Supermarket List</h1>
          <p className="count">{this.state.items.length} ITEMS</p>
        </div>
        <div className="main-content">
          {
            this.state.items.length > 0 ? 
            this.state.items.map((item, i) => (
              <div key={i} className="item">
                <p className="item-text">{item}</p>
                <img 
                  src={require('../images/trash.png')} 
                  alt="delete icon"
                  onClick={this.removeItem.bind(this, i)}
                  />
              </div>
              ))
            : <h2 className="empty-case">List is empty</h2>
              
          }

          <button onClick={this.openModal} className="add-button">Add Item</button>
        </div>
        <Modal 
          isOpen={this.state.isOpen}
          onClose={() => this.setState({isOpen: false, itemname: ''})}
          onChange={this.onChangeInput}
          itemname={this.state.itemname}
          onSubmit={this.onSubmit}
        />
      </div>

    )
  }
}

export default ListItems;