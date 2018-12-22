import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {fetchData} from './redux/actions/fetchAction';
import {remindValue, clearValue} from './redux/actions/inputAction'
import {findPosts, cleanPaint} from './redux/actions/paintAction'


class App extends Component {

  componentDidMount () {
    // axios.get('http://content.guardianapis.com/search?api-key=test')
    //   .then(data => console.log(data))
    //   .catch(err=> console.log(err))
    this.props.fetch()
  }

  showPosts = (event) => {
    event.preventDefault()
    this.props.findPosts(this.props.blog, this.props.input)
    this.props.clearValue()
  }

  render() {
    return (
      <div className="App">
      {this.props.blog.length === 0 ? <div>Loading</div> :
      <div>
        <form className='form' onSubmit={this.showPosts}>
                <button className='btn' onClick={this.props.cleanPaint}>Show all posts</button>
                <input type='text' placeholder="Enter post's title" value={this.props.input} onChange={this.props.remindValue} /> 
                <button className='btn'>Get Post by title</button>
              </form>
                <div className='wrap'>
                  {this.props.paint.length === 0 ? this.props.blog.map(el => 
                    <div className='card' key={el.title}>
                        <h3>{el.title}</h3>
                        <h5>{el.userName}</h5>
                        <p>{el.body}</p>
                        <p>Comments: {el.comments}</p>
                    </div>) : 
                this.props.paint.map(el => 
                    <div className='card' key={el.title}>
                        <h3>{el.title}</h3>
                        <h5>{el.userName}</h5>
                        <p>{el.body}</p>
                        <p>Comments: {el.comments}</p>
                    </div>)
                  }
        </div>
      </div>
    
    }
     
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      blog: state.blog,
      input: state.input,
      paint: state.paint,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      fetch: function() {
        dispatch(fetchData())
      },
      remindValue: function(event) {
        dispatch(remindValue(event))
      },
      clearValue: function() {
        dispatch(clearValue())
      },
      findPosts: function(blog, text) {
        dispatch(findPosts(blog, text))
      },
      cleanPaint: function() {
        dispatch(cleanPaint())
      }
  }
}

export default connect( mapStateToProps, mapDispatchToProps) (App);

// написали простой экшн
// написали запрос
// написали reducer



// Потрібно створити блог зі списком статей. В кожній статті показується заголовок статті, текст статті, автор статті, кількість коментарів до статті.

// Над списком всіх статтей має бути інпут в який вводиться заголовок статті і нам виконується пошук по заголовку. На екрані залишається стаття яку знайшли.

// Додати кнопку яка скидає результати пошуку і на екрані знову зявляються всі статті.

// Інформацію про статті, коменти і авторів можна всяти з апішки https://jsonplaceholder.typicode.com/

// В роботі використати redux