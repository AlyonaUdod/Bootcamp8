import React, { Component } from 'react'
import New1 from './New1/New1.jsx'
import Button from './Button/Button.jsx'
import './App.css'

class App extends Component {
  state = {
  news: [],
  pages: [],
  error: '',
  page: 1,
  }

  componentDidMount() {
    this.getFetch()
  }

  getFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setInfoToStorage(data))
    .catch(() => this.setState({ error: 'Sorry, we coudn\'t find news for you. Try later, please.'}))
  }

  setInfoToStorage = (data) => {
    let arr = data.map(el => ({...el, complete: false}))
        this.setState ({
          news: arr,
        })
    this.getCurrentPages()
   }

   getCurrentPages = () => {
    let arr = this.state.news;
    let currentPage =[];
    for ( let el of arr) {
     if (this.state.page === 1 ){
       if (arr.indexOf(el) < 10)
        currentPage.push(el)
      } else  if (this.state.page > 1){
        if (arr.indexOf(el) >= (this.state.page*10)-10 && arr.indexOf(el) < this.state.page*10) {
        currentPage.push(el)  
        }
      }} 
      this.setState ({
        pages: currentPage
      })
   }

  refresh = () => {
    this.getFetch()
  } 

  showFullInfo = (e) => {
    let id = e.target.id;
    this.setState({
      pages: this.state.pages.map(el => el.id === +id ? {...el, complete: !el.complete} : el)
    })
  }

  previousPage = () => {
    if (this.state.page > 1) {
      let pgNum = this.state.page-1;
      let arr = this.state.news;
      let currentPage =[];
      for ( let el of arr) {
      if (pgNum === 1 ){
        if (arr.indexOf(el) < 10)
          currentPage.push(el)
        } else  if (pgNum > 1){
          if (arr.indexOf(el) >= (pgNum*10)-10 && arr.indexOf(el) < pgNum*10) {
          currentPage.push(el)  
          }
        }} 
      this.setState ({
        pages: currentPage,
        page: pgNum
      })
    }
  }
  
  nextPage = () => {
    if (this.state.page < 10) {
    let pgNum = this.state.page+1
    let arr = this.state.news;
    let currentPage =[];
    for (let el of arr) {
      if (arr.indexOf(el) >= (pgNum*10)-10 && arr.indexOf(el)<pgNum*10) {
        currentPage.push(el)
      }} 
      this.setState ({
        pages: currentPage,
        page: pgNum
      })
    }
  }

  render() {
    const {news, pages, error, page} = this.state
    return (
      <div className='news'>
      <h2 className="title">The Gardian News</h2>
      <Button text="Refresh" func={this.refresh} name='refr'/>
      {error === '' ? <ul className="list"> {pages.map(el => <New1 key={el.id} id={el.id} news={el.title} body={el.body} complete = {el.complete} showFullInfo={this.showFullInfo}/>)}</ul>
       : <div className="error">{error}</div>} 

        <div className="nav">
           <Button text="< Previous page" func={this.previousPage}  page={page} name='prev'/>
          <div className="info">
            <p className="page">Page: {page} </p>
            <p className="pages"> &ensp;of {news.length/10} pages.</p>
          </div>
          <Button text="Next page >" func={this.nextPage} page={page} name='next'/>
        </div>

      </div>
    )
  }
}

export default App