/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/11/04-13:10
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Checkbox, Col } from 'antd';
import { X } from 'react-feather';
import Button from 'antd/lib/button';
import HInput from '@/pages/bloc/Input/Input';
export default class TapPaneFiveMenuOne extends PureComponent {
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
تپ پین پنج عدم تایید مدرک
*/
      <Fragment>
        <div className="flex flex-row mt-2 ">
          <span className="mr-4 font-bold text-sm font-all">علت عدم تایید این مدرک چیست؟</span>
          <Col md={{ offset: 9 }}>
            <span>
              <X onClick={this.showDropDown} value={visible} className="cursor-pointer" />
            </span>
          </Col>
        </div>
        <div className="h-0 line-border-introduction" />
        <div className="flex flex-col mr-3 mt-2 ">
          {new HInput('متقاضی سو پیشینه دارد', 'email', '').required().checkbox().render({})}
          {new HInput('مدارک ناقص است', 'email', '').required().checkbox().render({})}
          {new HInput('گواهی منقضی شده است', 'email', '').required().checkbox().render({})}
          {new HInput('دلایل دیگر', 'email', '').required().checkbox().render({})}
        </div>
        <Button type="primary" className=" w-full text-white  ">
          <div className="flex flex-row justify-center items-center">
            <span className="text-sm font-extrabold font-all">ثبت</span>
          </div>
        </Button>
      </Fragment>
    );
  }
}
