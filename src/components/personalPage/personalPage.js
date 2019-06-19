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
          <h3>丹妮儿💕</h3>
          <div className='level'></div>
        </header>
        <ModalFrame ref={ref => this._modalRef = ref} width={261} height={295} left={22} top={93}>

        </ModalFrame>
      </div>
    )
  }
}
export default PersonalPage;