/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Checkbox, Col, Form, Input } from 'antd';
import { Search } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
export default class Skills extends PureComponent {
  searchTitleText() {
    const dataSearch = [];
    dataSearch.filter((data) => {
      return data.name.toLowerCase().includes(dataSearch.toLowerCase());
    });
  }
  render() {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      /*
فیلترهای بیشتر مهارت ها
*/
      <Fragment>
        <div className="mt-5">
          <p className="font-bold font-all ">مهارت ها</p>
        </div>
        <Input
          onClick={(e) => e.target.value}
          onChange={this.searchTitleText}
          className="w-64 font-bold border-none white-color-bg"
          placeholder="جستجوی مهارت"
          type="text"
          prefix={<Search />}
        />
        <Form
          className="mt-4"
          name="validate_other"
          onFinish={onFinish}
          initialValues={{
            ['checkbox-group']: [''],
            rate: 3.5,
          }}
        >
          <div className="flex">
            <section className="md:w-full">
              <section className="flex ">
                <section className="md:w-full">
                  <Form
                    form={this.form}
                    ref={this.formRef}
                    onSubmit={this.submit}
                    layout="vertical"
                  >
                    <div className="flex">
                      <section className="md:w-2/3">
                        <section className="flex items-center justify-center ">
                          <section className="md:w-full">
                            <div className="flex flex-col ">
                              {new HInput('آفیس مایکروسافت', 'email', '')
                                .required()
                                .checkbox()
                                .render({})}
                              {new HInput('مدیریت شبکه های اجتماعی', 'email', '')
                                .required()
                                .checkbox()
                                .render({})}
                            </div>
                          </section>
                        </section>
                      </section>
                      <section className="md:w-5/6   ">
                        <div className="flex flex-col  ">
                          {new HInput('همکاران سیستم', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                          {new HInput('کارتیمی', 'email', '').required().checkbox().render({})}
                        </div>
                      </section>
                    </div>
                  </Form>
                </section>
              </section>
            </section>
          </div>
        </Form>
      </Fragment>
    );
  }
}
