import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import {
  Button,
  InlineForm,
  Footer,
  NavItem,
  Overlay,
  Space,
  Text,
  Toolbar
} from 'rebass'
import Todo from './Todo'

import Home from './Home'
import NewEntry from './NewEntry'

import theme from './theme'

class App extends Component {
  state = {
    modal: false
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }

  render () {
    return <Router>
      <div className='App'>
        <Toolbar>
          <NavItem is={Link} to='/showpage'>The Jabberdexicon</NavItem>
          <Space auto />
          <NavItem>
            <InlineForm
              backgroundColor='white'
              buttonLabel='Go'
              label='InlineForm'
              name='inline_form'
              onChange={function noRefCheck () {}}
              onClick={function noRefCheck () {}}
            />
          </NavItem>
        </Toolbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/browse/a'>
            {/* <Todo />
          </Route>
          <Route path='/entry/:slug'>
            <Todo /> */}
          </Route>
        </Switch>
        <Todo />
        <Footer m={1}>
          <Text>Built with &hearts; at The Iron Yard in Saint Petersburg, FL.</Text>
          <Space auto />
          <Button onClick={this._toggle}>Add new Entry</Button>
        </Footer>
        <Overlay open={this.state.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
