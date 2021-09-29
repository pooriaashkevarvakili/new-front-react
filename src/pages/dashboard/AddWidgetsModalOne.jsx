/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/09/24-8:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { Cake, Restaurant } from 'rmdi';
import { User, List } from 'react-feather';
import { Switch } from 'antd';
export default class AddWidgetsModalOne extends PureComponent {
  render() {
    return (
      /*
داشبورد افزودن ابزارک ستون اول
*/
      <Fragment>
        <div className="flex">
          <section className="md:w-3/4">
            <div className="container">
              <div></div>
              <div>
                <div>
                  <Cake className="absolute widget-modal  w-24 h-24 text-blue-500 bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">
                      متولدین امروز
                    </span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 font-all mt-3 w-40  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 font-all mt-2 w-40  text-xs text-gray-600">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
            <div className="container mt-16">
              <div></div>
              <div>
                <div>
                  <List className="absolute text-blue-500 widget-modal w-24 h-24  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">
                      آخرین کارها
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
                  <Restaurant className="absolute text-blue-500 widget-modal w-24 h-24  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 font-all text-base font-extrabold w-56">انتخاب غذا</span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 mt-2 w-40 font-all  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 w-40 font-all  text-xs text-gray-600">
                  -امکان ارسال پیام تبریک
                </div>
              </div>
            </div>
            <div className="container mt-16">
              <div></div>
              <div>
                <div>
                  <User className="absolute text-blue-500 w-24 h-24 widget-modal  bg-blue-100 " />
                  <div className="flex flex-row">
                    <span className="mr-32 text-base font-extrabold font-all w-56">
                      مشخصات پرسنلی
                    </span>
                    <Switch className="mr-10 bg-green-500" />
                  </div>
                </div>
                <div className="mr-32 mt-2 w-40 font-all  text-xs text-gray-600">
                  -نمایش تولد همکاران در هر روز
                </div>
                <div className="mr-32 w-40 font-all text-xs text-gray-600">
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
