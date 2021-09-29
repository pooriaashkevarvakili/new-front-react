/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/09/24-8:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Alarm } from 'rmdi';
import { FileText, Bell, List } from 'react-feather';
import { Switch } from 'antd';
export default class AddWidgetsModalTwo extends PureComponent {
  render() {
    return (
      /*
داشبورد افزودن ابزارک ستون دوم
*/
      <Fragment>
        <div className="flex ">
          <section className="md:w-4/6 mr-24 ">
            <div className="container">
              <div></div>
              <div>
                <div>
                  <FileText className="absolute widget-modal  w-24 h-24 text-blue-500  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 text-base font-all font-extrabold w-56">یادداشت</span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 font-all mt-3 w-40  text-xs color-gray-text-watch">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 font-all mt-2 w-40  text-xs color-gray-text-watch">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
            <div className="container mt-16">
              <div></div>
              <div>
                <div>
                  <Bell className="absolute widget-modal   w-24 h-24  text-blue-500  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">
                      آخرین اعلان ها
                    </span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 font-all mt-2 w-40  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 font-all w-40  text-xs text-gray-600">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
            <div className="container mt-16">
              <div></div>
              <div>
                <div>
                  <List className="absolute text-blue-500  bg-blue-100 widget-modal w-24 h-24   " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">پروژه ها</span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 font-all mt-2 w-40  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 w-40 font-all text-xs text-gray-600">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
            <div className="container mt-16">
              <div></div>
              <div>
                <div>
                  <Alarm className="absolute text-blue-500  bg-blue-100 widget-modal  w-24 h-24  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">ساعت ورود</span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 font-all mt-2 w-40  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 w-40 font-all  text-xs text-gray-600">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
