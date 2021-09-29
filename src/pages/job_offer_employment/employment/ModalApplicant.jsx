/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/24-14:48
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { AccountCircle } from 'rmdi';
import { Button, Checkbox, ConfigProvider, Dropdown, Input } from 'antd';
import SendResume from './SendResume';
import RejectTheApplicant from './RejectTheApplicant';
import { X, Bookmark, Disc } from 'react-feather';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import 'moment/locale/fa';
import { Calendar } from 'antd-jalali';
export default class ModalApplicant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const menuOne = (
      <div
        className=" bg-white	height-500 mr-40"
        style={{
          width: 336,
          height:560
        }}
      >
        <div className="flex flex-row">
          <span className="w-36	h-6 text-sm	font-bold 	color-black-ten		">
            زمان آزاد شما برای مصاحبه
          </span>
          <X onChange={this.handleCancel} className="absolute left-0 cursor-pointer" />
        </div>
        <div className="w-16 h-8 rounded-lg	">
          <p className="w-64	h-6 text-xs font-all font-normal		text-gray-600	">
            روزوساعت مناسب جهت مصاحبه را انتخاب کنید
          </p>
        </div>
        <div>
          <ConfigProvider locale={fa_IR} direction="rtl">
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
          </ConfigProvider>
          <div className="flex flex-row mr-8 mt-3">
            <div className="w-16 h-8 rounded-lg bg-blue-100 	">
              <span className="w-6 h-6 font-all 	 text-sm font-medium  mr-5	text-black	">9تا11</span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 font-all 	 text-sm font-medium  mr-4	text-black	">11تا13</span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 font-all	 text-sm font-medium  mr-4	text-black	">13تا15</span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 font-all  text-sm font-medium  mr-4	text-black	">15تا17</span>
            </div>
          </div>
          <Checkbox className="mr-6 mt-3 text-xs font-normal	font-regular not-italic	leading-3 text-gray-600		">
            محدودیتی درتاریخ وزمان مصاحبه ندارم
          </Checkbox>
          <Button
            style={{
              width: 306,
            }}
            className="bg-green-500 font-all  font-extrabold	 	 text-white items-center flex mt-6 p-5 px-20  mr-4"
          >
            تایید وثبت زمان پیشنهادی
          </Button>
        </div>
      </div>
    );
    return (
      /*
پروفایل تپ پین
*/
      <div className="flex items-end">
        <AccountCircle size={130} color="lightgray" />
        <div className="flex flex-col flex-1">
          <div>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              className="w-64 font-bold"
              size="large"
            />
          </div>
          <div className="flex flex-row items-center text-xs py-2">
            <div className="flex ">
              <Disc className="-mt-1" color="#ffa360" />
              <span className="text-orange-500 font-all">متقاضی جدید</span>
            </div>
            <p className="mt-2 text-gray-500 text-xs mr-3 font-all">آپلود شده در 5 خرداد</p>
          </div>
          <div>
            <SendResume />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end ">
          <div
            className="inline-flex items-center text-gray-600
                cursor-pointer
                 hover:text-blue-500 dashed-underline mb-4"
          >
            <Bookmark size={16} />
            <span className="font-all">افزودن به لیست مخاطب</span>
          </div>
          <div>
            <Dropdown overlay={menuOne} placement="bottomCenter" arrow>
              <Button className="text-white  bg-green-500  text-sm font-all">
                تایید برای مصاحبه
              </Button>
            </Dropdown>
            <RejectTheApplicant />
          </div>
        </div>
      </div>
    );
  }
}
