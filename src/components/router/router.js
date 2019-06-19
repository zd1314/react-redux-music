import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from '../../page/homePage/homePage';
import Relax from '../../page/relax/relax';
import FreeDom from '../../page/freeDom/freeDom';
import Theme from '../../page/theme/theme';
export default class AppRouter extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/relax' component={Relax}></Route>
        <Route path='/freeDom' component={FreeDom}></Route>
        <Route path='/theme' component={Theme}></Route>
      </div>
    )
  }
 }