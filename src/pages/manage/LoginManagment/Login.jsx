/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/30-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Form, Spin } from 'antd';
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import { HelpCircle } from 'react-feather';
import Button from 'antd/lib/button';

export default class Login extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;

  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

  render() {
    return (
      /*
مدیریت محتوا
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          const pClass = 'md:w-1/2 w-full';
          return (
            <div>
              <section>
                <div
                  className="bg-white"
                  style={{
                    width: '1650px',
                    height: '882px',
                  }}
                >
                  <div className="flex">
                    <section className="md:w-2/3">
                      <section className="flex  ">
                        <div className="mt-5 mr-5">
                          <span className="text-2xl font-all font-extrabold">
                            تنظیمات صفحه ورود
                          </span>
                        </div>
                      </section>
                    </section>
                  </div>
                  <div className="flex mt-12 justify-start mr-5 ">
                    <section className="md:w-2/3">
                      <section className="flex  ">
                        <div className="flex flex-row">
                          <span className="text-sm font-all">متن روز</span>
                          <span className="mr-2">
                            <HelpCircle color={'#5685ee'} />
                          </span>
                        </div>
                      </section>
                      <Spin spinning={data.loading}>
                        <Form
                          form={this.form}
                          ref={this.formRef}
                          onSubmit={this.submit}
                          layout="vertical"
                        >
                          <div className="flex">
                            <section className="md:w-full">
                              {new HInput('', 'sex', '')
                                .required()
                                .radio(
                                  [
                                    {
                                      id: 1,
                                      title: 'متن پیش فرض',
                                    },
                                    {
                                      id: 2,
                                      title: 'متن مناسبتی',
                                    },
                                  ],
                                  0,
                                )
                                .render()}
                            </section>
                          </div>
                        </Form>
                      </Spin>
                      <section className="md:w-full">
                        <div className="flex flex-row">
                          <span className="font-all">تصویر صفحه ورود</span>
                          <span className="mr-2">
                            <HelpCircle color={'#5685ee'} />
                          </span>
                        </div>

                        <div>
                          {new HInput('', 'file', 'pl-2 md:w-1/2 text-xs font-bold font-weight-700')
                            .file()
                            .required()
                            .render()}
                        </div>
                      </section>
                      <section className="md:w-full">
                        <div className="flex flex-row">
                          <span className="font-all">فایل لوگو</span>
                          <span className="mr-2">
                            <HelpCircle color={'#5685ee'} />
                          </span>
                        </div>
                        <div>
                          {new HInput('', 'file', 'pl-2 md:w-1/2 text-xs font-bold font-weight-700')
                            .image()
                            .required()
                            .render()}
                        </div>
                      </section>
                      <Button
                        type="primary"
                        className="absolute font-all bottom-0 mb-5 p-2 text-white text-base h-10"
                      >
                        ثبت تغییرات
                      </Button>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          );
        }}
      />
    );
  }
}
