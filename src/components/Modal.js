import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Modal extends Component {
  render() {
    return  ReactDOM.createPortal(
      <div className="ui dinner modals visible active">
        <div className="ui standard modal visible active">
          sidjf
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal;


