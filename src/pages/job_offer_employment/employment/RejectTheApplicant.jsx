/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { Button, Input, Modal, Checkbox, Form } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import HInput from '@/pages/bloc/Input/Input';
export default class RejectTheApplicant extends PureComponent {
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
دکمه ی علت رد این متقاضی
*/
      <Fragment>
        <Button
          type="primary"
          onClick={this.showModal}
          className="mr-3  text-sm font-all font-bold tracking-normal  text-white"
        >
          ردکردن متقاضی
        </Button>
        <Modal
          width={336}
          height={377}
          visible={this.state.visible}
          title="علت رد کردن این متقاضی چیست؟"
          className="font-bold font-all"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <section>
            <div className="flex flex-col  mr-2">
              {new HInput('نداشتن سابقه کار کافی', 'email', '').required().checkbox().render({})}
              {new HInput('حقوق درخواستی بالا', 'email', '').required().checkbox().render({})}
              {new HInput('نداشتن دانش و تخصص کافی', 'email', '').required().checkbox().render({})}
              {new HInput('عدم تناسب رشته تحصیلی با شغل مورد نیاز', 'email', '')
                .required()
                .checkbox()
                .render({})}
              {new HInput('فراتراز حد انتظار', 'email', '').required().checkbox().render({})}
              {new HInput('دلایل دیگر', 'email', '').required().checkbox().render({})}
            </div>
            <div>
              {new HInput('', 'email', 'w-11/12 h-32 font-regular text-gray-500').required().place('علت رد کردن متقاضی را در اینجا بیان کنید').textarea().render({})}
            </div>
            <div className="mt-5">
              <Button type="primary" className="w-11/12 font-all font-bold font-extrabold">
                رد کردن متقاضی
              </Button>
            </div>
          </section>
        </Modal>
      </Fragment>
    );
  }
}
