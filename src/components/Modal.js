import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';


class Modal extends Component {

  constructor() {
    super();
    this.state = {
      itemname: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target

    console.log("Valores: ", name, value);
    this.setState({[name]: value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('item ', this.state.itemname);
  }

  render() {
    return  ReactDOM.createPortal(
      <div className="ui dinner modals visible active" id="main-div">
        <div className="ui standard modal visible active" id="inner-div">
          <h2 className="modal-title">Add items</h2>
          <form onSubmit={this.onSubmit}>
            <input 
              className="input" 
              type="text" 
              name="itemname" 
              value={this.state.itemname} 
              onChange={this.onChangeInput} 
            />
            <div className="buttons">
              <button id="button" className="button-1"><a href="/">Cancel</a></button>
              <button id="button" className="button-2" type="submit"><a href="/">Add</a></button>
            </div>
          </form>
            
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal;


