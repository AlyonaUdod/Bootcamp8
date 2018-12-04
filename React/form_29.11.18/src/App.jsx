import React, { Component } from 'react'
import uuidv4 from 'uuid'
import trash from './trash.png'
import modal from '../src/Modal/Modal.jsx'
import './App.css'
import Modal from '../src/Modal/Modal.jsx';


export default class App extends Component {

  state = {
    text: '',
    password: '',
    tasks: [],
    showModal: false,
  }

  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    })  
  }

  createObj = (e) => {
    e.preventDefault();
    let item = {
      id: uuidv4(),
      text: this.state.text,
      complete: false,
    }
    this.setState(prev => ({
      tasks:[item,...prev.tasks],
      text: '',
    })) 
  }

  toggleComplite = (e) => {
    let id = e.target.id;
    this.setState({
      tasks: this.state.tasks.map(el => el.id === id ? {...el, complete: !el.complete} : el)
    })
  }

  deleteLi = (e) => {
    let id = e.target.dataset.id;
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !== id)
    })
  }

  toggleModal = () => {
    this.setState(prev =>({
      showModal: !prev.showModal
    }))
  }

// passwordChange = (event) => {
//   let value = event.target.value;
//   this.setState({
//     password: value,
//   }) 
// }

// контролируемый компонент. 
  render() {
    const {text, tasks, showModal} = this.state
    return (
      <div>
        {showModal && <Modal toggleModal={this.toggleModal}/>}
        {/* {showModal ? <Modal/> : null} */}
         <form className='form' onSubmit={this.createObj}> 
           <input type="text" className="text" name="text" value={text} 
            onChange={this.handlerChange}/>
           {/* <input type="password" className="text" name="password" placeholder="Password" 
            value={this.state.password} onChange={this.handlerChange}/> */}
           <input type="submit" value="Add" className='add'/>
         </form>
         <button className='add' onClick={this.toggleModal}>Show Modal</button>
         <ul className="list">
          {tasks.map(el => <li className={el.complete ? 'list__item done' : 'list__item'} key={el.id} id={el.id} onClickCapture={this.toggleComplite}>{el.text}<img src={trash} alt='trash' data-id={el.id} onClick={this.deleteLi}/></li>)}
         </ul>
      </div>
    )
  }
}
