import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

  render() {

    let modal = (
      <div id="main-div">
        <div id="inner-div">
          <h2 className="modal-title">Add item</h2>
          <form onSubmit={this.props.onSubmit}>
            <input
              type="text"
              name="itemname"
              value={this.props.itemname}
              onChange={this.props.onChange}
            />
          </form>
          <div className="buttons">
            <button onClick={this.props.onClose} id="button" className="button-1">Cancel</button>
            <button onClick={this.props.onSubmit} id="button" className="button-2">Add</button>
          </div>
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


