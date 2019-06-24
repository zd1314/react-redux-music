import React from 'react';
import './search.css';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ind:0
    }
  }
  _changes(e) {
    console.log(e.target.value)
  }
  _focus() {
    this._searchBox.style.marginLeft = 25 + 'px'
  }
  _blur(e) {
    e.target.value = ''
    this._searchBox.style.marginLeft = 100 + 'px'
  }
  _left() {
    this.leftRef.className = 'activeLeft';
    this.rightRef.className = 'activeRight'
  }
  _right() {
    this.rightRef.className = 'right'
   
  }
  render() {
    return <div className='search-wrap'>
      <div className='search-box'>
        <div className='tab-wrap'>
          <span  className="left " ref={ref => this.leftRef = ref} onClick={this._left.bind(this)}></span >
          <span className="right" ref={ref=>this.rightRef=ref} onClick={this._right.bind(this)}></span >
        </div>
        <div className='search-item'>
          <div className='search-item-box' ref={ref => this._searchBox = ref} style={{
            marginLeft: 100
          }}>
            <span className='search'></span>
            <input placeholder='搜索' onChange={this._changes.bind(this)} onFocus={this._focus.bind(this)} onBlur={this._blur.bind(this)} />
          </div>
        </div>
      </div>

    </div>
  }
  componentDidMount() {

  }
}