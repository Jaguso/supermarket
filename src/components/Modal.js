import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';


class Modal extends Component {
  render() {
    return  ReactDOM.createPortal(
      <div className="ui dinner modals visible active" id="main-div">
        <div className="ui standard modal visible active" id="inner-div">
          <h2>Add item</h2>
          <input/>
          <div >
            <button>Cancel</button>
            <button>Add</button>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal;


