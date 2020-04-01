import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// imports
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducer/index';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
