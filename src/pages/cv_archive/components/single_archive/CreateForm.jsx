/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/28-10:19
- ------------------------------------------------------------------------------------ *
- This file is CreateForm of cv archive module.
- This Form use [bloc] and [components]
- ----------------------------------------------------------------------------------- */
import React, {Component} from 'react';
import {Button, Form, Layout, Radio, Spin} from 'antd';
import BlocBuilder from 'bloc-builder-react';
import HInput , {RenderButton} from "@/components/Input/Input";
import CvArchiveBloc from "@/pages/cv_archive/model/Bloc";
const RadioGroup = Radio.Group;
import HelpOutline from "rmdi";
const { Header, Footer, Content } = Layout;
class CreateForm extends Component {
  bloc;
  formRef = React.createRef()
  form;
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
    }
    this.bloc = new CvArchiveBloc();
  }
  componentDidMount() {
    this.inject();
  }
  async inject(){
    /*
        await this.bloc.get(1);
    */
    await this.bloc.getDropDownForCvArchive();
    this.formRef.current.setFieldsValue(this.bloc.repo.model)
  }
  async submit() {
    const values = await this.formRef.current.validateFields()
    this.bloc.save(values);
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
          console.log(data)
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          if (data)
            return (
              <Spin spinning={data.loading}>
                <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
                  <Layout className="bg-white">
                    <Content>
                    <div className="flex flex-wrap">
                    {new HInput('فایل رزومه'  ,'file','pl-16  font-bold font-weight-700 blue-color').file().required().render()}
                    {new HInput('عکس متقاضی'  ,'image','pr-2 md:w-1/2 font-bold font-weight-700').image().required().render()}
                    {new HInput('عنوان شغل'  ,'job_titles', 'pl-2 md:w-1/2 font-bold font-weight-700').required().querySelect('my-url').place('انتخاب کنید').render()}
                    {new HInput('منبع رزومه'  ,'send_locations','pr-2  md:w-1/2 font-bold font-weight-700').required().querySelect('my-url').place('انتخاب کنید').render()}
                    {new HInput('نام و نام خانوادگی'  ,'full_name','pl-2  md:w-1/2 font-bold font-weight-700').place('asas').required().Input([]).render()}
                    {new HInput('شماره موبایل'  ,'mobile','pr-2  md:w-1/2 font-bold font-weight-700').required().Input([]).place('مثال:***** 0910').render()}
                    {new HInput('ایمیل'  ,'email','pl-2  md:w-1/2 font-bold font-weight-700').required().Input([]).render()}
                    {new HInput('تحصیلات'  ,'educations','pr-2  md:w-1/2 font-bold font-weight-700').required().querySelect('my-url').place('انتخاب کنید').render()}
                    {new HInput('سن متقاضی'  ,'age','pl-2  md:w-1/2 font-bold font-weight-400','HelpOutline').required().Input([]).place('سن به صورت عدد یا سال تولد').render()}
                    {new HInput('جنسیت'  ,'sex','pr-2  md:w-1/2 font-bold font-weight-700').required().select([]).place('انتخاب کنید').render()}
{/*
                      {new HInput('جنسیت'  ,'sex','pr-2  md:w-1/2 font-bold font-weight-700').required().radio([]).render()}
*/}
                    {new HInput('مهارت ها'  ,'skills','pr-1 w-full font-bold font-weight-700').size('large').className('blue-color bg-gray-200').required().max(10).select(data.skills).mode('tags').render()}
                  </div>
                    </Content>
                  <div className="flex flex-wrap back-grey">
                    <RenderButton htmlType="submit" className=" pr-2 pl-2  md:w-2/7 mt-56" type="primary">ثبت اطلاعات متقاضی</RenderButton>
                    <div className="flex-1"/>
                    <Button danger className="pr-2 pl-2  md:w-1/5 mt-56 items-center"  onClick={this.onClose} type="" htmlType="">بازگشت </Button>
                  </div>
                  </Layout>
                </Form>
              </Spin>)
          }}
        >
        </BlocBuilder>
      </div>
    );
  }
}
export default CreateForm;
