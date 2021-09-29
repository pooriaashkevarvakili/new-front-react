/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/12/13-11:05
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import HInput from '@/pages/bloc/Input/Input';
import { Checkbox, Form } from 'antd';

export default class AddInterViewFormOne extends PureComponent {
  render() {
    return (
      /*
اینپوت های فرم دوم
*/
      <div>
        <div className="flex flex-wrap flex flex-row  ">
          {new HInput('تاریخ مصاحبه', 'dateInterView', 'w-5/12 font-regular mr-3')
            .required().size('large')
            .place('انتخاب کنید')
            .render({})}
          {new HInput('زمان مصاحبه', '', 'w-24 font-regular mr-10')
            .required()
            .timepicker('شروع')
            .render({})}
          <p className="mt-10 mr-2 font-all">تا</p>
          {new HInput('', '', 'w-24 font-regular mr-3 mt-8')
            .required()
            .timepicker('پایان')
            .render({})}
        </div>
        <div className="flex flex-row">
          {new HInput(
            'نوع مصاحبه',
            'interview-title',
            'w-5/12 mt-3 font-regular mr-3',
          )
            .required().size('large')
            .place('انتخاب کنید')
            .render({})}
          {new HInput(
            'محل مصاحبه',
            'location-interview',
            'w-5/12 mr-10 mt-3 font-regular',
          )
            .required().size('large')
            .place('انتخاب کنید')
            .render({})}
        </div>
        <div className="flex flex-row">
          {new HInput('یادداشت', 'noteOne', 'w-5/12 font-regular mr-3')
            .required()
            .place('').size('large')
            .render({})}
          <img
            src="/images/image10.jpg"
            className="w-10 h-10 mt-8 mr-10"
            alt="shakiba"
          />
          <img
            src="/images/image9.jpg"
            className="w-10 h-10 mt-8 mr-3"
            alt="shakiba"
          />
          <img
            src="/images/Group.png"
            className="w-10 h-10 mt-8 mr-3"
            alt="shakiba"
          />
        </div>
  <div>
    <div className="container">
      <div></div>
      <div>
        <div className="border-solid border-width rounded-lg mt-3 w-11/12 p-3 ">
          {new HInput('ارسال متقاضی', 'dateInterView', ' font-regular mr-3')
            .checkbox()
            .render({})}
            <div className="text-xs font-light font-all mr-4 -mt-5">
                زمان بندی مصاحبه برای متقاضی ایمیل وپیامک می شود
            </div>
        </div>
      </div>
    </div>

  </div>
      </div>
    )
  }
}
