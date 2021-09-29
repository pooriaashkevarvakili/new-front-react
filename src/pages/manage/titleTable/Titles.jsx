/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { Input, Table, Menu, Dropdown } from 'antd';
import { Search, FileText, MoreHorizontal, XCircle } from 'react-feather';
import React, { PureComponent } from 'react';
import NewTitle from './NewTitle';
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
    title: 'عنوان',
    dataIndex: 'name',
  },

  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},

  {
    title: 'عملیات',
    dataIndex: 'title',
  },
];
const data = [
  {
    key: '1',
    name: 'کارشناس',
    title: '0912-3456785',
  },
  {
    key: '2',
    name: 'کاردان',
    title: '0912-3456785',
  },
  {
    key: '3',
    name: 'کاراموز',
    title: '0912-3456785',
  },
  {
    key: '4',
    name: 'مدیر',
    title: '0912-3456785',
  },
  {
    key: '5',
    name: 'سرپرست',
    title: '0912-3456785',
  },
  {
    key: '6',
    name: 'مدیرپروژه',
    title: '0912-3456785',
  },
  {
    key: '7',
    name: 'مدیرعامل',
    title: '0912-3456785',
  },
  {
    key: '8',
    name: 'معاونت',
    title: '0912-3456785',
  },
  {
    key: '9',
    name: 'قائم مقام',
    title: '0912-3456785',
  },
  {
    key: '10',
    name: 'مشاور',
    title: '0912-3456785',
  },
];

export default class Titles extends PureComponent {
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
عناوین
*/
      <section>
        <div
          className="bg-white"
          style={{
            width: '1566px',
            height: '853px',
          }}
        >
          <div className="flex">
            <section className="md:w-2/3">
              <section className="flex  ">
                <div className="mt-5 mr-5">
                  <span className="text-2xl font-all font-extrabold">عناوین</span>
                </div>
              </section>
              <div className="flex flex-row mt-5 mr-5">
                <Input
                  size="large"
                  prefix={<Search />}
                  className="w-6/12 h-16"
                  placeholder="جستجو"
                />
                <span className="absolute left-0 ml-24">
                  <NewTitle />
                </span>
              </div>
            </section>
          </div>
          <div className="mt-6">
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
        </div>
      </section>
    );
  }
}
