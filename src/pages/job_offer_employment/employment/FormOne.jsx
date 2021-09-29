/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
-FormOne
- ----------------------------------------------------------------------------------- */
import { Checkbox, Col, Form } from 'antd';
import React, { PureComponent, Fragment } from 'react';
import HInput from '@/pages/bloc/Input/Input';
export default class FormOne extends PureComponent {
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      /*
فیلترهای بیشتر قسمت سن
*/
      <div className="mt-4">
        <p className="font-bold font-all">سن</p>
        <Form
          name="validate_other"
          {...formItemLayout}
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
                              {new HInput('کم تر از20سال', 'email', '')
                                .required()
                                .checkbox()
                                .render({})}
                              {new HInput('30تا40سال', 'email', '')
                                .required()
                                .checkbox()
                                .render({})}
                            </div>
                          </section>
                        </section>
                      </section>
                      <section className="md:w-5/6   ">
                        <div className="flex flex-col  ">
                          {new HInput('20تا30سال', 'email', '').required().checkbox().render({})}
                          {new HInput('بالاتراز40سال', 'email', '')
                            .required()
                            .checkbox()
                            .render({})}
                        </div>
                      </section>
                    </div>
                  </Form>
                </section>
              </section>
            </section>
          </div>
          <div className="w-11/12 mt-5 border-solid border-modal " />
        </Form>
      </div>
    );
  }
}
