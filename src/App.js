import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import Services from './Services'
import Campaign from './Campaign'
import Contacts from './Contacts'
import Admin from './Admin'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={ Home } />
          <Route exact path='/sobre' component={ Sobre } />
          <Route exact path='/servicos' component={ Services } />
          <Route exact path='/campanhas' component={ Campaign } />
          <Route exact path='/contatos' component={ Contacts } />
          <Route exact path='/admin' component={ Admin } />
          <Route exact path='/login' component={ Login } />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
