import React from 'react';

import ModalFrame from '../modalFrame/modalFrame';
import { Link } from 'react-router-dom';
class PersonalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  _show() {
    this._modalRef._open()
  }
  _hide() {
    console.log(88)
    this._modalRef._close();
  }

  render() {
    return (
      <div>
        <header className={'header-user'}>
          <Link to='/theme'>
            <span style={{
              cursor: 'pointer'
            }} onMouseOver={this._show.bind(this)} onMouseOut={this._hide.bind(this)} >

            </span>
          </Link>
          <div className='ueserName'>
            <h3>丹妮儿💕</h3>
            <div className='level'></div>
          </div>
        
        </header>
        <ModalFrame ref={ref => this._modalRef = ref} width={261} height={295} left={18} top={100}>

        </ModalFrame>
      </div>
    )
  }
}
export default PersonalPage;