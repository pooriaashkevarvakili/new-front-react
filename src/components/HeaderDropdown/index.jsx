/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
-section line 23 to 24 header Dynamic
- ----------------------------------------------------------------------------------- */
import { Dropdown, Menu, Tooltip, notification } from 'antd';
import React, { Fragment } from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { CheckCircle } from 'rmdi';
import { Bell, Search, Mail, ChevronLeft, Smile } from 'react-feather';
import DropDownMassage from '@/components/HeaderDropdown/DropDownMassage';
const openNotification = () => {
  notification.open({
    description: 'درخواست شما تایید گردید',
    icon: <Smile style={{ color: '#108ee9' }} />,
  });
};
const border = {
  border: 'solid 0.5px #d9d9d9',
};
const menu = (
  <Menu
    className="bg-white"
    style={{
      width: '330.4px',
      height: '398.1px',
    }}
  >
    <div className="flex flex-row bg-black p-4">
      <span className="text-white font-all text-sm font-extrabold">آخرین اعلانات</span>
      <div className="flex flex-row absolute left-0">
        <span className="text-white font-all text-xs font-extrabold">مشاهده همه</span>
        <span className="flex items-center">
          <ChevronLeft size={15} className="text-white" />
        </span>
      </div>
    </div>
    <div className="container mt-5">
      <div></div>
      <div>
        <div>
          <img className="absolute mr-2 w-10 h-10" src="/images/image12.jpg" alt="shakiba" />
          <span className="mr-16 font-all text-gray-500 font-light text-xs">8دقیقه قبل</span>
        </div>
        <div className="mr-16  ">
          <span className="font-bold font-all text-black text-xs">علیرضا فتحی</span>
          <span className="font-all text-xs text-gray-600">،یک درخواست استخدام جدید برای</span>
        </div>
        <div className="mr-16 font-all text-xs color-gray-text-watch">
          کارشناس حسابداری ایجاد کرده است
        </div>
        <div
          onClick={openNotification}
          style={{
            padding: '7px 11.8px 7px 61px',
          }}
          className="mr-12 bg-green-100  w-9/12 rounded p-1 h-8 font-all mt-3 text-xs flex flex-row"
        >
          <span>
            <CheckCircle color={'#49ce8c'} />
          </span>
          <span className="mr-2 text-green-500">درخواست توسط شما تایید گردید</span>
        </div>
      </div>
    </div>
    <div style={border} className="mr-2 w-11/12 h-0 mt-3" />
    <DropDownMassage />
  </Menu>
);
const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
  <Fragment>
    <div className="flex items-center">
      <Tooltip title="جستجو">
        <Search className="cursor-pointer mx-2 text-gray-500" />
      </Tooltip>
      <Tooltip title="کارها">
        <Mail className="cursor-pointer mx-2 text-blue-500" />
      </Tooltip>
      <Dropdown placement="bottomRight" overlay={menu}>
        <Tooltip title="پیام ها">
          <Bell className="cursor-pointer mx-2 text-red-500" />
        </Tooltip>
      </Dropdown>
      <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
    </div>
  </Fragment>
);
export default HeaderDropdown;
