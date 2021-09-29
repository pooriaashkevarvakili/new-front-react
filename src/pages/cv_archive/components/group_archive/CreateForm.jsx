/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/19-10:19
- ------------------------------------------------------------------------------------ *
- This file is CreateForm of cv archive module.
- This Form use [bloc] and [components]
- ----------------------------------------------------------------------------------- */
import React, { Component } from 'react';
import { Button, Form, Radio, Spin, Layout } from 'antd';
import HInput, { RenderButton } from '@/components/Input/Input';
import Bloc from '@/pages/cv_archive/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
const RadioGroup = Radio.Group;
const { Header, Footer, Content } = Layout;
class CreateForm extends Component {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new Bloc();
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.inject();
  }
  async inject() {
    await this.bloc.init();
    this.formRef.current.setFieldsValue(this.bloc.repo);
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
            console.log(data);
            if (error) return <div>Error</div>;
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
                          {new HInput('', 'dragdrop', 'pr-1 w-full')
                            .dragdrop()
                            .place('رزومه های متقاضیان را در اینجا بکشید و رها کنید')
                            .className('text-xl')
                            .required()
                            .render()}
                          {new HInput('عنوان شغل', 'job_titles', 'pl-2 md:w-1/2')
                            .required()
                            .querySelect('my-url')
                            .place('انتخاب کنید')
                            .render()}
                          {new HInput('منبع رزومه', 'send_locations', 'pr-2  md:w-1/2')
                            .required()
                            .select(data.send_locations)
                            .place('انتخاب کنید')
                            .render()}
                        </div>
                      </Content>
                      <div className="flex flex-wrap">
                        <RenderButton htmlType="submit" className=" pl-2  md:w-2/7 " type="primary">
                          ثبت ثبت رزومه ها
                        </RenderButton>
                        <div className="flex-1" />
                        <Button
                          danger
                          className="pr-2 pl-2  md:w-1/5  items-center"
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
