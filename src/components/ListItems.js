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
    console.log("Valores: ", name, value);
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

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Supermarket List</h1>
          <p>{this.state.items.length} ITEMS</p>
        </div>
        <div className="main-content">
          {
            this.state.items.length > 0 ? 
            this.state.items.map((item, i) => (
              <div key={i} className="item">
                <p>{item}</p>
                <img src={require('../images/trash.png')} alt="delete icon"/>
              </div>
              ))
            : <h2>List is empty</h2>
              
          }

          <button onClick={this.openModal}>Add Item</button>
        </div>
        <Modal 
          isOpen={this.state.isOpen}
          onClose={() => this.setState({isOpen: false})}
          onChange={this.onChangeInput}
          itemname={this.state.itemname}
          onSubmit={this.onSubmit}
        />
      </div>

    )
  }
}

export default ListItems;