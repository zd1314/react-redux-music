import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import  Navigation from './components/navigation/navigation';
import PersonalPage from './components/personalPage/personalPage';
import AppRouter from './components/router/router';

class App extends React.Component {
  constructor() {
    super()
    
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div style={{
            width: 1920,
          }}>
            <div className={'navigation'}>
              <PersonalPage />
              <Navigation />
            </div>
            <div className={'main'}>
              <AppRouter />
            </div>
          </div>
        </HashRouter>

      </div>
    );
  }
}


export default App;
