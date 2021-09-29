/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { Form, Spin, Button, Modal, Tabs, Checkbox } from 'antd';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import { Plus } from 'react-feather';
import momentJalaali from 'moment-jalaali';
import RecentActivesTwoForm from '@/pages/job_offer_employment/employment/RecentActivesTwoForm';
import ModalAplicantTwoForm from '@/pages/job_offer_employment/employment/ModalAplicantTwoForm';
import TapPaneTwoFormOne from '@/pages/job_offer_employment/employment/TapPaneTwoFormOne';
import HInput from '@/pages/bloc/Input/Input';
import RecordInterviewTime from '@/pages/job_offer_employment/employment/Recordinterviewtime';
export default class TabPaneTwoForm extends PureComponent {
  state = { visible: false };
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
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
    this.state = {
      visible: false,
      value: momentJalaali(),
    };
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    const { TabPane } = Tabs;
    return (
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          if (data)
            return (
              /*
تپ پین دوم بعد از کلیک فرم
*/
              <Fragment>
                <Button
                  className="flex text-red-600 font-all items-center p-5 border-none text-xs"
                  icon={<Plus />}
                  onClick={this.showModal}
                >
                  افزودن وقت مصاحبه
                </Button>
                <Modal
                  width={1048}
                  footer={[]}
                  height={230}
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="flex items-end">
                    <ModalAplicantTwoForm />
                  </div>
                  <Tabs defaultActiveKey="2">
                    <TabPane className="font-all" tab=      {
                      <span className="tappane-title">
                  مصاحبه
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
                             <TapPaneTwoFormOne/>
                              <div className="flex flex-row mt-8 ">
                                <RecordInterviewTime />
                                <Button onClick={this.handleCancel} className="font-regular font-all border-red-500 h-10 text-red-500 mr-3">
                                  بازگشت
                                </Button>
                              </div>
                            </section>
                            <section className="md:w-2/3">
                              <RecentActivesTwoForm />
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
