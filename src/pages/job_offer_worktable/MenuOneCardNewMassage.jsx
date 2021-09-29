/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Button, ConfigProvider, Form, Spin } from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import { DatePicker } from 'antd-jalali';
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
export default class MenuOneCardNewMassage extends PureComponent {
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
تپ پین اول بعد کلیک وفرم
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
    return (
      /*
دراپ دون قسمت سرچ کاربر میزکاربر
*/
      <Spin spinning={data.loading}>
        <Form
          form={this.form}
          ref={this.formRef}
          onSubmit={this.submit}
          layout="vertical"
        >
      <div>

          <div className="flex flex-wrap flex-row mt-5 ">
            {new HInput('فرستنده', 'فرستنده', 'w-64  mr-5').required().line().render({
                                                                                     fontFamily: 'yek', })}
          </div>

        <div className="flex flex-wrap flex-row mt-1 ">
          {new HInput('موضوع', 'موضوع', 'w-64  mr-5').required().line().render({
                                                                                     fontFamily: 'yek', })}
        </div>
        <div className="flex flex-row flex-wrap mt-1">
          <label className=" mt-3 w-11 font-all	font-regular text-sm	font-normal	mr-2	">تاریخ از</label>
          <ConfigProvider locale={fa_IR} direction="rtl">

            <DatePicker
              placeholder="شروع"
              className="mr-2"
              fullscreen={false}
              onPanelChange={this.onPanelChange}
            />
          </ConfigProvider>
          <div className="mr-2 font-all mt-5">تا</div>
          <ConfigProvider locale={fa_IR} direction="rtl">
            <DatePicker
              placeholder="پایان"
              className="mr-2"
              fullscreen={false}
              onPanelChange={this.onPanelChange}
            />
          </ConfigProvider>
        </div>
        <div className="flex flex-col  mr-2 mt-6">
          {new HInput('پیوست دارد', 'email', '').required().checkbox().render({})}
          {new HInput('خوانده نشده', 'email', '').required().checkbox().render({})}
          {new HInput('منتخب', 'email', '').required().checkbox().render({})}
        </div>
        <div className="absolute bottom-0 left-0 mt-10 ml-2 flex flex-row ">
          <Button className="font-all ml-2 text-red-500 text-sm font-regular 	">پاک کردن</Button>
          <Button type="primary" className="font-all  text-white text-sm font-regular 	">اعمال</Button>
        </div>
      </div>
        </Form>
      </Spin>
    );
        }}
      />
    );
  }
}

