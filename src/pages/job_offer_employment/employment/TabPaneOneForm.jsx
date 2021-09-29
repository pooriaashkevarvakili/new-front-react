/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-8:49
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { Spin, Form, Button, Modal, Tabs, Timeline } from 'antd';
import React, { PureComponent, Fragment } from 'react';
import HInput from '@/pages/bloc/Input/Input';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
import { Plus } from 'react-feather';
import ModalApplicant from './ModalApplicant';
import RecentActivitiesOneForm from './RecentActivesOneForm';
export default class TabPaneOneForm extends PureComponent {
  state = {
    visible: false,
    loading: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { TabPane } = Tabs;
    return (
      /*
تپ پین اول بعد کلیک وفرم
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          const pClassWidth = 'w-5/12';
          return (
            <Fragment>
              <Button
                onClick={this.showModal}
                className=" font-bold font-all text-red-500 border-none p-5 text-xs flex items-center"
                icon={<Plus />}
              >
                افزودن اطلاعات متقاضی
              </Button>
              <Modal
                width={1048}
                footer={[]}
                height={230}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <ModalApplicant />
                <Tabs defaultActiveKey="1">
                  <TabPane className="font-all" tab=      {
                    <span className="tappane-title">
                  اطلاعات متقاضی
                </span>
                  } key="1">
                    <Spin spinning={data.loading}>
                      <Form
                        form={this.form}
                        ref={this.formRef}
                        onSubmit={this.submit}
                        layout="vertical"
                      >
                        <div className="flex">
                          <section className="md:w-3/4">
                            <div className="flex mt-3">
                              {new HInput('ایمیل', 'emailOne', pClassWidth).required().size('large').place('ایمیل راواردکنید').render({
                                fontFamily: 'yek',
                              })}
                              {new HInput('شماره موبایل', 'telMobile', 'w-5/12  mr-10 ')
                                .required().size('large')
                                .place('شماره موبایل را وارد کنید')
                                .render({
                                  fontFamily: 'yek',
                                })}
                            </div>
                            <div className="flex mt-3">
                              {new HInput('سن ', 'age', pClassWidth)
                                .required().size('large')
                                .place('سن را به صورت عدد یا سال تولد')
                                .render({
                                  fontFamily: 'yek',
                                })}
                              {new HInput('تحصیلات', 'education', 'w-5/12  mr-10 ')
                                .required().querySelect(data.city)
                                .place('انتخاب کنید')
                                .render({})}
                            </div>
                            <div>
                              {new HInput('مهارت', 'skills', 'w-11/12   ')
                                .required().querySelect(data.city)
                                .place('انتخاب کنید')
                                .render({})}
                            </div>
                            <div className="mt-10">
                              <p className="font-regular font-all">مهارت های پیشنهادی:</p>
                            </div>
                            <div className="flex flex-row">
                              <p className="flex font-all items-center justify-center rounded-2xl bg-gray-200 text-gray-600 w-10 h-8">
                                icdl
                              </p>
                              <p className="flex font-all items-center font-medium font-regular justify-center text-gray-600 rounded-2xl bg-gray-200 w-32 mr-3 h-8">
                                همکاران سیستم
                              </p>
                              <p className="flex font-all items-center justify-center rounded-2xl text-gray-600 bg-gray-200 w-20 mr-3 h-8">
                                MsProject
                              </p>
                              <p className="flex font-all items-center font-medium font-regular text-gray-600 justify-center rounded-2xl bg-gray-200 w-32 mr-3 h-8">
                                حقوق دستمزد
                              </p>
                              <p className="flex font-all items-center font-medium font-regular text-gray-600 justify-center rounded-2xl bg-gray-200 w-20 mr-3 h-8">
                                حسابرسی
                              </p>
                            </div>
                            {new HInput('توضیحات', 'description', 'w-11/12 font-regular mt-5 mr-2 ')
                              .required()
                              .textarea([])
                              .render()}
                            <div className="flex flex-row mt-8 ">
                              <Button className="font-all " type="primary font-bold">
                                ثبت اطلاعات
                              </Button>
                              <Button onClick={this.handleCancel} className="mr-4 font-all h-10 text-red-500 font-bold">
                                بازگشت
                              </Button>
                            </div>
                          </section>
                          <section className="md:w-5/6">
                            <RecentActivitiesOneForm />
                          </section>
                        </div>
                      </Form>
                    </Spin>
                  </TabPane>
                </Tabs>
              </Modal>
            </Fragment>
          );
        }}
      />
    );
  }
}
