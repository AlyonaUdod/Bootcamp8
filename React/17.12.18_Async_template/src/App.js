import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {fetchData} from './redux/actions/fetchAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.fetch}> fecth</button>
      </div>
    );
  }
}

// function mapStateToProps (state) {
//   return {
//       gallery: state.gallery,
//   }
// }

function mapDispatchToProps (dispatch) {
  return {
      fetch: function() {
        dispatch(fetchData())
      }
  }
}

export default connect(null, mapDispatchToProps) (App);

// написали простой экшн
// написали запрос
// написали reducer