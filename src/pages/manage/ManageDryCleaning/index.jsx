/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/28-9:30
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Dropdown, Menu, Table } from 'antd';
import AddDryCleaning from './AddDryCleaning';
import { FileText, MoreHorizontal, XCircle } from 'react-feather';
const menu = (
  <Menu className="w-40 h-20">
    <Menu.Item>
      <div className="flex flex-row">
        <span>
          <FileText />
        </span>
        <span>ویرایش</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="flex flex-row">
        <span>
          <XCircle />
        </span>
        <span className="font-all">حذف</span>
      </div>
    </Menu.Item>
  </Menu>
);
const TreePoints = (
  <Dropdown overlay={menu} placement="bottomLeft" arrow>
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      <MoreHorizontal />
    </a>
  </Dropdown>
);
const columns = [
  {
    title: 'نام شهر ',
    dataIndex: 'name',
    tree: 'TreePoints',
  },
  {
    title: 'عنوان خشکشویی',
    dataIndex: 'title',
  },
  {
    title: 'عنوان ادرس ',
    dataIndex: 'titleAddress',
  },
  {
    title: 'آدرس ',
    dataIndex: 'address',
  },
  {
    title: 'تلفن اول',
    dataIndex: 'telOne',
  },
  {
    title: 'تلفن دوم',
    dataIndex: 'telTwo',
  },
  {
    title: 'تلفن همراه',
    dataIndex: 'mobile',
  },
  {
    title: 'عملیات',
    dataIndex: 'operation',
  },
];
const data = [
  {
    key: '1',
    name: 'تهران',
    title: 'خشک شویی ارغوان',
    titleAddress: 'یوسف آباد، انتهای خیابان ۱۲، نرسیده به جهان آرا،نبش ساجدی',
    address: 'زعفرانیه، خیابان مقدس اردبیلی، میدان الف، مجتمع تجاری پالادیوم، طبقه همکفBواحد۸',
    mobile: '۰۹۱۰۹۸۷۳۳۲۸',
    telOne: '88009451',
    telTwo: '۲۲۶۶۱۵۶۶',
    operation: TreePoints,
  },
  {
    key: '2',
    name: 'اراک',
    telOne: '26400112',
    telTwo: '',
    title: 'خشک شویی اطلس',
    mobile: '',
    titleAddress: '',
    address: 'میرداماد، خیابان اطلسی، پلاک ۱۴، جنب نانوایی',
    operation: TreePoints,
  },
  {
    key: '3',
    name: 'اصفهان',
    telOne: '22548797',
    telTwo: '',
    mobile: '',
    title: 'خشک شویی سیلن',
    titleAddress: '',
    address: 'خیابان پاسداران، نرسیده به چهار راه پاسداران، مرکز خرید جوادالائمه، پلاک ۸۳',
    operation: TreePoints,
  },
  {
    key: '4',
    name: 'بابل',
    telOne: '66465642',
    telTwo: '6646612',
    mobile: '',
    title: 'خشک شویی ژاندرک',
    titleAddress: '',
    address: 'خیابان انقلاب، خیابان ابوریحان، مقابل خانه کارگر، پلاک ۵۳',
    operation: TreePoints,
  },
  {
    key: '5',
    name: 'بندرعباس',
    mobile: '',
    telOne: '88215553',
    telTwo: '',
    title: 'خشک شویی آنا',
    titleAddress: '',
    address: ' ونک، خیابان ملاصدرا، خیابان شیخ بهایی شمالی، پلاک ۹۰',
    operation: TreePoints,
  },
  {
    key: '6',
    name: 'رشت',
    mobile: '',
    telOne: '77905744',
    telTwo: '77905743',
    title: 'خشک شویی نگین شرق',
    titleAddress: '',
    address: ' نارمک، خیابان آیت، نبش چمن شرقی(شهید گلستانی)، جنب کفش ملی، پلاک ۶۹',
    operation: TreePoints,
  },
  {
    key: '7',
    name: 'ساری',
    mobile: '',
    telOne: '22587000',
    telTwo: '',
    title: 'خشک شویی لیبا',
    titleAddress: '',
    address: 'پاسداران، خیابان اختیاریه جنوبی، نبش کوچه نیلوفر',
    operation: TreePoints,
  },
  {
    key: '8',
    name: 'شهرکرد',
    mobile: '',
    telOne: '08633124061',
    telTwo: '',
    title: 'خشک شویی امیرکبیر',
    titleAddress: '',
    address: 'جنب شهر بازی لاله، هتل امیر کبیر',
    operation: TreePoints,
  },
  {
    key: '9',
    name: 'ساری',
    telOne: '08633124061',
    telTwo: '',
    mobile: '',
    title: 'خشک شویی زمرد',
    titleAddress: '',
    address: 'خیابان شریعتی، کوچه شرف الدین، کوچه ورپشتی',
    operation: TreePoints,
  },
  {
    key: '10',
    mobile: '',
    telOne: '8821553',
    telTwo: '',
    name: 'شیراز',
    title: 'خشک شویی دی',
    titleAddress: '',
    address: 'خیابان شریعتی، کوچه شرف الدین، کوچه ورپشتی',
    operation: TreePoints,
  },
];
export default class Occasion extends PureComponent {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      /*
مدیریت خشک شویی
جدول ودکمه ی افزودن خشک شویی ها
*/
      <section>
        <div
          className="bg-white"
          style={{
            width: '1650px',
            height: '853px',
          }}
        >
          <div className="flex">
            <section className="md:w-2/3">
              <section className="flex  ">
                <div className="mt-5 mr-5">
                  <span className="text-2xl font-all font-extrabold">مدیریت خشکشویی</span>
                  <AddDryCleaning />
                </div>
              </section>
            </section>
          </div>
          <section>
            <div className="mt-6">
              <Table
                className="font-xs w-full"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />{' '}
            </div>
          </section>
        </div>
      </section>
    );
  }
}
