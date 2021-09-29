/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import Inbox from '@/pages/job_offer_worktable/svg/inbox.svg';
import Send from '@/pages/job_offer_worktable/svg/send.svg';
import Group from '@/pages/job_offer_worktable/svg/Group.svg';
import Star from '@/pages/job_offer_worktable/svg/star.svg';
import Box from '@/pages/job_offer_worktable/svg/box.svg';
import LetterStar from './LetterStar';
import SendsNewMassageCardDeleteTwo from './SendsNewMassageCardDeleteTwo';
import LetterStarThree from './LetterStarThree';
import SendsNewMassageCard from './SendsNewMassageCard';
import SendsNewMassageCardOne from './SendsNewMassageCardOne';
import SendsNewMassageCardOneDelete from './SendsNewMassageCardDelete';
import SendsNewMassageCardTwo from './SendsNewMassageCardTwo';
import SendsNewMassageCardThree from './SendsNewMassageCardThree';
import Delete from '@/pages/job_offer_worktable/svg/delete .svg';
import React, { PureComponent } from 'react';
import { Dropdown, Input, Menu, Tabs } from 'antd';
import SendNewCardMassageThree from '@/pages/job_offer_worktable/SendNewCardMassageThree';
import { ChevronDown, Search, Sliders } from 'react-feather';
import Button from 'antd/lib/button';
import MenuOneCardNewMassage from '@/pages/job_offer_worktable/MenuOneCardNewMassage';
import MenuTwoCardNewMassage from '@/pages/job_offer_worktable/MenuTwoCardNewMassage';
import MenuTwoCardNewMassageTwo from '@/pages/job_offer_worktable/MenuTwoCardNewMassageTwo';
import AvatarDraftPage from '@/pages/job_offer_worktable/AvatarDraftPage';
import AvatarDraftPageOne from '@/pages/job_offer_worktable/AvatarDraftPageOne';
import LetterStarOne from '@/pages/job_offer_worktable/LetterStarOne';
import LetterStarTwo from '@/pages/job_offer_worktable/LetterStarTwo';
import SendsNewMassageCardDeleteOne from '@/pages/job_offer_worktable/SendsNewMassageCardDeleteOne';
import SendsNewMassageCardDeleteThree from '@/pages/job_offer_worktable/SendsNewMassageCardDeleteThree';
const { TabPane } = Tabs;
export default class SendNewMassageCardOne extends PureComponent {
  state = {
    tabPosition: 'left',
  };

  render() {
    const menuone = (
      <Menu className="ml-20 menu-one mt-2 absolute left-0">
        <MenuOneCardNewMassage />
      </Menu>
    );
    const { tabPosition } = this.state;
    return (
      /*
دراپ داون صندوق پیام
کلی
*/
      <div>
        <div className="flex">
          <section className="md:w-full-two">
            <Tabs tabPosition={tabPosition}>
              <TabPane
                tab={
                  <div style={{
                    border:"none"
                  }} className="flex border-menu 	 flex-row  mt-6 ">
                    <img src={Inbox} className="-mr-5" alt="send" />
                    <span className="   font-all mr-3 font-bold	text-sm	 cursor-pointer">
                      صندوق پیام
                    </span>
                  </div>
                }
                key="1"
              >
                <div className="right-six">
                  <SendNewCardMassageThree />
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="flex w-56 	 flex-row   mr-1">
                    <img className="-mr-5" src={Send} alt="send" />
                    <span className="pr-2  font-all font-bold	text-sm	 cursor-pointer">
                      ارسال شده
                    </span>
                  </div>
                }
                key="2"
              >
                <div className="right-three">
                  <div className="flex flex-row">
                    <span className="mr-5 mt-1 font-all" target="_blank">
                      صندوق پیام
                    </span>
                    <span className=" mt-1 margin-right  flex ">
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
                    <TabPane style={{}} tab={<SendsNewMassageCard />} key="1">
                      <MenuTwoCardNewMassageTwo />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardOne />} key="2">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardTwo />} key="3">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardThree />} key="4">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="flex flex-row  mr-1">
                    <img className="-mr-5" src={Group} alt="group" />
                    <span className="pr-2 font-all font-bold 	text-sm	cursor-pointer">پیش نویس</span>
                  </div>
                }
                key="3"
              >
                <div className="right-three">
                  <div className="flex flex-row">
                    <a className="mr-5 mt-1 font-all" target="_blank">
                      صندوق پیام
                    </a>
                    <span className=" mt-1 margin-right  flex ">
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
                    <TabPane style={{}} tab={<AvatarDraftPage />} key="1">
                      <MenuTwoCardNewMassageTwo />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardOne />} key="2">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<AvatarDraftPageOne />} key="3">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardThree />} key="4">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="flex flex-row  mr-1">
                    <img className="-mr-5" src={Star} alt="star" />
                    <span className="font-all  font-bold	text-sm mr-2	cursor-pointer ">
                      پیام های منتخب
                    </span>
                  </div>
                }
                key="4"
              >
                <div className="right-three">
                  <div className="flex flex-row">
                    <a className="mr-5 mt-1 font-all" target="_blank">
                      صندوق پیام
                    </a>
                    <span className=" mt-1 margin-right  flex ">
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
                    <TabPane style={{}} tab={<LetterStar />} key="1">
                      <MenuTwoCardNewMassageTwo />
                    </TabPane>
                    <TabPane style={{}} tab={<LetterStarOne />} key="2">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<LetterStarTwo />} key="3">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<LetterStarThree />} key="4">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="flex flex-row  mr-1">
                    <img className="-mr-5" src={Box} alt="box" />
                    <span className="pr-2 font-all font-bold 	text-sm cursor-pointer">آرشیو</span>
                  </div>
                }
                key="5"
              >
                <div className="right-three">
                  <div className="flex flex-row">
                    <span className="mr-5 mt-1 font-all" target="_blank">
                      صندوق پیام
                    </span>
                    <span className=" mt-1 margin-right  flex ">
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
                    <TabPane style={{}} tab={<SendsNewMassageCard />} key="1">
                      <MenuTwoCardNewMassageTwo />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardOne />} key="2">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardTwo />} key="3">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardThree />} key="4">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="flex flex-row  mr-1">
                    <img className="-mr-5" src={Delete} alt="delete" />
                    <span className="pr-2 font-all font-bold not-italic	text-sm	 cursor-pointer">
                      حذف شده
                    </span>
                  </div>
                }
                key="6"
              >
                <div className="right-three">
                  <div className="flex flex-row">
                    <span className="mr-5 mt-1 font-all" target="_blank">
                      صندوق پیام
                    </span>
                    <span className=" mt-1 margin-right  flex ">
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
                    <TabPane style={{}} tab={<SendsNewMassageCardOneDelete />} key="1">
                      <MenuTwoCardNewMassageTwo />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardDeleteOne />} key="2">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardDeleteTwo />} key="3">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                    <TabPane style={{}} tab={<SendsNewMassageCardDeleteThree />} key="4">
                      <MenuTwoCardNewMassage />
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>
            </Tabs>
          </section>
        </div>
      </div>
    );
  }
}
