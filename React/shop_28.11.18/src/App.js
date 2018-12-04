
import React, { Component } from 'react'
import './App.css'
import Card from '../src/Card/Card.jsx'

export default class App extends Component {
  // constructor () {
  //   super(); // ES6 синтаксис
  //   this.state = {
  //     shoes: [{
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Hartbeespoort',
  //       desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
  //       bgt: 'FAS',
  //       productDesc: 'Hartbee',
  //       productDescSecond: 'spoort',
  //       bage: 'New',
  //       caption: 'Basket Ball Collection',
  //       sizes: [7,8,9,10,11],
  //       colors: ['orange', 'green', 'yellow'],
  //       price: '23.453',
  //   },
  //   {
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Nike Air Jordan ',
  //       desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
  //       bgt: 'NAJ',
  //       productDesc: 'Nike',
  //       productDescSecond: 'Air Jordan',
  //       bage: 'New',
  //       caption: "Men's Basketball",
  //       sizes: [6,7,8,12],
  //       colors: ['green', 'yellow'],
  //       price: '88.19',
  //   },{
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Nike Air Huarache',
  //       desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
  //       bgt: 'NAH',
  //       productDesc: 'Nike',
  //       productDescSecond: 'Air Huarache',
  //       bage: 'sale',
  //       caption: 'Unisex Running',
  //       sizes: [10,11,12,13],
  //       colors: ['orange'],
  //       price: '78.21',
  //   }]
  //   }
  // }
  state = {
    cartCounter: 0,
    cart : [],
    shoes: [{
      logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
      item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
      title: 'Hartbeespoort',
      desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
      bgt: 'FAS',
      productDesc: 'Hartbee',
      productDescSecond: 'spoort',
      bage: 'New',
      caption: 'Basket Ball Collection',
      sizes: [7,8,9,10,11],
      colors: ['orange', 'green', 'yellow'],
      price: '23.453',
      retail: {
        buy: 55.11,
        sell: 78.1,
      }
  },
  {
      logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
      item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
      title: 'Nike Air Jordan ',
      desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
      bgt: 'NAJ',
      productDesc: 'Nike',
      productDescSecond: 'Air Jordan',
      bage: 'New',
      caption: "Men's Basketball",
      sizes: [6,7,8,12],
      colors: ['green', 'yellow'],
      price: '88.19',
  },{
      logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
      item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
      title: 'Nike Air Huarache',
      desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
      bgt: 'NAH',
      productDesc: 'Nike',
      productDescSecond: 'Air Huarache',
      bage: 'sale',
      caption: 'Unisex Running',
      sizes: [10,11,12,13],
      colors: ['orange'],
      price: '78.21',
  }]
  }
  // в ES6 - надо функции привязывать в конструкторе, в ES7 - просто стрелочная функция
  increment=(evn)=> {
    let title = evn.target.dataset.title;
    let result = this.state.shoes.find(el => el.title === title)
    this.setState(prev=> ({
      cartCounter: prev.cartCounter + 1,
      cart: [...prev.cart, result]
    }))

    // this.setState({
    //   cartCounter: 5,
    // })
  }

  render() {
    const {shoes, cartCounter, totalPrice, cart} = this.state;
    // console.log(this.state.shoes);
    let sum = cart.reduce((acc, el) => acc+ +el.price, 0).toFixed(2)
    return (
      <div className='box'>
        <div>
          <div className="cart">
          {cart.map(el => <p key={el.title}><span>Name: {el.title},
            </span> Price: {el.price} usd </p>)}
          <p className="sum"> Total price: {sum} usd</p>
            {/* <p className="counter">Amount: {cartCounter}</p>
            <p className='total'>Total price: {totalPrice} usd</p>  */}
          </div>
        </div>
    
        {shoes.map(el=> <Card title={el.title} desc={el.desc} bgt={el.bgt} 
        productDesc={el.productDesc} productDescSecond={el.productDescSecond} 
        bage={el.bage} caption={el.caption} sizes={el.sizes} colors={el.colors} 
        price={el.price} retail={el.retail} increment ={this.increment}/>)}          
        {/* <button onClick={this.increment}> plus</button>    */}
      </div>

    )
  }
}


// если изменение стейта или поменялись пропсы. Только в этих двух случаях перерисовывается интерфейс
// изменения state - асинхронная операция. !
