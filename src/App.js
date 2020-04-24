import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css'

import Products from './components/Products'
import About from './components/About'

import NavBar from './components/NavBar'
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Products} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
