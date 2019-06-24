import React from 'react';
class Concern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: '歌单', value: 3 },
        { name: '关注', value: 0 },
        { name: '粉丝', value: 1 }
      ]
    }
  }
  _addList() {
    return this.state.data.map((s, i) => {
      return <li key={'s' + i}>
        <span className='name'>{s.value}</span><br />
        <span className='value'>{s.name}</span>
      </li>
    })
  }
  render() {
    return <div>
      <div className={'concern'}>
        <ul>
          {this._addList()}
        </ul>
      </div>
    </div>
  }
}
export default Concern;