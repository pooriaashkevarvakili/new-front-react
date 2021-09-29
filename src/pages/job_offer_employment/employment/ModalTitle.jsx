/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/24-14:48
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { Button, Tabs } from 'antd';
import TabPaneOneClick from './TabPaneOneClick';
import TabPaneTwo from './TabPaneTwo';
import TabPanethree from './TabPanethree';
import JobOfferAssessmentTabpaneFour from './JobOfferAssessmentTabpaneFour';
import TabPaneFive from './TabPaneFive';
import 'moment/locale/fa';
import ModalTitleTapPane from '@/pages/job_offer_employment/employment/ModalTitleTapPane';
export default class ModalTitle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { TabPane } = Tabs;
    return (
      /*
تب پین ها
*/
      <section>
        <div className="flex items-end">
          <ModalTitleTapPane />
        </div>
        <section className="mt-8" style={{

        }}>
          <Tabs   defaultActiveKey="1">
            <TabPane

              className="font-regular font-all " tab=
              {
                <span className="tappane-title text-sm">
                  اطلاعات متقاضی
                </span>
              }
              key="1">
              <TabPaneOneClick />
            </TabPane>
            <TabPane className="font-regular font-all" tab=    {
              <span className="tappane-title text-sm">
                 مصاحبه
                </span>
            } key="2">
              <TabPaneTwo />
            </TabPane>
            <TabPane className="font-regular font-all" tab=    {
              <span className="tappane-title text-sm">
                 فرم ها
                </span>
            } key="3">
              <TabPanethree />
            </TabPane>
            <TabPane className="font-regular font-all" tab=    {
              <span className="tappane-title text-sm">
               ارزیابی
                </span>
            } key="4">
              <JobOfferAssessmentTabpaneFour />
            </TabPane>
            <TabPane className="font-regular font-all" tab=    {
              <span className="tappane-title text-sm">
                 تکمیل مدارک
                </span>
            } key="5">
              <TabPaneFive />
              <Button
              type="primary"
                className="text-white   font-all">تایید مدارک و استخدام</Button>
              <Button className="mr-5  text-white bg-red-500 font-all">عدم تایید</Button>
            </TabPane>
          </Tabs>
        </section>
      </section>
    );
  }
}
