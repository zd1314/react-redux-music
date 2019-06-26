import React from 'react';
import Concern from '../concern/concern';
import Process from '../process/process';
import gold from './gold.png';
import AccountPage from '../accountPage/accountPage'
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _show() {
    this._detail.style.display='block'
  }
  render() {
    return (
      <div ref={ref=>this._detail=ref} style={{
        display:'none'
      }}>
        <Concern />
        <Process val={'50'}/>
        <Process url={gold} text1={'VL1'} text2={'VL2'} name={'付费音乐包：未开通'} val={'90'} />
        <AccountPage />
      </div>
    )
  }
}