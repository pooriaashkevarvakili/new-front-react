/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { Button, Modal, Checkbox, Input, Radio, Form, Divider, Col, Dropdown } from 'antd';
import { AlertCircle, FileText, Plus, Sliders } from 'react-feather';
import FormOne from './FormOne';
import ViewAllSkills from './ViewAllSkills';
import Skills from './Skills';
import TabPaneOneForm from '@/pages/job_offer_employment/employment/TabPaneOneForm';
import RecentActivities from '@/pages/job_offer_employment/employment/RecentActivities';
import HInput from '@/pages/bloc/Input/Input';
import RecentActivesTapPaneFive from '@/pages/job_offer_employment/employment/RecentActivesTapPaneFive';
export default class ModalOne extends PureComponent {
  state = { visible: false, loading: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const Expert = {
      marginRight: '10.5rem',
    };
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      /*
فیلترهای بیشتر
*/
      <>
        <Button className="font-bold text-sm  w-40 " onClick={this.showModal}>
          <div className="flex flex-row">
            <span className="">
              <Sliders />
            </span>
            <span className="mr-2 font-all">فیلترهای بیشتر</span>
          </div>
        </Button>
        <Modal
          className="font-bold"
          width={601}
          height={826}
          title="فیلترهای بیشتر"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <div className="">
              <Button
                className="font-bold text-red-500 h-10 font-all"
                key="back"
                onClick={this.handleCancel}
              >
                پاک کردن
              </Button>
              <Button
                className="font-bold font-all h-10"
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.handleOk}
              >
                اعمال فیلتر
              </Button>
            </div>,
          ]}
        >
          <section>
            <p className="font-all">تحصیلات</p>
            <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
              <div className="flex">
                <section className="md:w-full">
                  <section className="flex ">
                    <section className="md:w-full">
                      <Form
                        form={this.form}
                        ref={this.formRef}
                        onSubmit={this.submit}
                        layout="vertical"
                      >
                        <div className="flex">
                          <section className="md:w-2/3">
                            <section className="flex items-center justify-center ">
                              <section className="md:w-full">
                                <div className="flex flex-col ">
                                  {new HInput('زیردیپلم', 'email', '')
                                    .required()
                                    .checkbox()
                                    .render({})}
                                  {new HInput('کاردانی', 'email', '')
                                    .required()
                                    .checkbox()
                                    .render({})}
                                  {new HInput('کارشناسی ارشد', 'email', '')
                                    .required()
                                    .checkbox()
                                    .render({})}
                                </div>
                              </section>
                            </section>
                          </section>
                          <section className="md:w-5/6   ">
                            <div className="flex flex-col  ">
                              {new HInput('دیپلم', 'email', '').required().checkbox().render({})}
                              {new HInput('کارشناسی', 'email', '').required().checkbox().render({})}
                              {new HInput('دکتری', 'email', '').required().checkbox().render({})}
                            </div>
                          </section>
                        </div>
                      </Form>
                    </section>
                  </section>
                </section>
              </div>

              <div className="w-11/12 mt-5 border-solid border-modal " />
            </Form>
            <FormOne />
            <Skills />
          </section>
          <ViewAllSkills />
        </Modal>
      </>
    );
  }
}
