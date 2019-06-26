import React from 'react';
import music from './music.png';

class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "绿钻豪华版：未开通", val: 50, text: ['LV0', 'LV1'] }
        
      ]
    }
  }
  render() {
    return (
      <div>
        <div style={{
          borderBottom: '1px solid #ededed',
          boxSizing: 'border-box',
          paddingLeft: 10,
          paddingTop: 30
        }} >

          <div style={{
            display: 'flex',
            marginBottom: 10

          }}>
            <span style={{
              width: 16,
              height: 16,
              background: `url(${this.props.url||music}) no-repeat`,
              display: 'block',
              marginLeft: 20
            }}></span>
            <div id='container' ref={ref => this.container = ref} style={{
              width: 172
            }}>
              <span ref={ref => this._circle0 = ref} style={{
                borderColor: '#f0f0f0'
              }}></span>
              <span ref={ref => this._circle1 = ref} style={{
                borderColor: '#f0f0f0'
              }} ></span>
              <div className="process-wrap" ref={ref => this._process = ref} style={{
                width: 0
              }}></div>
              <div className="waterPop">
                <i>{this.props.text1 || 'VL0'}</i>
                <i>{this.props.text2 || 'VL1'}</i>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 10, marginLeft: -77 }}>{this.props.name || '绿钻豪华版：未开通'}</div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    const me = this;
    let num = 0;
    let w = parseFloat(this.container.style.width);

    let timer = setInterval(() => {
      num += 1;
      if (num <= this.props.val) {
       
          let disx = this._process.style.width = (num / 100 * w);
          if (35 < disx && disx <= 135) {
            me._circle0.style.borderColor = '#62bf82'
          }
          else if (disx > 135) {
            me._circle1.style.borderColor = '#62bf82'
          }
          me._process.style.width = disx + 'px';
          
        } else {
          clearInterval(timer)
        }
    }, 60)
  }
  componentDidUpdate() {

  }
}
export default Process;