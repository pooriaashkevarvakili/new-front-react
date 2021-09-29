/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): mrAzizan
- Date Created: 1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is class of job offer module.
- All of the CRUD operation manage by this bloc.
- This class use [JobOfferBloc] and [components]
- ----------------------------------------------------------------------------------- */
import { Button, Card, Drawer, Dropdown, Menu, Tabs, Tag } from 'antd';
import React, { Component } from 'react';
import MoreInfoForm from './components/MoreInfoForm';
import Bloc from './model/Bloc';
import { PageContainer } from '@ant-design/pro-layout';
import CreateForm from '@/pages/job_offer/components/CreateForm';
import RecentActivities from '@/pages/job_offer/components/RecentActivities';
import TableModel, { TableModelCol } from '@/components/Htable/TableModel';
import HTableComponent from '@/components/Htable/HTableComponent';
import { Add, Clear, DoNotDisturbOn, Edit, More, MoreHoriz } from 'rmdi';
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
              className="flex items-center ml-6 color-grey-text-icon  font-medium text-xs"
              onClick={() => this.showDrawerInfo(record)}
            >
              {<More className="ml-2 color-grey-icon" />} اطلاعات بیشتر
            </span>
          </Menu.Item>
          <Menu.Item key="1">
            <span className="flex items-center ml-6 color-grey-text-icon font-medium text-xs">
              {<DoNotDisturbOn className="ml-2 color-grey-icon" />}غیرفعال کردن
            </span>
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
          <Menu.Item key="3">
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
        title="ثبت درخواست استخدام "
        visible={this.state.visible}
        onClose={this.onClose}
        placement="left"
      >
        <CreateForm />
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
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab=" جزییات " key="1">
            <MoreInfoForm model={this.state.tempRow} />
          </TabPane>
          <TabPane tab="وضعیت درخواست" key="2">
            <RecentActivities model={this.state.tempRow} />
          </TabPane>
        </Tabs>
      </Drawer>
    );
    const tbl = new TableModel('/user', 'جدول روز');
    tbl.cols.push(
      new TableModelCol('job_titles', 'عنوان شغل', 'font-bold font-weight-700 color-dark').sort(),
    );
    tbl.cols.push(new TableModelCol('applicant_count', 'متقاضیان'));
    tbl.cols.push(new TableModelCol('departments', 'دپارتمان').sort());
    tbl.cols.push(new TableModelCol('work_places', 'محل کار').sort());
    tbl.cols.push(new TableModelCol('send_date', 'تاریخ ایجاد').sort());
    tbl.cols.push(new TableModelCol('sts_str', 'وضعیت').customRender(status).sort());
    tbl.cols.push(new TableModelCol('option', 'عملیات').customRender(operation));
    return (
      <PageContainer title={false}>
        <Card bodyStyle={{ padding: 0 }}>
          {drawer}
          {informationDrawer}
          <div className="flex items-center">
            <h2 className="flex-1 m-8 font-extrabold color-dark">درخواست استخدام</h2>
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
              ثبت درخواست استخدام
            </Button>
          </div>
          <HTableComponent className="w-full" model={tbl} />
        </Card>
      </PageContainer>
    );
  }
}
export default TableList;
