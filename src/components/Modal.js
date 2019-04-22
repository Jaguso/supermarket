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


  render() {
    return(
      <div>
        something
      </div>
    )
  }
}

export default Modal;


