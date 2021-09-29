import React, { PureComponent, Fragment } from 'react';
import { X } from 'react-feather';
import { Button, Checkbox, ConfigProvider } from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import { Calendar } from 'antd-jalali';
export default class MenuForConformation extends PureComponent {
  render() {
    /*
دراپ داون تایید برای مصاحبه وتقویم جلالی
*/
    return (
      <Fragment>
        <div className="flex flex-row">
          <span className="w-36	h-6 text-sm	font-bold 	text-black		">زمان آزاد شما برای مصاحبه</span>
          <X onChange={this.handleCancel} className="absolute left-0 cursor-pointer" />
        </div>
        <div className="w-16 h-8 rounded-lg	">
          <p className="w-64	h-6 text-xs font-normal	font-all		text-gray-600	">
            روزوساعت مناسب جهت مصاحبه را انتخاب کنید
          </p>
        </div>
        <div>
          <ConfigProvider locale={fa_IR} direction="rtl">
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
          </ConfigProvider>
          <div className="flex flex-row mr-8 mt-3">
            <div className="w-16 h-8 rounded-lg bg-blue-100 	">
              <span className="w-6 h-6 	 text-sm font-medium  mr-5	black-color-five font-all	">
                9تا11
              </span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 	 text-sm font-medium  mr-4	black-color-five	font-all">
                11تا13
              </span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 	 text-sm font-medium  mr-4	text-black font-all	">13تا15</span>
            </div>
            <div className="w-16 h-8 rounded-lg bg-blue-100 mr-3 	">
              <span className="w-6 h-6 	 text-sm font-medium  mr-4	text-black font-all	">15تا17</span>
            </div>
          </div>
          <Checkbox className="mr-6 mt-3 text-xs font-normal	font-regular  text-gray-600 font-all		">
            محدودیتی درتاریخ وزمان مصاحبه ندارم
          </Checkbox>
          <Button
            style={{
              width: 306,
            }}
            className="bg-green-500  h-10 font-extrabold	 not-italic	 text-white items-center flex mt-6 p-5 px-20 font-all  mr-4"
          >
            تایید وثبت زمان پیشنهادی
          </Button>
        </div>
      </Fragment>
    );
  }
}
