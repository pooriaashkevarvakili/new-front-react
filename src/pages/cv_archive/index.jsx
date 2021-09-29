/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is class of table cv archive module.
- This class use [CvArchiveBloc] and [components]
- ----------------------------------------------------------------------------------- */
import { Button, Card, Drawer, Dropdown, Menu, Tabs, Tag } from 'antd';
import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import CreateSingleForm from './../cv_archive/components/single_archive/CreateForm.jsx';
import CreateGroupForm from './../cv_archive/components/group_archive/CreateForm.jsx';
import { Link } from 'umi';
import Bloc from '@/pages/cv_archive/model/Bloc.js';
import MoreInfoForm from '@/pages/cv_archive/components/single_archive/MoreInfoForm';
import TableModel, { TableModelCol } from '@/components/Htable/TableModel';
import HTableComponent from '@/components/Htable/HTableComponent';
import { Clear, Edit, Assignment, Input, MoreHoriz, Add } from 'rmdi';
import CreateForm from '@/pages/job_offer/components/CreateForm';
const { TabPane } = Tabs;

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tempRow: undefined,
      visible: false,
    };
    this.bloc = new Bloc();
  }
  componentDidMount() {
    const data = this.bloc.init();
  }
  onDelete = (id, e) => {
    /*  e.preventDefault();
      const data = this.data.filter(item => item.id !== id);
      this.setData({data})*/
    this.bloc.remove(id);
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawerInfo = (record) => {
    console.log(record);
    this.setState({
      visibleInfo: true,
      tempRow: record,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
      visibleInfo: false,
    });
  };
  render() {
    const status = (_, record) => {
      const colors = {
        1: '#fff4de',
        2: '#1bc57d',
        3: '#e3eeff',
        4: '#ffe2e5',
        5: '#e0fff2',
        6: '#ffe2e5',
        7: '#ff9d55',
        8: '#ff9d55',
      };
      return <Tag color={colors[record.sts]}>{_}</Tag>;
    };
    const operation = (_, record) => {
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <span
              className="flex items-center ml-6 color-grey-text-icon font-medium text-xs"
              onClick={() => this.showDrawerInfo(record)}
            >
              {<Assignment className="ml-2 color-grey-icon" />}مشاهده رزومه
            </span>
          </Menu.Item>
          <Menu.Item key="1">
            <Link
              className="flex items-center ml-6 color-grey-text-icon font-medium text-xs"
              to="/job-offer"
            >
              {<Input className=" ml-2 color-grey-icon" />}
              انتقال به درخواست استخدام
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <span
              className="flex items-center ml-6 color-grey-text-icon font-medium text-xs"
              onClick={this.showDrawer}
            >
              <Drawer>
                <CreateForm id={record} />
              </Drawer>
              {<Edit className="ml-2 color-grey-icon" />} ویرایش
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <span
              className="flex items-center ml-6 color-grey-text-icon font-medium text-xs"
              onClick={(e) => {
                this.onDelete(record.id, e);
              }}
            >
              {<Clear className="ml-2 color-grey-icon" />}حذف
            </span>
          </Menu.Item>
        </Menu>
      );
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {<MoreHoriz className="blue-color" />}
          </a>
        </Dropdown>
      );
    };
    const drawer = (
      <Drawer
        width={500}
        className="font-weight-700"
        title="افزودن متقاضی "
        visible={this.state.visible}
        onClose={this.onClose}
        placement="left"
      >
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="افزودن فردی" className="pl-4 text-center" key="0">
            <CreateSingleForm model={this.state.tempRow} mode="create" />
          </TabPane>
          <TabPane tab="افزودن گروهی" key="1">
            <CreateGroupForm model={this.state.tempRow} />
          </TabPane>
        </Tabs>
      </Drawer>
    );
    const informationDrawer = (
      <Drawer
        width={500}
        className="font-weight-700"
        title="اطلاعات بیشتر "
        visible={this.state.visibleInfo}
        onClose={this.onClose}
        placement="left"
      >
        <MoreInfoForm model={this.state.tempRow} />
      </Drawer>
    );
    const tbl = new TableModel('/user', 'جدول روز');
    tbl.cols.push(new TableModelCol('full_name', 'نام متقاضی').sort());
    tbl.cols.push(new TableModelCol('job_title', 'عنوان شغل'));
    tbl.cols.push(new TableModelCol('send_lacation', 'محل ارسال').sort());
    tbl.cols.push(new TableModelCol('send_date', 'تاریخ ثبت رزومه').sort());
    tbl.cols.push(new TableModelCol('sts_str', 'وضعیت').customRender(status).sort());
    tbl.cols.push(new TableModelCol('option', 'عملیات').customRender(operation));

    return (
      <PageContainer title={false}>
        <Card bodyStyle={{ padding: 0 }}>
          {drawer}
          {informationDrawer}
          <div className="flex items-center">
            <h2 className="flex-1 m-8 font-extrabold color-dark">آرشیو رزومه</h2>
          </div>
          <div className="flex justify-end">
            <Button
              className="m-2 flex items-center"
              type="primary"
              icon={<Add className=" pl-1" color="#fff" />}
              className="flex items-center ml-6"
              onClick={() => {
                this.setState({
                  visible: true,
                });
              }}
            >
              افزودن متقاضی
            </Button>
          </div>
          <HTableComponent className="w-full" model={tbl} />
        </Card>
      </PageContainer>
    );
  }
}
export default TableList;
