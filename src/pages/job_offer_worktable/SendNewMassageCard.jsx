/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import MenuOneCardNewMassage from '@/pages/job_offer_worktable/MenuOneCardNewMassage';
import { Dropdown, Menu } from 'antd';
import { ChevronDown } from 'react-feather';
import Tag from './svg/tag.svg';
import { FiberManualRecord } from 'rmdi';
import AddCategories from '@/pages/job_offer_worktable/AddCategories';

import SendNewMassageCardOne from '@/pages/job_offer_worktable/SendNewMassageCardOne';
export default class SendNewMassageCard extends PureComponent {
  state = {
    tabPosition: 'right',
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };
  render() {
    const menuone = (
      <Menu className="ml-20 menu-one mt-2 absolute left-0">
        <MenuOneCardNewMassage />
      </Menu>
    );

    const menu = (
      <Menu className="menu-Category  w-56">
        <Menu.Item
          className="flex font-all"
          key="1"
          icon={<FiberManualRecord className="flex items-center text-purple-500 " />}
        >
          بیمه
        </Menu.Item>
        <Menu.Item
          className="flex font-all"
          key="2"
          icon={<FiberManualRecord className="flex items-center text-orange-500 " />}
        >
          فناوری اطلاعات
        </Menu.Item>
        <Menu.Item
          className="flex font-all"
          key="3"
          icon={<FiberManualRecord className="flex items-center text-green-500 " />}
        >
          برون سازمانی
        </Menu.Item>
        <AddCategories />
      </Menu>
    );

    return (
      /*
دراپ داون صندوق پیام
*/
      <div className="flex">
        <section className="md:w-2/3">
          <div>
            <SendNewMassageCardOne />
            <div className="flex flex-row pr-5  ">
              <img src={Tag} className="mr-1" alt="Tag" />
              <Dropdown className="-mt-2 mr-2  cursor-pointer  " overlay={menu}>
                <span className="   font-all" onClick={(e) => e.preventDefault()}>
                  دسته بندی ها
                  <span className="relative span-dropdown">
                    <ChevronDown />
                  </span>
                </span>
              </Dropdown>
            </div>
          </div>
          <section className="flex ">
            <section className="md:w-5/12 "></section>
          </section>
        </section>
      </div>
    );
  }
}
