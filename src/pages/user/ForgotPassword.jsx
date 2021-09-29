/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-15:55
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import {
  Col,
  Row,
  ConfigProvider,
  Button, Form,
} from 'antd';
import { Link } from 'umi';
import {ArrowRight} from "react-feather"
import React, { PureComponent, Fragment } from 'react';
import HInput from '@/pages/bloc/Input/Input';
import set from '../../../config/defaultSettings';
class Page extends PureComponent {
  render() {

    return (
      /*
صفحه ی دوم لوگین بازیابی رمزعبور
*/
      <Fragment className="">


        <Form layout='vertical'>

          <div className="">

            <div className="mt-5 text-accent">
              <span className="font-extrabold font-all	text-2xl">بازیابی رمزعبور</span>
              <p className="font-regular font-all">
                کدارسال شده را در اینجا وارد کنید،سپس یک رمزعبور
                جدید برای خود تنظیم کنید
              </p>
            </div>
            <div className="flex flex-wrap flex-col">
              {new HInput('ایمیل یا شماره موبایل', 'email', '', 'w-full font-regular mt-1 ').required().size('large').place('ایمیل یا شماره موبایل').render()}

            </div>
            <div>
              <Button className="mt-4 w-full h-12" type="primary">
                <Link to="/user/change-password" className="font-all">
                  ادامه
                </Link>
              </Button>

              <Link to="/user/login" className="flex items-center mt-4 border-none text-xs">
                <ArrowRight className="blue-color-prioritize  ml-1" size="18" color={set.linkColor}/>
                <span className="font-all">بازگشت به صفحه ورود</span>
              </Link>
            </div>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default class ForgotPassword extends PureComponent {
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
