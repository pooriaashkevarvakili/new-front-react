/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Dropdown, Form, Menu } from 'antd';
import { Plus, AlertCircle } from 'react-feather';
import TapPaneFiveMenu from './TapPaneFiveMenu';
import TapPaneFiveMenuOne from './TapPaneFiveMenuOne';
import RecentActivesTapPaneFive from '@/pages/job_offer_employment/employment/RecentActivesTapPaneFive';
import HInput from '@/pages/bloc/Input/Input';
export default class TabPaneFive extends PureComponent {
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    const menu = (
      <Menu className="relative menu-introduction">
        <TapPaneFiveMenu />
      </Menu>
    );
    const menuOne = (
      <Menu className="relative menu-four">
        <TapPaneFiveMenuOne />
      </Menu>
    );
    return (
      /*
تپ پین پنج
*/

      <div className="flex">
        <section className="md:w-full">
          <section className="flex ">
            <section className="md:w-full">
              <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
                <div className="flex">
                  <Dropdown overlay={menuOne}>
                    <div className="absolute flex flex-row noting-confirmation">
                      <span>
                        <AlertCircle className="text-gray-600" />
                      </span>
                      <span className="text-sm font-all text-gray-600 font-extrabold">
                        عدم تایید
                      </span>
                    </div>
                  </Dropdown>
                  <section className="md:w-2/3">
                    <section className="flex items-center justify-center ">
                      <section className="md:w-full">
                        <Dropdown onClick={(e) => e.preventDefault()} overlay={menu}>
                          <div className="flex flex-row">
                            <span>
                              <Plus className="text-red-500" />
                            </span>
                            <span className="text-sm font-all text-red-500 font-extrabold">
                              صدورمعرفی نامه
                            </span>
                          </div>
                        </Dropdown>
                        <div className="flex flex-col ">
                          {new HInput('صفحات ششناسنامه', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                          {new HInput('آخرین مدرک تحصیلی', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                          {new HInput('عکس پرسنلی', 'email', '').required().checkbox().render({})}
                          {new HInput('گواهی عدم اعتیاد', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                          {new HInput('تاییدیه محل کار قبلی', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                        </div>
                      </section>
                    </section>
                  </section>
                  <section className="md:w-4/5 flex mt-8 ">
                    <div className="flex flex-col  ">
                      {new HInput('کارت ملی', 'email', '').required().checkbox().render({})}
                      {new HInput('پایان خدمت', 'email', '').required().checkbox().render({})}
                      {new HInput('گواهی عدم سوپیشینه', 'email', '')
                        .required()
                        .checkbox()
                        .render({})}
                      {new HInput('گواهی سلامت جسمانی', 'email', '')
                        .required()
                        .checkbox()
                        .render({})}
                      {new HInput('صفحه اول دفترچه بیمه', 'email', '')
                        .required()
                        .checkbox()
                        .render({})}
                    </div>
                  </section>
                  <section className="md:w-11/12 flex">
                    <RecentActivesTapPaneFive />
                  </section>
                </div>
              </Form>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
