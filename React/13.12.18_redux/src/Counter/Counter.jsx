import React, { Component } from 'react'
import {connect} from 'react-redux'
import {plus, minus, reset} from '../redux/action/counterAction'
import './Counter.css'

class Counter extends Component {
    // state = {
    //     count: 0,
    // }

    // increment = () => {
    //     this.setState(prev=>({
    //         count: prev.count + 1,
    //     }))
    // }

    // decrement = () => {
    //     this.setState(prev=>({
    //         count: prev.count - 1,
    //     }))
    // }

    // reset = () => {
    //     this.setState({
    //         count: 0,
    //     })
    // }
numberUp = () => {
    this.props.plus(5)
}
  render() {
    //   console.log(this.props)
    return (
      <div className='container'>
        <p className='count'>{this.props.count}</p>
        <div className="button">
            <button className='btn' onClick={() => this.props.minus(3)}>-</button>
            <button className='btn' onClick={this.props.reset}>reset</button>
            <button className='btn' onClick={this.numberUp}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        count: state.count,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        plus: function (number) {
            dispatch(plus(number))
        },
        minus: function (number) {
            dispatch(minus(number))
        },
        reset: function () {
            dispatch(reset)
        },

        }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter); 

// Store - большой общий стейт
// Reducer - функция, которая создает поле в стейте и объединяет в себе все функции, которые производят манипуляции с этим полем 
// Action - комнады, с помощью которых будут запускать функции из reduser 