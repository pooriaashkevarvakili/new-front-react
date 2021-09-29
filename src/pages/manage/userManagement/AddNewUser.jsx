/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/30-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, {PureComponent} from "react";
import { Button, Drawer, Form, Spin } from 'antd';
import { Plus, UserPlus } from 'react-feather';
import HInput from "@/pages/bloc/Input/Input";
import Back from "./svg/back.svg"
import JobOfferBloc from "@/pages/job_offer/model/Bloc";
import BlocBuilder from "bloc-builder-react";
export default class AddNewUser extends PureComponent {
  bloc;
  formRef = React.createRef()
  form;
  constructor(props) {
    super(props);
    this.state = {
      visible:false,

    }
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  componentDidMount() {
    // this.inject();
  }
  // async inject(){
  //   /*
  //       await this.bloc.get(1);
  //   */
  //   await this.bloc.getDropDownForCvArchive();
  //   this.formRef.current.setFieldsValue(this.bloc.repo.model)
  // }
  async submit() {
    const values = await this.formRef.current.validateFields()
    this.bloc.save(values);
  };
  state = { visible: false };
  showDrawer = () => {
    this.setState({
                    visible: true,
                  });
  };

  onClose = () => {
    this.setState({
                    visible: false,
                  });
  };
  render() {

    return (
      <div>
        <Button  type="primary" onClick={this.showDrawer}  className="ml-10  font-all text-white">
          <div className="flex flex-row">
            <UserPlus/>
            <span  className="mr-2 text-sm font-all">افزودن کاربر جدید</span>
          </div>
        </Button>
        <Drawer
          className="font-all"

          width={ 675}
        height= {1026}
         title="افزودن کاربر جدید"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
        >
          <div>
            <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
              console.log(data)
              if (error) return <div>Error</div>;
              if (!data) return <div>Data Not Init</div>;
              const pClass = 'md:w-1/2 w-full';
              if (data)
                return (
                  /*
مدیریت کاربران افزودن کاربر جدید
*/
                  <Spin spinning={data.loading}>
                    <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
                      <div className="flex flex-wrap">
                        <div className="flex flex-row">
                          {new HInput('نام ونام خانوادگی'  ,'first-name', 'pl-2 w-64 font-bold font-weight-700').place('نام کاربررابه طورکامل واردکنید').size('large').render()}
                          {new HInput('نام نمایشی'  ,'show-name','pr-2 mr-16  w-64 font-bold font-weight-700').required().place('نام فایل نمایش در سیستم').size('large').render()}
                        </div>
                        <div className="flex flex-row">
                          {new HInput('نام کاربری/ایمیل'  ,'email-user', 'pl-2 w-64 font-bold font-weight-700').required().place('نام کاربریاایمیل کاربرراواردکنید').size('large').render()}
                          {new HInput('شماره موبایل'  ,'tel-Number','pr-2 mr-16  w-64 font-bold font-weight-700').required().place('شماره موبایل کاربر راواردکنید').size('large').render()}
                        </div>
                        <div className="flex flex-row">
                          {new HInput('رمزعبور'  ,'password', ' w-64 font-bold font-weight-700').required().place('رمزعبورراواردکنید').size('large').render()}
                          {new HInput('تکراررمزعبور'  ,'password-repeat','  w-64 mr-16 font-bold font-weight-700').required().size('large').place('رمزعبوررامجدداواردکنید').render()}
                        </div>
                        <div className="flex flex-row">
                          {new HInput('عنوان'  ,'job_titles', 'w-64 font-bold font-weight-700').required().querySelect('my-url').place('انتخاب کنید').render()}
                          {new HInput('وضعیت', '', 'mr-16').required()
                                                                           .radio([
                                                                                    {
                                                                                      id   : 1,
                                                                                      title: 'فعال',
                                                                                    },
                                                                                    {
                                                                                      id   : 2,
                                                                                      title: 'غیرفعال',
                                                                                    },
                                                                                  ], 0).render()}
                        </div>
                      </div>
                    </Form>
                  </Spin>
                )
            }}
            >
            </BlocBuilder>
          </div>
          <div className="flex flex-wrap back-grey ">
            <Button  htmlType="submit" className="font-all pr-2 pl-2 mb-10  w-40 h-12 fixed bottom-0	 " type="primary">
              <div className="flex flex-row">
                <span><Plus className="text-white"/></span>
                <span className="text-white mr-2">ثبت کاربرجدید</span>
              </div>
            </Button>
            <div className="flex-1"/>
            <Button  danger className="w-32 h-12 fixed left-0 bottom-0 mb-10 ml-10  "  onClick={this.onClose} type="" htmlType="">
              <div className="flex flex-row">
                <span><img src={Back} className="w-6 h-6 -mr-2"/></span>
                <span className="font-all mr-2"> بازگشت</span>
              </div>
            </Button>
          </div>
        </Drawer>
      </div>
    )
  }
}
