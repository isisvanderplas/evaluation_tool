import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
