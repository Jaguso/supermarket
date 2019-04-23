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

  render() {

    let modal = (
      <div id="main-div">
        <div id="inner-div">
          something else
          <button onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>
    );

    if(!this.props.isOpen) {
      modal = null;
    }

    return(
      <div>
        {modal}
      </div>
    )
  }
}

export default Modal;


