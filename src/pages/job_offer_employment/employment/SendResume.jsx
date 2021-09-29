/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';

import { Download, ThumbsDown, ThumbsUp } from 'react-feather';

export default class SendResume extends PureComponent {
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
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { TextArea } = Input;
    return (
      /*
دکمه ی ارسال رزومه
*/
      <Fragment>
        <div>
          <Button
            onClick={this.showModal}
            className="text-white bg-blue-600   flex font-bold tracking-normal  font-bold"
            icon={<Download className="flex items-center font-all" />}
          >
            دریافت رزومه
          </Button>
        </div>
        <Modal
          className="font-all"
          width={336}
          height={443.3}
          visible={this.state.visible}
          title="ارزیابی مدیرمستقیم"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <section>
            <div className="flex flex-col">
              <p className="font-bold font-all">امتیاز</p>
              <Input
                className="font-bold font-all"
                type="text"
                placeholder="عدد امتیاز راوارد کنید"
              />
            </div>
          </section>
          <TextArea
            className="mt-3"
            placeholder="نظرشما در مورد متقاضی"
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
          <section>
            <div className="flex flex-row mt-5">
              <Button
                className="font-bold font-all flex justify-center items-center color-gray  "
                icon={<ThumbsUp className="-mt-1" />}
              >
                تایید
              </Button>
              <Button
                className="mr-20 font-all font-bold flex justify-center items-center color-gray"
                icon={<ThumbsDown />}
              >
                ردکردن
              </Button>
            </div>
          </section>
          <div className="flex justify-center align-center mt-3">
            <Button className="bg-red-500 font-all text-white w-64 mt-5">ثبت</Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
