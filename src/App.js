import React, { Component } from 'react';
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}


const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App
