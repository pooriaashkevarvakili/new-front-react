/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/26-10:19
- ------------------------------------------------------------------------------------ *
- This file is CreateForm of cv job offer module.
- This Form use [bloc] and [components]
- ----------------------------------------------------------------------------------- */
import React, { Component } from 'react';
import { Button, Form, Spin, Layout } from 'antd';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from './../model/Bloc';

import HInput, { RenderButton } from '@/components/Input/Input';
const { Header, Footer, Content } = Layout;
class CreateForm extends Component {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.bloc = new JobOfferBloc();
  }
  componentDidMount() {
    this.inject();
  }
  async inject() {
    /*
    await this.bloc.get(1);
*/
    await this.bloc.getDropDownForJobOffer();
    this.formRef.current.setFieldsValue(this.bloc.repo.model);
  }
  async submit() {
    const values = await this.formRef.current.validateFields();
    this.bloc.save(values);
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <BlocBuilder
          subject={this.bloc.subject}
          builder={({ error, data }) => {
            if (!data) return <div>Data Not Init</div>;
            if (data)
              return (
                <Spin spinning={data.loading}>
                  <Form
                    form={this.form}
                    ref={this.formRef}
                    onSubmit={this.submit}
                    layout="vertical"
                  >
                    <Layout className="bg-white">
                      <Content>
                        <div className="flex flex-wrap">
                          {new HInput(
                            'دپارتمان',
                            'departments',
                            'pl-2 md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'عنوان شغل',
                            'job_titles',
                            'pr-2 md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'سمت سازمانی',
                            'levels',
                            'pl-2 md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'محل کار',
                            'work_places',
                            'pr-2  md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .select(data.work_places)
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'شرح موقعیت شغلی',
                            'description',
                            '  md:w-full font-bold font-weight-700',
                          )
                            .required()
                            .textArea()
                            .rows(4)
                            .place(
                              ' درباره این موقعیت شغلی، نیازمندی ها و شرایط لازم در اینجا توضیح دهید',
                            )
                            .render()}
                          {new HInput(
                            'مهارت های مورد نیاز',
                            'skills',
                            ' md:w-full large font-bold font-weight-700 ',
                          )
                            .required()
                            .size('large')
                            .select(data.skills)
                            .className('blue-color bg-gray-200')
                            .place('انتخاب کنید')
                            .mode('tags')
                            .render()}
                          {new HInput(
                            'تحصیلات مورد نیاز',
                            'educations',
                            'pl-2  md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'سابقه کاری مورد نیاز',
                            'work_experience',
                            'pr-2  md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'جنسیت متقاضی',
                            'sex',
                            'pl-2  md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .select(data.sex)
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput(
                            'علت درخواست استخدام',
                            'reason_request',
                            'pr-2 md:w-1/2 font-bold font-weight-700',
                          )
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                        </div>
                      </Content>
                      <div className="flex flex-wrap back-grey">
                        <RenderButton
                          htmlType="submit"
                          className=" pr-2 pl-2  md:w-2/7"
                          type="primary"
                        >
                          ثبت درخواست استخدام
                        </RenderButton>
                        <div className="flex-1" />
                        <Button
                          danger
                          className="pr-2 pl-2  md:w-1/5 items-center"
                          onClick={this.onClose}
                          type=""
                          htmlType=""
                        >
                          بازگشت{' '}
                        </Button>
                      </div>
                    </Layout>
                  </Form>
                </Spin>
              );
          }}
        ></BlocBuilder>
      </div>
    );
  }
}
export default CreateForm;
