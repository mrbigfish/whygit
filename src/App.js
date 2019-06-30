import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Button from './containers/Button';
import NewsItem from './NewsItem'
import Loading from './containers/Loading'


/**
 * 
 *       import React from 'react';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'
let App = () => (
 */

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
    <div>
     <Button />
     <Loading />
     <NewsItem />
  </div>
);
export default App;
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);


// <img src={logo} className="App-logo" alt="logo" />
