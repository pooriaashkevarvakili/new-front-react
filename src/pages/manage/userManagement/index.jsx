/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/30-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Button, Dropdown, Input, Menu, Table } from 'antd';
import { FileText, MoreHorizontal, Search, XCircle } from 'react-feather';
import Excel from './svg/Excel.svg';
import AddNewUser from './AddNewUser';
const menu = (
  <Menu className="w-40 h-20">
    <Menu.Item>
      <div className="flex flex-row">
        <span>
          <FileText />
        </span>
        <span className="font-all">ویرایش</span>
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
    title: 'نام ونام خانوادگی',
    dataIndex: 'name',
    tree: 'TreePoints',
  },
  {
    title: 'شماره موبایل',
    dataIndex: 'tel',
  },
  {
    title: 'نام کاربری',
    dataIndex: 'email',
  },
  {
    title: 'عنوان',
    dataIndex: 'title',
  },
  {
    title: 'وضعیت',
    dataIndex: 'situation',
  },
  {
    title: 'عملیات',
    tree: TreePoints,
  },
];
const data = [
  {
    key: '1',
    name: 'علیرضاسعیدی',
    tel: '0912-3456785',
    email: 'Alireza.saeid@gmail.com',
    title: 'کارشناس',
    situation: 'فعال',
    tree: TreePoints,
  },
  {
    key: '2',
    name: 'مریم عزیزالهی',
    tel: '0919-3452398',
    email: 'Mayam1372@gmail.com',
    title: 'کاردان',
    situation: 'غیرفعال',
    tree: TreePoints,
  },
  {
    key: '3',
    name: 'رضاصابونچی',
    tel: '0912-3456785',
    email: 'Alireza.saeid@gmail.com',
    title: 'مدیر',
    situation: 'فعال',
    tree: TreePoints,
  },
  {
    key: '4',
    name: 'ریحانه محمدزاده',
    tel: '0935-1229832',
    email: 'Mayam1372@gmail.com',
    title: 'کارشناس',
    situation: 'غیرفعال',
    tree: TreePoints,
  },
  {
    key: '5',
    name: 'نویدفدایی',
    tel: '0912-3456785',
    email: 'Alireza.saeid@gmail.com',
    title: 'معاونت',
    situation: 'فعال',
    tree: TreePoints,
  },
  {
    key: '6',
    name: 'حمیدرضاعبدالهی',
    tel: '0912-3456785',
    email: 'Mayam1372@gmail.com',
    title: 'کارشناس',
    situation: 'غیرفعال',
    tree: TreePoints,
  },
  {
    key: '7',
    name: 'پگاه رحمت زاده',
    tel: '0935-1229832',
    email: 'Alireza.saeid@gmail.com',
    title: 'کاردان',
    situation: 'فعال',
    tree: TreePoints,
  },
  {
    key: '8',
    name: 'محمدقاضی آبادی',
    tel: '0912-3456785',
    email: 'Mayam1372@gmail.com',
    title: 'مدیر',
    situation: 'غیرفعال',
    tree: TreePoints,
  },
  {
    key: '9',
    name: 'نسرین لطفی',
    tel: '0919-3452398',
    email: 'Alireza.saeid@gmail.com',
    title: 'کاردان',
    situation: 'فعال',
    tree: TreePoints,
  },
  {
    key: '10',
    name: 'محمدرضاعلی آبادی',
    tel: '0935-1229832',
    email: 'Mayam1372@gmail.com',
    title: 'مدیر',
    situation: 'غیرفعال',
    tree: TreePoints,
  },
];
export default class UserManagement extends PureComponent {
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
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      /*
مدیریت کاربران
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
                  <span className="text-2xl font-extrabold font-all">مدیریت کاربران</span>
                </div>
              </section>
              <div className="flex flex-row mt-5 mr-5">
                <Input
                  size="large"
                  prefix={<Search />}
                  className="w-6/12 h-16"
                  placeholder="جستجو"
                />
                <div className="absolute left-0 flex flex-row">
                  <Button className="ml-5">
                    <div className="flex flex-row">
                      <span className="flex items-center">
                        <img src={Excel} className="w-6 h-6" alt="" />
                      </span>
                      <span className="mr-2">ورود کاربران از فایل اکسل</span>
                    </div>
                  </Button>
                  <AddNewUser />
                </div>
              </div>
            </section>
          </div>
          <section>
            <div className="mt-10">
              <Table rowSelection={rowSelection} columns={columns} dataSource={data} />{' '}
            </div>
          </section>
        </div>
      </section>
    );
  }
}
