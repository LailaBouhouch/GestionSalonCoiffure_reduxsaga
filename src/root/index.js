import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomeComponent from '../home'
import PrestationComponent from '../prestation'
import { getStore } from './store'


const store = getStore();
store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/prestations' component={PrestationComponent} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }

}

export default App;
