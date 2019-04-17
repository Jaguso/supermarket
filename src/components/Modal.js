import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';


class Modal extends Component {
  render() {
    return  ReactDOM.createPortal(
      <div className="ui dinner modals visible active" id="main-div">
        <div className="ui standard modal visible active">
          <h1>this is sparta</h1>
          <p>sdoifjsodifj</p>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal;


