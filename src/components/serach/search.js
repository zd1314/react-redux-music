import React from 'react';
import './search.css';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div className='search-wrap'>
      <div className='search-box'>
        <div className='tab-wrap'>
          <span className="left"></span >
          <span className="right"></span >
        </div>
        <div className='search-item'>
          <input  placeholder='搜索' />
        </div>
      </div>

    </div>
  }
}