/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { Fragment, PureComponent } from 'react';
import { Modal, Button, Tabs, Timeline } from 'antd';
import { Refresh } from 'rmdi';
import { Circle, Plus } from 'react-feather';
import ModalApplicant from './ModalApplicant';
import TapPaneFourRecentActives from '@/pages/job_offer_employment/employment/TapPaneFourRecentActives';
export default class TabPaneFour extends PureComponent {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const borderTwo = {
      width: '590px',
      height: '181px',

      borderRadius: ' 5px',
      boxShadow: ' 0 3px 5px 0 rgba(0, 0, 0, 0.02)',
    };
    const borderOne = {
      fontSize: '10px',

      height: '22px',

      borderRadius: '5px',
    };
    const { TabPane } = Tabs;
    const reply = {
      marginRight: '22.5rem',
    };
    const { visible, loading } = this.state;
    return (
      /*
تپ پین چهارم
*/
      <Fragment>
        <Button
          onClick={this.showModal}
          className="w-full font-all flex p-5 items-center justify-center mt-4 text-red-500 "
          icon={<Plus />}
        >
          ثبت ارزیابی مدیر مستقیم
        </Button>

        <Modal
          width={1048}
          height={230}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <ModalApplicant />
          <Tabs defaultActiveKey="1">
            <TabPane className="font-all" tab=      {
              <span className="tappane-title">
                ارزیابی
                </span>
            } key="1">
              <div className="flex">
                <div></div>
                <section className="md:w-2/3">
                  <section className="flex items-center justify-center ">
                    <section className="md:w-full">
                      <div className="container object-contain bg-white" style={borderTwo}>
                        <div></div>
                        <div>
                          <div>
                            <img
                              className="absolute object-contain w-16 h-12"
                              src="/images/image12.jpg"
                              alt="shakiba"
                            />
                            <div className="flex flex-row">
                              <span className="mr-16 font-all text-xs text-gray-600">
                                10:45-9خرداد98
                              </span>
                              <div className="flex ">
                                <section className="md:w-1/3   flex flex-1 " style={reply}>
                                  <div className="flex  flex-row">
                                    <span className="text-blue-500 cursor-pointer">
                                      <Refresh className="text-blue-500" size={15} />
                                    </span>
                                    <span className="font-all text-xs text-blue-500 cursor-pointer" >
                                      {' '}
                                      تجدید نظر
                                    </span>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div className="mr-16 font-all text-xs color-gray-text-watch">
                              رد شده توسط حسین کلایی
                            </div>
                          </div>

                          <div
                            style={borderOne}
                            className="mr-12  mt-2 px-2 w-24 bg-gray-200   font-all text-xs color-gray-text-watch"
                          >
                            مدیر حسابداری
                          </div>
                        </div>
                      </div>
                    </section>
                  </section>
                </section>
                <TapPaneFourRecentActives />
              </div>
            </TabPane>
          </Tabs>
        </Modal>
      </Fragment>
    );
  }
}
