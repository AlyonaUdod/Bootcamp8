import React, { Component } from 'react'
import uuidv4 from'uuid'
import SmallCard from './SmallCard/SmallCard.jsx'
import Button from './Button/Button.jsx'
import Modal from './Modal/Modal.jsx'
import './App.css'

export default class App extends Component {
  state = {
    cards: JSON.parse(localStorage.getItem('arrCards')) || [],
    showModal: false,
    showCard: false,
    name: '',
    surname: '',
    tel: '',
    email: '',
    birth: '',
    id: '',
  }

  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    })  
  }

  createObj = () => {
    let item = {
      id: uuidv4(),
      name: this.state.name,
      surname: this.state.surname,
      tel: this.state.tel,
      email: this.state.email,
      birth: this.state.birth,
      complete: false,
    }

    let result = JSON.parse(localStorage.getItem('arrCards')) || [];
    result.push(item)
    localStorage.setItem('arrCards', JSON.stringify(result))

    
    this.setState(prev => ({
      cards:[item,...prev.cards],
      name: '',
      surname: '',
      tel: '',
      email: '',
      birth: '',
    })) 
  }

  toggleModal = () => {
    this.setState(prev =>({
      showModal: !prev.showModal
    }))
  }

  edit = (e) => {
    this.toggleModal()
    this.changeCard(e)
  } 

  toggleCard = () => {
    this.setState(prev =>({
      showCard: !prev.showCard
    }))
  }

  addCard = (e) => {
    e.preventDefault()
    if(!this.state.showCard) {
      this.createObj()
    } else {
      
    let result = JSON.parse(localStorage.getItem('arrCards'));
    let newArr = result.map(el => el.id === this.state.id ? {...el, name: this.state.name,
      surname: this.state.surname,
      tel:this.state.tel,
      email:this.state.email,
      birth:this.state.birth} : el);
    localStorage.setItem('arrCards', JSON.stringify(newArr))

      this.setState({
        cards: this.state.cards.map(el => el.id === this.state.id ? {...el, name: this.state.name,
          surname: this.state.surname,
          tel:this.state.tel,
          email:this.state.email,
          birth:this.state.birth} : el),
          name: '',
          surname: '',
          tel: '',
          email: '',
          birth: '', 
          showCard: false, 
      })
      
    }
    this.toggleModal()
  }

  deleteCard = (e) => {
    let id = e.target.id;
    
    let result = JSON.parse(localStorage.getItem('arrCards'));
    let newArr = result.filter(el => el.id !== id)
    localStorage.setItem('arrCards', JSON.stringify(newArr))

    this.setState({
      cards: this.state.cards.filter(el => el.id !== id)
    })
  }

  changeCard = (e) => {   
    e.preventDefault()
    let id = e.target.id;
    let obj = this.state.cards.filter(el => el.id === id)
    this.setState({
      id: id,
      name: obj[0].name,
      surname: obj[0].surname,
      tel: obj[0].tel,
      email: obj[0].email,
      birth: obj[0].birth,
    })
    this.toggleCard()
  }


  render() {
    const { cards, name, surname, tel, email, birth, showModal, showCard} = this.state
    return (
      <div>
        {showModal && <Modal name={name} surname={surname} tel={tel} email={email} birth={birth}  showModal={showModal} showCard={showCard} handlerChange={this.handlerChange} addCard={this.addCard} toggleModal={this.toggleModal} changeCard={this.changeCard}/>}

          <div className="wrap">
          <Button func={this.toggleModal} text={'Add Contact'}/>
    
            <div className="addContact">
            {cards.map(el => <SmallCard key={el.id} id={el.id} name={el.name} surname={el.surname} tel={el.tel} email={el.email} deleteCard={this.deleteCard} edit={this.edit}/>)}
            </div>

          </div>
      </div>
    )
  }
}
