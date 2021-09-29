/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { ChevronDown, Search, Sliders } from 'react-feather';
import { Dropdown, Input, Menu, Tabs } from 'antd';
import Button from 'antd/lib/button';
import UserNewMassageCard from '@/pages/job_offer_worktable/UserNewMassageCard';
import MenuTwoCardNewMassageTwo from '@/pages/job_offer_worktable/MenuTwoCardNewMassageTwo';
import UserNewMassageCardFive from '@/pages/job_offer_worktable/UserNewMassageCardFive';
import MenuTwoCardNewMassage from '@/pages/job_offer_worktable/MenuTwoCardNewMassage';
import UserNewMassageCardFour from '@/pages/job_offer_worktable/UserNewMassageCardFour';
import UserNewMassageCardSix from '@/pages/job_offer_worktable/UserNewMassageCardSix';
import UserNewMassgeCardUserClock from '@/pages/job_offer_worktable/UserNewMassgeCardUserClock';
import UserNewMassageCardThree from '@/pages/job_offer_worktable/UserNewMassageCardThree';
import UserNewMassageCardTwo from '@/pages/job_offer_worktable/UserNewMassageCardTwo';
import UserNewMassageCardOne from '@/pages/job_offer_worktable/UserNewMassageCardOne';
import React, { PureComponent } from 'react';
import MenuOneCardNewMassage from '@/pages/job_offer_worktable/MenuOneCardNewMassage';

export default class SendNewCardMassageThree extends PureComponent {
  state = {
    tabPosition: 'right',
  };
  render() {
    const { tabPosition } = this.state;
    const { TabPane } = Tabs;
    const menuone = (
      <Menu className="ml-20 menu-one mt-2 absolute left-0">
        <MenuOneCardNewMassage />
      </Menu>
    );

    return (
      /*
       تپ پین صندوق پیام
*/
      <div>
        <div className="rounded-md card-right-one bg-white mr-5 -mt-3 shadow-md ">
          <div className="flex flex-row">
            <a className="mr-5 mt-1 font-all text-black" target="_blank">
              صندوق پیام
            </a>
            <span className=" mt-1 margin-right flex ">
              <span className="flex  font-all items-center">
                <ChevronDown />
              </span>
              جدیدترین
            </span>
          </div>
          <div className="flex flex-row">
            <Input
              style={{
                width: '200%',
              }}
              type="text"
              maxLength={45}
              className="mr-3 mt-3  h-12 white-color-bg "
              placeholder="جستجوی پیام ها،مخاطبین"
              prefix={<Search />}
            />
            <Dropdown overlay={menuone} placement="bottomLeft" arrow>
              <Button className="border-none mb-5 w-40 p-1">
                <div className="flex flex-row">
                  <Sliders
                    color={'#5685ee'}
                    className="blue-color-bg p-2 bg-blue-100 mr-2 w-12	h-12 cursor-pointer mt-3"
                  />
                </div>
              </Button>
            </Dropdown>
          </div>

          <Tabs tabPosition={tabPosition}>
            <TabPane style={{}} tab={<UserNewMassageCard />} key="1">
              <MenuTwoCardNewMassageTwo />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardFive />} key="2">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardFour />} key="3">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardSix />} key="4">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassgeCardUserClock />} key="5">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardThree />} key="6">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardTwo />} key="7">
              <MenuTwoCardNewMassage />
            </TabPane>
            <TabPane style={{}} tab={<UserNewMassageCardOne />} key="8">
              <MenuTwoCardNewMassage />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
