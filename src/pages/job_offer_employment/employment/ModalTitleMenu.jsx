/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/11/04-13:25
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { X } from 'react-feather';
import { Button, Checkbox, ConfigProvider } from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import { Calendar } from 'antd-jalali';
import moment from 'moment';
import dayjs from 'dayjs';
export default class ModalTitleMenu extends PureComponent {
  onPanelChange() {
    dayjs.calendar('jalali');
  }
  render() {
    moment.locale('fa');
    return (
      /*
تایید برای مصاحبه وتقویم جلالی
*/
      <Fragment>
        <div className="flex flex-row">
          <span className="w-36	h-6 text-sm	font-bold font-all	text-black		">
            زمان آزاد شما برای مصاحبه
          </span>
          <X onChange={this.handleCancel} className="absolute left-0 cursor-pointer" />
        </div>
        <div className="w-16 h-8 rounded-lg	">
          <p className="w-64	h-6 text-xs font-normal	font-all	tex-gray-600	">
            روزوساعت مناسب جهت مصاحبه را انتخاب کنید
          </p>
        </div>
        <div className="mt-5">
          <ConfigProvider locale={fa_IR} direction="rtl">
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
          </ConfigProvider>
        </div>
        <div className="flex flex-row mr-8 mt-3">
          <div className="w-16 h-8 rounded-lg bg-blue-100 	">
            <span className="w-6 h-6 font-all 	 text-sm font-medium  mr-5	text-black	">9تا11</span>
          </div>
          <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
            <span className="w-6 h-6 	 text-sm font-all font-medium  mr-4	text-black	">11تا13</span>
          </div>
          <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
            <span className="w-6 h-6 	 text-sm font-medium font-all  mr-4	text-black	">13تا15</span>
          </div>
          <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
            <span className="w-6 h-6 	 text-sm font-medium font-all mr-4	text-black	">15تا17</span>
          </div>
        </div>
        <Checkbox className="mr-6 mt-4 text-xs font-normal font-all	font-regular  text-gray-600		">
          محدودیتی درتاریخ وزمان مصاحبه ندارم
        </Checkbox>
        <Button
          style={{
            width: 306,
          }}
          className=" bg-green-500 h-10 font-extrabold font-all	 	 text-white items-center flex mt-4 p-5 px-20  mr-4"
        >
          تایید وثبت زمان پیشنهادی
        </Button>
      </Fragment>
    );
  }
}
