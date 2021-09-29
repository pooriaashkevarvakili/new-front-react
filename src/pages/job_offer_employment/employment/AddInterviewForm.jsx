/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/04-11:38
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Modal, Button, Tabs, Spin, Form, } from 'antd';
import { Plus } from 'react-feather';
import RecordInterviewTime from './Recordinterviewtime';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import AddInterviewFormRecentActives from '@/pages/job_offer_employment/employment/AddInterviewFormRecentActives';
import AddInterViewFormModalApplicant from '@/pages/job_offer_employment/employment/AddInterViewFormModalApplicant';
import AddInterViewFormOne from '@/pages/job_offer_employment/employment/AddInterViewFormOne';
export default class AddInterviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  bloc;
  formRef = React.createRef();
  form;
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { TabPane } = Tabs;

    const { visible } = this.state;
    return (
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          if (data)
            return (
              /*
فرم دوم
*/
              <Fragment>
                <Button
                  id="borderButton"
                  onClick={this.showModal}
                  className="mt-3 px-40 font-all  flex h-12 items-center rounded-lg border-solid "
                  icon={<Plus />}
                >
                  افزودن مصاحبه ی جدید
                </Button>
                <Modal
                  width={1048}
                  height={230}
                  visible={visible}
                  onCancel={this.handleCancel}
                  footer={[]}>
                  <div className="flex items-end">
                    <AddInterViewFormModalApplicant />
                  </div>
                  <Tabs defaultActiveKey="2">
                    <TabPane tab={
                      <span className="tappane-title">
                 مصاحبه
                </span>
                    } className="font-all" key="1">
                      <Spin spinning={data.loading}>
                        <Form
                          form={this.form}
                          ref={this.formRef}
                          onSubmit={this.submit}
                          layout="vertical">
                              <div className="flex">
                                <section className="md:w-2/3">
                                <AddInterViewFormOne/>
                                  <div className="flex flex-row mt-8 ">
                                    <RecordInterviewTime />
                                    <Button onClick={this.handleCancel} className="font-regular border-red-500 text-red-500 mr-3">
                                      بازگشت
                                    </Button>
                                  </div>
                                </section>
                                <section className="md:w-3/6">
                                  <AddInterviewFormRecentActives />
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
