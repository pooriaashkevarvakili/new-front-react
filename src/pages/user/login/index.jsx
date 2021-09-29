/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/19-13:09
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { Button, Form, Spin, message } from 'antd';
import React, { PureComponent } from 'react';
import { Link } from 'umi';
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import AuthBloc from '@/pages/user/model/AuthBloc';

export default class Login extends PureComponent {

  bloc;
  formRef = React.createRef();
  form;

  constructor(props) {
    super(props);
    this.bloc = new AuthBloc();
  }


  async submit(values) {
    try {
      const data = await this.bloc.login(values);
      message.success(`${data.name || ''} خوش آمدید. `);
    } catch (e) {
      message.error('خطا در ورود!');
    }
  }

  render() {
    return (
      /*
صفحه ی اول لوگین
*/
      <BlocBuilder subject={this.bloc.subject} builder={({ error, data }) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
        return (
          <div>
            <div className="flex flex-col  my-6 text-accent">
              <span className="font-extrabold font-all	text-2xl	">به هاکوپیان 360 خوش آمدید</span>
              <span className="text-sm font-all">برای مشاهده امکانات پنل واردشوید</span>
            </div>
            <Spin spinning={data.loading}>
              <Form form={this.form} ref={this.formRef} layout="vertical" size="large"
                    onFinish={(values) => this.submit(values)}>
                {new HInput('نام کاربری', '').required().place('نام کاربری خود را وارد کنید').render()}
                {new HInput('رمزعبور', '').required().password().place('رمزعبور خود را وارد کنید').render()}
                <Button htmlType="submit" type="primary" className="block w-full mt-12 mb-2 h-12" size="large">
                  ورود
                </Button>
                <div className="mt-4">
                  <Link to="/user/forgot-password" className="border-none text-xs mt-4">
                    <span>  رمز عبور خود را فراموش کرده ام</span>
                  </Link>
                </div>
              </Form>
            </Spin>
          </div>
        );
      }}/>
    );
  }
}

