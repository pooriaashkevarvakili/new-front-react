/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/04-11:36
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Button, Drawer,  Tabs } from 'antd';
import {  Plus, UserPlus } from 'react-feather';
import Back from "./images/back.svg"
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import Addindividual from '@/pages/job_offer_employment/employment/Addindividual';
import AddGroups from '@/pages/job_offer_employment/employment/AddGroups';
export default class AddApplicants extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  state = {
    visible: false,
    placement: 'left',
    key: 'tab1',
    noTitleKey: 'app',
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { TabPane } = Tabs;
    return (
      /*
      افزودن متقاضی و تب پین ها
    */
      <Fragment>
        <Button
          onClick={this.showDrawer}
          className="flex font-bold items-center  text-xs p-5 text-white "
          type="primary">
          <div className="flex flex-row">
            <span className="-mr-2">
              {' '}
              <UserPlus />
            </span>
            <span className="mt-1 font-all text-sm mr-2">افزودن متقاضی</span>
          </div>
        </Button>
        <Drawer
          className="font-all"
          placement={this.state.placement}
          title="افزودن متقاضی"
          width={675}
          height={88}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane  tab={
              <span className="tappane-title font-all text-sm">
                افزودن فردی
                </span>
            } key="1">
              <div>
                   <Addindividual/>
                            <div className="flex flex-wrap  ">
                              <Button
                                htmlType="submit"
                                className=" pr-2 pl-2 p-2  md:w-1/3 mt-24"
                                type="primary">
                                <div className="flex flex-row">
                                  <span><Plus className="text-white "/></span>
                                  <span className="text-white font-all text-sm mr-2">ثبت اطلاعات متقاضی</span>
                                </div>
                              </Button>
                              <div className="flex-1" />

                              <Button danger className="pr-2 cursor-wait pl-2 font-all md:w-1/5 mt-24 items-center" onClick={this.onClose}>
                                <div className="flex flex-row">
                                <span>
                                  <img src={Back} className="text-red-500 w-6 h-6 mr-1" alt=""/>
                                </span>
                                  <span className="font-all mr-2 text-red-500">
                                    بازگشت
                                  </span>
                                </div>

                              </Button>
                            </div>
              </div>
            </TabPane>
            <TabPane  tab={
              <span className="tappane-title font-all text-sm">
                افزودن گروهی
                </span>
            } key="2">
                    <AddGroups/>
              <div className="fixed bottom-0 mb-10 ">
                <Button type="primary">
                  <div className="flex flex-row">
                    <span><Plus className="text-white -mr-4"/></span>
                    <span className="text-white font-all text-base mr-1 font-all">
                  ثبت رزومه ها
                </span>
                  </div>
                </Button>
                <Button onClick={this.onClose} className="fixed left-0 ml-5">
                  <div className="flex flex-row">
                    <img className="w-6 h-6 -mr-4" src={Back} alt=""/>
                    <span className="text-red-500 mr-1 text-base font-al">
                  بازگشت
                </span>
                  </div>
                </Button>
              </div>
            </TabPane>
          </Tabs>
        </Drawer>
      </Fragment>
    );
  }
}
