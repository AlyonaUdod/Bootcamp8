import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'
import {remindValue, removeValue} from './redux/actions/textAction'
import {createObj, toggleComplite, deleteObj} from './redux/actions/taskActions'
import {filterComplete, filterNonComplete, cleanPaint} from './redux/actions/paintAction.js'
import trash from './trash.png'




class App extends Component {

  submit = (event) => {
    event.preventDefault();
    this.props.createObj(this.props.text);
    this.props.removeValue()
  }

  findComplete = () => {
    this.props.filterComplete(this.props.tasks)
  }

  findNonComplete = () => {
    this.props.filterNonComplete(this.props.tasks)
  }


  render() {
    return (
      <div>
         <form className='form' onSubmit={this.submit}> 
           <input type="text" className="text" name="text" value={this.props.text} onChange={this.props.remindValue}/>
           <input type="submit" value="Add" className='add'/>
         </form>

         <div className="btns">
            <p className="btn" onClick={this.props.cleanPaint}>All</p>
            <p className="btn" onClick={this.findComplete}>Completed</p>
            <p className="btn" onClick={this.findNonComplete}>Non completed</p>
         </div>

         <ul className="list">
         {this.props.paint.length === 0 ?

          this.props.tasks.map(el => <li className={el.complete ? 'list__item done' : 'list__item'} key={el.id} id={el.id} onClick={this.props.toggleComplite}>{el.text}<img src={trash} alt='trash' data-id={el.id} onClick={this.props.deleteObj}/></li>) :
          
          this.props.paint.map(el => <li className={el.complete ? 'list__item done' : 'list__item'} key={el.id} id={el.id} onClick={this.props.toggleComplite}>{el.text}<img src={trash} alt='trash' data-id={el.id} onClick={this.props.deleteObj}/></li>)   
        }
         </ul>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
      text: state.text,
      tasks: state.tasks,
      paint: state.paint,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      remindValue: function (event) {
          dispatch(remindValue(event))
      },
      removeValue: function () {
          dispatch(removeValue())
      },
      createObj: function (text) {
        dispatch(createObj(text))
      },
      deleteObj: function (event) {
        dispatch(deleteObj(event))
      },
      toggleComplite: function(event) {
        dispatch(toggleComplite(event))
      },
      filterComplete: function(tasks) {
        dispatch(filterComplete(tasks))
      },
      filterNonComplete: function(tasks) {
        dispatch(filterNonComplete(tasks))
      },
      cleanPaint: function() {
        dispatch(cleanPaint())
      }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 