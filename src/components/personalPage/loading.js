import React from 'react';
import Load from './loading.gif';
import Detail from './detail';
export default class Loading extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }
  render() {
    return (
      <div   style={{
        width: 261,
        height: 295,
        position: 'absolute',

      }}>
       
        <span ref={ref => this._load = ref} style={{
          width: 16,
          height: 16,
          background: `url(${Load}) no-repeat`,
          display: 'block',
          margin: '140px auto',
          backgroundSize: '100% 100%',
          position: 'absolute',
          left:120
        }}></span>
        <Detail ref={ref=>this.detail=ref}/>
      </div>
    )
  }
  componentDidMount() {
      setTimeout(() => {
        this.detail._show()
      }, 2000)
    window.onload = (() => {
      this._load.style.display = 'block';
    })
    setTimeout(() => {
      this._load.style.display = 'none';
    },2000)
  }
}