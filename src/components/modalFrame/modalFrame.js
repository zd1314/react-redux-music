import React from 'react';
import './modalFrame.css';

class ModalFrame extends React.Component {
  constructor() {
    super();
    this.state = {
     display:'none',
      activeIndex: 0
    };
  }

  _open(text) {
    this.setState({
      display: 'block',
      title: text
    });
  }

  _close() {
    this.setState({
      display: 'none',
    });
  }

  render() {
    let me = this;



    return (
      <div className={'bgBox'} >

        <div style={{
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: me.props.width,
          height: me.props.height,
          display: this.state.display,
          background: '#fff',
          border: '1px solid #b1b4b7',
          borderRadius: 4,
          zIndex:0
        }} className="contentBox" ref='dialog'>
          <h3 ref="h3" style={{ fontSize: me.props.fz || 34 }}>{me.props.title || '请添加标签'}</h3>
          <span className="diaLogClose" onClick={() => {
            me._close();
          }}></span>
          <div style={{ position: 'relative' }}>
            {me.props.children}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const me = this;
    me.refs.h3.innerHTML = me.state.title || ''
  }
};

export default ModalFrame;
