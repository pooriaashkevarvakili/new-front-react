/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/8-13:08
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import {ArrowRight} from "react-feather";
import { Link } from 'umi';
import { Form, Button, ConfigProvider } from 'antd';

import HInput from '@/pages/bloc/Input/Input';
import set from '../../../config/defaultSettings';

class Page extends PureComponent {
  render() {

    return (
      /*
صفحه لوگین فراموشی رمز و رمز جدید
*/
      <Fragment className="">
        <Form layout="vertical">
          <div className="">
            <div className="mt-5 text-accent">
              <span className="font-extrabold	text-2xl font-all">بازیابی رمزعبور</span>
              <p className="font-regular font-all">
                کدارسال شده را در اینجا وارد کنید،سپس یک رمزعبور
                جدید برای خود تنظیم کنید
              </p>
            </div>
            <div className="flex flex-wrap flex-col">
              {new HInput('کد تایید', 'password-recovery-code', 'w-full font-regular mt-1').size('large').required().place('آدرس ایمیل شما').render()}
              {new HInput('رمز جدید', 'new-password', 'w-full font-regular mt-1' ).required().size('large').place('رمزعبورجدیدراواردکنید').render()}
              {new HInput('تکرار رمز عبور جدید', 'new-password-repeat', 'w-full font-regular mt-1').size('large').required().place('رمزعبورجدیدرامجدداواردکنید').render()}
            </div>
            <div className="mt-4">
              <Button type="primary" className="w-full font-all">
                ثبت رمز عبور جدید
              </Button>
            </div>

            <Link to="/user/login" className="flex font-all items-center mt-4 border-none text-xs">
              <ArrowRight className="blue-color-prioritize  ml-1" size="18" color={set.linkColor}/>
              <span className="font-all">بازگشت به صفحه ورود</span>
            </Link>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default class ForgotPasswordChange extends PureComponent {
  state = {
    direction: 'rtl',
    popupPlacement: 'bottomLeft',
  };

  render() {
    const { direction, popupPlacement } = this.state;
    return (
      <>
        <ConfigProvider direction={direction}>
          <Page className={direction} popupPlacement={popupPlacement}/>
        </ConfigProvider>
      </>
    );
  }
}
