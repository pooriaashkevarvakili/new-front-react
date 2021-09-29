/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-15:55
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import ModalOne from './ModalOne';
import Office from './Office';
import {
  Input,
  Select,
  Button,
  Card,
  Checkbox,
  Dropdown,
  Switch,
  Empty,
  Tag,
  Menu,
  Modal,
} from 'antd';
import ModalSearch from './ModalSearch';
import { Search, ChevronDown, ArrowRight } from 'react-feather';
import JobOfferPipelineBloc from '@/pages/bloc/Model/JobOfferPipelineBloc';
import BlocBuilder from 'bloc-builder-react';
import Tables from './Tables';
import AddApplicants from './AddApplicants';
export default class CardOne extends PureComponent {
  constructor(props) {
    super(props);
    this.bloc = new JobOfferPipelineBloc();
  }
  titleSearchChange() {
    const dataSearch = [];
    dataSearch.filter((data) => {
      return data.name.toLowerCase().includes(dataSearch.toLowerCase());
    });
  }
  overlayStatusDropDown() {
    const renderRow = (item, checked) => {
      return (
        <div key={item.id} className="p-2">
          <Checkbox
            checked={checked}
            onChange={() => {
              this.bloc.toggleStatus(item);
            }}
          >
            {item.title}
          </Checkbox>
        </div>
      );
    };
    return (
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error || !data) return <Empty />;
          return (
            <Card bodyStyle={{ padding: 0 }}>
              <div className="relative">
                <div className="max-height-200 overflow-auto">
                  {data.status.map((item) => renderRow(item, this.bloc.hasChecked(item)))}
                </div>
                <div className="flex justify-end footer-dropdown">
                  <Button className="ml-4 font-all">رد کردن</Button>
                  <Button className="font-all" type="primary">
                    اعمال
                  </Button>
                </div>
              </div>
            </Card>
          );
        }}
      />
    );
  }
  render() {
    const menu = (
      <Menu
        className="bg-white "
        style={{
          width: 262.7,
          height: 335.9,
        }}
      >
        <ModalSearch />
      </Menu>
    );
    const { Option } = Select;
    return (
      /*
جداول
*/
      <div>
        <div className="flex">
          <section className="md:w-11/12">
            <div className="flex  flex-row cursor-pointer ">
              <span className="">
                <ArrowRight style={{
                  color:"#5685ee"
                }} className="flex items-center " />
              </span>
              <p  style={{
                color:"#5685ee"
              }} className=" text-sm font-all  font-bold">بازگشت</p>
            </div>

            <div className="flex flex-wrap flex-col -mt-3">
              <h2 className="font-extrabold font-all font-bold  text-dark-100">
                برنامه نویس اندروید
              </h2>
              <div className="flex flex-row items-center">
                <span className="flex -mt-4  items-center font-normal  ">
                  <Office />
                </span>
                <p className="color-gray-nine font-all  font-regular">فنی،دفترمرکزی</p>
              </div>
            </div>
            <div className="flex flex-row">
              <Input
                className="w-64   font-all font-bold "
                onclick={(e) => e.target.value}
                onChange={this.titleSearchChange}
                prefix={<Search />}
                type="text"
                placeholder="جستجو نام متقاضی"
              />
              <div className="flex flex-row mr-2 ">
                <Input.Group compact className="h-10">
                  <Select defaultValue="تاریخ ارسال" className="w-32 h-10  font-all">
                    <Option className="font-all" value="یک روز قبل">
                      یک روز قبل
                    </Option>
                    <Option className="font-all" value="یک هفته اخیر">
                      یک هفته اخیر
                    </Option>
                    <Option className="font-all" value="یک ماه اخیر">
                      یک ماه اخیر
                    </Option>
                    <Option className="font-all" value="همه زمان ها">
                      همه زمان ها
                    </Option>
                  </Select>
                </Input.Group>
              </div>

              <Dropdown trigger="click" overlay={this.overlayStatusDropDown()} placement="topRight">
                <Button className="flex items-center p-4 mr-2">
                  <BlocBuilder
                    builder={({ error, data }) => {
                      if (error || !data) return <div className="font-all">خطا</div>;
                      return (
                        <div className="flex">
                          {data.activeStatus.length > 0 ? (
                            <div>
                              {data.activeStatusTiny.map((item) => (
                                <Tag
                                  color="success"
                                  key={item.id}
                                  closable={true}
                                  onClose={() => {
                                    console.log('item ===> ', item);
                                    this.bloc.toggleStatus(item);
                                  }}
                                >
                                  {item.title}
                                </Tag>
                              ))}
                            </div>
                          ) : (
                            <span className="pl-4 font-medium font-all">وضعیت رزومه</span>
                          )}
                          <span>{data.activeStatus.length > 3 ? '...' : ''}</span>
                        </div>
                      );
                    }}
                    subject={this.bloc.subject}
                  />
                  <ChevronDown className="p-0" />
                </Button>
              </Dropdown>
              <div className="mr-5">
                <ModalOne />
              </div>
              <div className="absolute left-0">
                <AddApplicants />
              </div>
            </div>
          </section>
          <Dropdown className="cursor-pointer" overlay={menu} placement="bottomCenter" arrow>
            <img className="w-12 h-12" src="/images/eclipse1.png" alt="" />
          </Dropdown>
          <img className="w-12 h-12" src="/images/image4.png" alt="" />
          <img className="w-12 h-12" src="/images/image7.png" alt="" />
          <img className="ml-2 w-12 h-12" src="/images/image9.jpg" alt="" />
          <Switch
            checkedChildren="فعال"
            unCheckedChildren="غیرفعال"
            className="mt-2 bg-green-500 font-bold"
          />
        </div>
        <Tables />
      </div>
    );
  }
}
