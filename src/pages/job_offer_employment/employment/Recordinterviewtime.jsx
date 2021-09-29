/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import ModalApplicant from './ModalApplicant';
import { Modal, Button, Tabs } from 'antd';
import { Calendar, Clock, FileText, XCircle } from 'react-feather';
import AddInterviewForm from './AddInterviewForm';
import Office from './Office';
import RecordInterViewTimeRecentActivies from '@/pages/job_offer_employment/employment/RecordInterViewTimeRecentActivies';
export default class RecordInterviewTime extends PureComponent {
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
    const border = {
      borderRadius: '5px',
      objectFit: 'contain',
      boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.02)',
    };
    const { TabPane } = Tabs;
    const { visible, loading } = this.state;
    return (
      /*
ثبت زمان مصاحبه کلیک کردید صفحه باز شود
*/
      <Fragment>
        <Button className="font-all h-10" type="primary" onClick={this.showModal}>
          ثبت زمان مصاحبه
        </Button>
        <Modal
          width={1048}
          height={230}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <ModalApplicant />
          <Tabs defaultActiveKey="2">
            <TabPane className="font-all"    tab=   {
              <span className="tappane-title">
                  مصاحبه
                </span>
            } key="1">
              <section>
                <div className="flex">
                  <div className="w-6/12 h-32 bg-white flex " style={border}>
                    <div className="flex flex-col ">
                      <div className=" mr-8 mt-4 flex flex-row ">
                        <p className=" h-6 w-24 font-all  black-color font-regular  font-medium text-sm  ">
                          مصاحبه حضوری
                        </p>
                        <div className=" mr-48">
                          <img src="/images/image12.jpg" className="h-10 w-10" alt="" />
                          <img src="/images/image8.jpg" className="h-10 w-10" alt="" />
                          <img src="/images/image3.jpg" className="h-10 w-10" alt="" />
                        </div>
                      </div>
                      <span className="flex flex-row mr-5 mt-2">
                        <span>
                          <Office className="flex items-center -mt-1" />
                        </span>
                        <div className="flex flex-row ">
                          <p className="text-xs font-all h-6 font-regular  font-medium w-16 text-gray-700">
                            {' '}
                            دفتر مرکزی
                          </p>
                          <span>
                            <Calendar className="flex items-center -mt-1" />
                          </span>
                          <p className="text-xs font-all h-6 font-regular  font-medium w-20 text-gray-700">
                            25خرداد1399
                          </p>
                        </div>
                        <span>
                          <Clock className="flex items-center -mt-1" />
                        </span>
                        <p className="text-xs font-all h-6 font-regular  font-medium w-20 text-gray-700">
                          10:30تا11:30
                        </p>
                        <div className="flex flex-row mr-5">
                          <span>
                            <FileText style={{ color: '#5685ee' }} />
                          </span>
                          <span className="text-xs font-all" style={{ color: '#5668ee' }}>
                            ویرایش
                          </span>
                          <div className="flex flex-row mr-2">
                            <span>
                              <XCircle className="text-red-500" />
                            </span>
                            <span className="text-xs text-red-500 font-all">حذف</span>
                          </div>
                        </div>
                      </span>
                      <div className="flex ">
                        <section className="md:w-3/4  mt-10 ">
                          <AddInterviewForm />
                          <section className="flex items-center justify-center ">
                            <section className="md:w-2/3"></section>
                          </section>
                        </section>
                      </div>
                    </div>
                  </div>
                  <section className="md:w-2/3">
                    <RecordInterViewTimeRecentActivies />
                  </section>
                </div>
              </section>
            </TabPane>
          </Tabs>
        </Modal>
      </Fragment>
    );
  }
}
