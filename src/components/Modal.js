import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';


class Modal extends Component {
  render() {
    return  ReactDOM.createPortal(
      <div className="ui dinner modals visible active" id="main-div">
        <div className="ui standard modal visible active" id="inner-div">
          <h2 className="modal-title">Add item</h2>
          <input className="input" />
          <div className="buttons">
            <button id="button" className="button-1">Cancel</button>
            <button id="button" className="button-2">Add</button>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal;


