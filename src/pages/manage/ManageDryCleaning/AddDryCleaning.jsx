/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/28-9:30
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { Button, Spin, Form, Drawer } from 'antd';
import React, {  PureComponent } from 'react';
import { FileText, Plus, UserPlus } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import Back from "./svg/back.svg"
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
import AddDryCleaningTwo from '@/pages/manage/ManageDryCleaning/AddDryCleaningTwo';


export default class AddDryCleaning extends PureComponent {
  bloc;
  formRef = React.createRef()



  form;
  constructor(props) {
    super(props);
    this.state = {

      visible: false,
      placement: 'left',
      key: 'tab1',
      noTitleKey: 'app',
    }
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

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
      /*
مدیریت خشک شویی
مودالی است که برای افزودن خشک شویی استفاده می شود
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return (
      <>
        <Button
          type="primary"

         className="ml-5 absolute   h-10 left-0" onClick={this.showDrawer}>
          <div className="flex flex-row">
            <span><UserPlus className="text-white -mr-4 mt-1 " /></span>
            <div className="text-white font-all mr-2 mt-1 "> افزودن خشک شویی جدید</div>
          </div>
        </Button>
        <Drawer
          className="font-all"
          placement={this.state.placement}
          title="افزودن خشکشویی جدید"
          width={675}
          height={1021}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Spin spinning={data.loading}>
            <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">

            <div className="flex">
            <section className="md:w-full">



              <div className="flex flex-row">


                {new HInput('عنوان خشک شویی', 'titleDryCleaning', ' mt-3 w-6/12    ')
                  .required().place('عنوان خشک شویی را به طور کامل وارد کنید').size('large')
                  .render({})}



                {new HInput('نام شهر', 'city', 'w-5/12 mt-3  absolute left-0 ml-3     ').size('large')
                  .required(data.city).size('large')
                  .place('انتخاب کنید')
                  .render({})}

              </div>



<div className="flex flex-col mt-64    items-center">
  <FileText className="text-gray-600 " size={40}/>
  <div className="mt-5 text-sm text-gray-600  font-all">
    هنوز آدرسی ثبت نشده است
  </div>
  <div className="mt-5">
    <AddDryCleaningTwo/>
  </div>
</div>

            </section>
          </div>

            </Form>
          </Spin>
          <div className="fixed bottom-0 mb-10 ">
            <Button type="primary">
              <div className="flex flex-row">
                <span><Plus className="text-white"/></span>
                <span className="text-white font-all text-base mr-1 font-all">
                  ثبت خشکشویی جدید
                </span>
              </div>

            </Button>
            <Button onClick={this.onClose} className="fixed left-0 ml-5">
              <div className="flex flex-row">
                  <img className="w-6 h-6 -mr-4" src={Back} alt=""/>
                <span className="text-red-500 mr-1 text-base font-al">
                  بازگشت
                </span>
              </div>

            </Button>
          </div>

        </Drawer>

      </>
    );
      }}/>
    );
  }
}
