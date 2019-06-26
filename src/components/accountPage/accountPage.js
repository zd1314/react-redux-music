import React from 'react';
import { Link } from 'react-router-dom';
class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <ul className={'account-warp'}>
          <Link to='/personalPage'></Link><li>个人主页</li>
          <li>退出登录</li>
        </ul>
      </div>
    )
  }
}
export default AccountPage;