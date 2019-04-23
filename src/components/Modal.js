import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

  render() {

    let modal = (
      <div id="main-div">
        <div id="inner-div">
          <form onSubmit={this.props.onSubmit}>
            <input
              type="text"
              name="itemname"
              value={this.props.itemname}
              onChange={this.props.onChange}
            />
          </form>
          <button onClick={this.props.onClose}>Cancel</button>
          <button onClick={this.props.onSubmit}>Add</button>
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


