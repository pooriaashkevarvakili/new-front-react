/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/22-11:01
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { Avatar, Button, Card, Divider } from 'antd';
import React from 'react';
import { connect, history } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import * as Feather from 'react-feather';

class AvatarDropdown extends React.Component {
  logOut = () => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({ type: 'login/logout' });
    }
  };

  items = [
    {
      url: '/under-construction',
      icon: 'UserX',
      name: 'حضوروغیاب',
      font: 'font-all',
    },
    {
      url: '/under-construction',
      icon: 'Doller',
      name: 'حقوق و دستمزد',
      font: 'font-all',
    },
    {
      url: '/under-construction',
      icon: 'Smile',
      name: 'خدمات رفاهی',
      font: 'font-all',
    },
    {
      url: '/under-construction',
      icon: 'Trading',
      name: 'ارزیابی عملکرد',
      font: 'font-all',
    },
    {
      url: '/under-construction',
      icon: 'Film',
      name: 'آموزش وتوسعه',
      font: 'font-all',
    },
    {
      url: '/under-construction',
      icon: 'Settings',
      name: 'تنظیمات',
      font: 'font-all',
    },
  ];

  icons = {
    Settings: Feather.Settings,
    UserX: Feather.UserX,
    Doller: Feather.DollarSign,
    Smile: Feather.Gift,
    Trading: Feather.TrendingUp,
    Film: Feather.Film,
  };

  renderMenuItem(item) {
    const Icon = this.icons[item.icon];
    return (
      <Button
        className="flex items-center justify-start w-full p-4"
        onClick={() => history.push(item.url)}
        type="link"
      >
        <Icon size={18} className="flex items-center justify-start ml-2" />
        <span className="flex-1 text-right"> {item.name}</span>
        <Feather.ChevronLeft size={18} />
      </Button>
    );
  }

  render() {
    const { currentUser } = this.props;
    const menuHeaderDropdown = (
      <Card style={{ minWidth: '250px' }}>
        <div className="flex items-center px-4 py-2">
          <Avatar src={currentUser.avatar} size={64} />
          <div className="mr-4">
            <h3 className="mb-0">{currentUser.name}</h3>
            <a className="font-all" href="">
              مشاهده پروفایل
            </a>
          </div>
        </div>
        <Divider className="my-1" />
        {this.items.map((item) => this.renderMenuItem(item))}
        <Divider className="my-1" />
        <div className="m-4">
          <Button danger className="flex items-center w-full py-2 " onClick={(e) => this.logOut()}>
            <div className="flex items-center justify-center w-full">
              <Feather.Power className="ml-2" />
              <span className="flex font-all">خروج</span>
            </div>
          </Button>
        </div>
      </Card>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown} user={currentUser}>
        <div className="mr-2 cursor-pointer hover:bg-gray-100 px-4">
          <Avatar size="small" className="ml-2" src={currentUser.avatar} alt="avatar" />
          <span>{currentUser.name}</span>
        </div>
      </HeaderDropdown>
    ) : (
      <span />
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
