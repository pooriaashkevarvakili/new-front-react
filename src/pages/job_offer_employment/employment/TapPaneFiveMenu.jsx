/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/11/04-13:10
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { Checkbox, Col, Form } from 'antd';
import { Printer, X } from 'react-feather';
import Button from 'antd/lib/button';
import HInput from '@/pages/bloc/Input/Input';
export default class TapPaneFiveMenu extends PureComponent {
  formRef = React.createRef();
  form;
  showDropDown = () => {
    this.setState({ visible: true });
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    const { visible } = this.state;
    return (
      /*
تپ پین پنج صدورمعرفی نامه
*/
      <Fragment>
        <div className="flex flex-row mt-1">
          <span className="mr-4 font-bold text-sm font-all">
            معرفی نامه ی مورد نظر را انتخاب کنید؟
          </span>
          <span className="absolute left-0">
            <X onClick={this.showDropDown} value={visible} className="cursor-pointer" />
          </span>
        </div>
        <div className="h-0 mt-2 line-border-introduction" />
        <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
          <div className="flex flex-col mt-4 mr-4">
            {new HInput('پلیس +10برای گواهی عدم سوپیشینه', 'email', '')
              .required()
              .checkbox()
              .render({})}
            {new HInput('آزمایشگاه جهت گواهی عدم اعتیاد', 'email', '')
              .required()
              .checkbox()
              .render({})}
            {new HInput('مرکز طب کار جهت گواهی سلامت جسمانی', 'email', '')
              .required()
              .checkbox()
              .render({})}
          </div>
        </Form>
        <Button type="primary" className="mt-1 w-full text-white  ">
          <div className="flex flex-row justify-center items-center">
            <span>
              <Printer />
            </span>
            <span className="text-sm font-extrabold font-all">چاپ معرفی نامه</span>
          </div>
        </Button>
      </Fragment>
    );
  }
}
