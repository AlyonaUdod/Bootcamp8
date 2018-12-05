import React, { Component } from 'react'
import Button from './Button/Button'
import Card from './Card/Card'
import style from './App.css'

export default class App extends Component {
    state = {
        cards: [],
        templ: [],
        err: "",
        tempNum: 0,
    }

    componentDidMount() {
        this.getInfoFromServer()        
        this.getTemplFromServer()
    }

    getInfoFromServer = () => {
        fetch('http://demo4452328.mockable.io/properties')
        .then(res => res.json())
        .then(data => this.pushInfoToState (data))
        .catch(err => this.setState({err: err}))
    }

    getTemplFromServer = () => {
        fetch('http://demo4452328.mockable.io/templates')
        .then(res => res.json())
        .then(data => this.pushTemplToState(data))
        .catch(err => this.setState({err: err}))
    }

    pushInfoToState = (data) => {
        this.setState({
            cards: data.data,
        })
    }

    pushTemplToState = (data) => {
        this.setState({
            templ: data,
        })  
    }

    temp1 = () => {
        this.setState({
            tempNum: 0,
        })
    }

    temp2 = () => {
        this.setState({
            tempNum: 1,
        })
    }

    temp3 = () => {
        this.setState ({
            tempNum: 2
          })
    }

    // recurs = (el, status, adress, area, images, price, id) => {
      
    //     return el.component === 'IMAGE' ? <Img key={id+images} src={images} status={status} pr={el.hasOwnProperty('children') ? this.recurs(el.children[0], el, true) : null}/> : el.component === 'ADDRESS' ? <Adress key={id+adress} adress={adress} status={status}/> : el.component === 'PRICE' ? <Price price ={price} key={id+price} status={status}/> : el.component === 'AREA' ? <Area area={area} key={id+area} status={status}/> : null
    // }

  render() {
      const {cards, templ, tempNum} = this.state

    return (
      <div className={style.wrap}>
      <div className={style.cont}>
        <Button text="Template 1" func={this.temp1}/>
        <Button text="Template 2" func={this.temp2}/>
        <Button text="Template 3" func={this.temp3}/>  
      </div>

        {cards.map(el => <Card key={el.id} id={el.id} adress={el.full_address} images={el.images[0]} area={el.area} price={el.price} templ={templ} tempNum={tempNum} recurs={this.recurs}/>)}

      </div>
    )
  }
}
