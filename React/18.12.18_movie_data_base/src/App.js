import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { fetchData, postData, deleteData } from './redux/actions/fetchAction';
import { filteredByYears, filteredByName, filteredByBudget, clear } from './redux/actions/filterAction';
import Cards from './Card/Card'
import Form from './Form/Form'
import { reset } from 'redux-form';
import { Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Modal } from 'semantic-ui-react'


class App extends Component {

  state = { 
    modalOpen: false 
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount () {
    this.props.fetch()
  }

  submit = values => {
    let obj = {
      title: values.title,
      actors: values.actors.split(','),
      budget: values.budget,
      description: values.description,
      genres: values.genres.split(','),
      year: values.year,
    }
    this.props.post(obj)
    this.props.resetForm()
    this.handleClose()
  }

  delete = (e) => {
    let id =e.target.dataset.id
    console.log(e.target.dataset.id)
    this.props.delete(id)
  }

  filterByYear = () => {
    this.props.byYear(this.props.films)
  }

  filterByBudg = () => {
    this.props.byBudget(this.props.films)
  }

  filterByNames = () => {
    this.props.byName(this.props.films)
  }

  render() {
    console.log(this.props.filteredArr)
    return (
      <div className="App">
      {this.props.films.length === 0 ? <div>Loading</div> :

      <div className='wrapper'>
        <div className='form-wrap'>
          <Button.Group>
            <Button onClick={this.filterByYear}>By Year</Button>
            <Button.Or />
            <Button onClick={this.filterByBudg}>By Budget</Button>
            <Button.Or />
            <Button onClick={this.filterByNames}>By Name</Button>
            <Button negative onClick={this.props.clear}>Reset</Button>
          </Button.Group>
  
          <Form onSubmit={this.submit} modalOpen={this.state.modalOpen} handleOpen={this.handleOpen}/>
        </div>

        <div className='wrap'>
          <Card.Group className='group'>
            {this.props.filteredArr.length === 0 ?  

            this.props.films.map(el => <Cards key={el.id} id={el.id} title={el.title} actors={el.actors} budget={el.budget} description={el.description} genres={el.genres} year={el.year} func={this.delete}/>)
            :
            this.props.filteredArr.map(el => <Cards key={el.id} id={el.id} title={el.title} actors={el.actors} budget={el.budget} description={el.description} genres={el.genres} year={el.year} func={this.delete}/>)
            }
          </Card.Group>
        </div>
      </div>
    }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      films: state.films,
      filteredArr: state.filteredArr,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      fetch: function() {
        dispatch(fetchData())
      },
      post: function(obj) {
        dispatch(postData(obj))
      },
      resetForm: function() {
        dispatch(reset('films'))  // requires form name
      },
      delete: function(id) {
        dispatch(deleteData(id))
      },
      byName: function(data) {
        dispatch(filteredByName(data))
      },
      byYear: function(data) {
        dispatch(filteredByYears(data))
      },
      byBudget: function(data) {
        dispatch(filteredByBudget(data))
      },
      clear: function() {
        dispatch(clear)
      },
      // close:function() {
      //   dispatch(this.close())
      // }
  }
}

export default connect( mapStateToProps, mapDispatchToProps) (App);
