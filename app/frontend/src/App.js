import React, { Component } from 'react';
import { Header } from './header'
import { Route, Switch } from 'react-router'
import { Home, About, Calendar, Contact } from './views'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
