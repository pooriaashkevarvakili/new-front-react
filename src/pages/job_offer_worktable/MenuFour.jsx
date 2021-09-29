/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { Button, Card, Dropdown, Form, Menu, Spin, Upload } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { MoreHorizontal, Paperclip, Smile, ChevronLeft } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';

export default class MenuFour extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  state = {
    value:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد',
  };

  handleChange = (value) => {
    this.setState({
      value,
    });
  };
  render() {
    const { SubMenu } = Menu;
    const menuTwo = (
      <Menu className="w-48	h-56">
        <SubMenu className="font-all" title="دسته بندی" icon={<ChevronLeft />}>
          <Menu.Item className="font-all">قرمز</Menu.Item>
          <Menu.Item className="font-all">نارنجی</Menu.Item>
          <Menu.Item className="font-all">زرد</Menu.Item>
          <Menu.Item className="font-all">سبز</Menu.Item>
          <Menu.Item className="font-all">کمرنگ سبز</Menu.Item>
          <Menu.Item className="font-all">کمرنگ آبی</Menu.Item>
          <Menu.Item className="font-all">پررنگ آبی</Menu.Item>
          <Menu.Item className="font-all">بنفش</Menu.Item>
          <Menu.Item className="font-all">صورتی</Menu.Item>
        </SubMenu>
        <SubMenu className="font-all" title="اولویت پیام" icon={<ChevronLeft />}>
          <Menu.Item className="font-all">محرمانه</Menu.Item>
          <Menu.Item className="font-all">اولویت بالا</Menu.Item>
          <Menu.Item className="font-all">معمولی</Menu.Item>
        </SubMenu>
        <Menu.Item className="font-all">ذخیره پیش نویس</Menu.Item>
        <Menu.Item className="font-all">افزودن امضا</Menu.Item>
        <Menu.Item className="font-all">زمان بندی ارسال</Menu.Item>
      </Menu>
    );
    return (

      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
    return (
      /*
دراپ داون صفحه ی ارسال پیام جدید
*/
      <div>
        <div className="flex">
          <section className="md:w-2/3">

            <div>
              <Spin spinning={data.loading}>
              <Form
                form={this.form}
                ref={this.formRef}
                onSubmit={this.submit}
                layout="vertical"
              >
                <div className="flex flex-row mt-1 ">

                  {new HInput('ارسال به', 'ارسال', 'w-full  mr-5').required().line().render({
                                                                                         fontFamily: 'yek',
                                                                                       })}
                </div>
                <div className="flex flex-row mt-1 ">
                  {new HInput('رونوشت', 'رونوشت', 'w-full  mr-5').required().line().render({
                                                                                                                               fontFamily: 'yek',
                                                                                                                             })}
                </div>
                <div className="flex flex-row mt-1 ">
                  {new HInput('موضوع', 'موضوع', 'w-full  mr-5').required().line().render({
                                                                                                                               fontFamily: 'yek',
                                                                                                                             })}
                </div>
              </Form>
              </Spin>
              <div className="mt-5 ">
                <Card className="border-none" title="">
                  <ReactQuill
                    className="border-none"
                    theme="snow"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Card>

                <div className="mt-10 mr-10 flex flex-col">
                  <span className="font-all">فایل پیوست</span>
                  <Upload>
                    <div id="border-one" className="w-24 h-24 mt-5"></div>
                  </Upload>
                  <div id="border-two" className="mt-5 h-0" />
                  <div className="flex flex-row mt-5">
                    <Button className="text-white bg-blue-500 font-all">ارسال پیام</Button>
                    <Paperclip className=" text-gray-700 mr-5 mt-1" />
                    <Smile className=" text-gray-700 mr-5 mt-1" />
                    <Dropdown overlay={menuTwo}>
                      <MoreHorizontal className=" text-gray-700 mr-5 mt-1" />
                    </Dropdown>
                    <Button className="absolute ml-5 left-0 font-all">لغو</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
        }}
      />
    );
  }
}
