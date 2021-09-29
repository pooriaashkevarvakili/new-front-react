/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/30-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Button, Dropdown, Menu, Table } from 'antd';
import { FileText, MoreHorizontal, XCircle, Plus } from 'react-feather';

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
    title: 'نام مناسبت ',
    dataIndex: 'name',
    tree: 'TreePoints',
  },
  {
    title: 'تاریخ',
    dataIndex: 'tel',
  },
  {
    title: 'جلمه روز',
    dataIndex: 'email',
  },
  {
    title: 'عملیات',
    dataIndex: 'title',
  },
];
const data = [
  {
    key: '1',
    name: 'سالگردتاسیس هاکوپیان',
    tel: '3آذر',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '2',
    name: 'روزملی صنعت پوشاک',
    tel: '20آذر',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '3',
    name: 'روزکارمند',
    tel: '5بهمن',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '4',
    name: 'روزحسابدار',
    tel: '12اسفند',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '5',
    name: 'جشن کریسمس',
    tel: '8دی',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '6',
    name: 'میلادحضرت مسیح',
    tel: '2دی',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '7',
    name: 'شب یلدا',
    tel: '30آذر',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '8',
    name: 'روزپدر',
    tel: '25خرداد',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '9',
    name: 'روزمادر',
    tel: '30شهریور',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
  },
  {
    key: '10',
    name: 'روزبرنامه نویس',
    tel: '4تیر',
    email: 'سالگردتاسیس شرکت هاکوپیان برهمه پرسنل گرامی باد',
    title: TreePoints,
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
مدیریت مناسبت ها
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
                  <span className="text-2xl font-all font-extrabold ">مدیریت مناسبت ها</span>
                  <Button
                    style={{
                      backgroundColor: '#cc9900',
                    }}
                    className="ml-5  absolute  left-0"
                  >
                    <div className="flex flex-row">
                      <span>
                        <Plus className="text-white" />
                      </span>
                      <span className="text-white font-all ">افزودن مناسبت جدید</span>
                    </div>
                  </Button>
                </div>
              </section>
            </section>
          </div>
          <section>
            <div className="mt-6">
              <Table rowSelection={rowSelection} columns={columns} dataSource={data} />{' '}
            </div>
          </section>
        </div>
      </section>
    );
  }
}
