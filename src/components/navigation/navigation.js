import React from 'react';
import { Link } from 'react-router-dom';
const pathData = [{ name: '静听松风寒', pathUrl: '/' }, { name: '独霸玩天下', pathUrl: 'relax' }, { name: '星如星梦里', pathUrl: 'freeDom' }]
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ''
    }
  }
  _clickLi(i) {
    this.setState({
      index: i
    })
  }
  render() {
    return (
      <div style={{
        marginTop:130
      }}>
        <ul className={'nav-wrap'}>
          {
            pathData.map((s, i) => {
              return <li key={'nav' + i} onClick={this._clickLi.bind(this, i)} className={this.state.index === i ? 'active' : ''}>
                <Link to={s.pathUrl}>{s.name}</Link>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}