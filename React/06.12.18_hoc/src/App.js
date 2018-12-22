import React, { Component } from 'react'

import Reg from './Registration/Reg.jsx'
import Order from './Order/Order.jsx';
import Container from './Container/Container.jsx';
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      registration: false,
      order: false,
    }
    this.showModal = this.showModal.bind(this)

    // обязательно bind привязывать обычные функции, стрелочные нельзя
  }
  // === in ES7 state = {}.
  showModal(event) {
    let id = event.target.id
    this.setState(prev => ({
      [id]: !prev[id]
    }))
  }

  render() {
    return (
      <div>
        <button className="btn" id='registration' onClick={this.showModal}> Registration</button>
        <button className="btn" id='order' onClick={this.showModal}> Order</button>
        {this.state.registration && <Reg order={this.showModal} id='registration'/>}
        {this.state.order && <Order order={this.showModal} id='order'/>}
      </div>

      // <Container>
      //   <h2>sjfsjf</h2>
      //   <p> oskfspokfsf</p>
      // </Container>
    )
  }
}


// Flip Move - hoc менюшка красиво вылазит
