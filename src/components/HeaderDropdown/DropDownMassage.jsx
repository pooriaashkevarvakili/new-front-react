/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/06-9:34
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
-section line 23 to 24 header Dynamic
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';

export default class DropDownMassage extends PureComponent {
  render() {
    const border = {
      border: 'solid 0.5px #d9d9d9',
    };
    return (
      <div>
        <div className="container mt-5">
          <div></div>
          <div>
            <div>
              <img className="absolute mr-2 w-10 h-10" src="/images/image1.jpg" alt="khanum" />
              <span className="mr-16 text-gray-500 font-all font-light text-xs">8دقیقه قبل</span>
            </div>
            <div className="mr-16  ">
              <span className="font-bold font-all text-black text-xs">علیرضا فتحی</span>
              <span className="text-xs font-all text-gray-600">،یک درخواست استخدام جدید برای</span>
            </div>
            <div className="mr-16 text-xs font-all color-gray-text-watch">
              کارشناس حسابداری ایجاد کرده است
            </div>
          </div>
        </div>
        <div
          style={border}
          id="dropdown-lastactivity"
          className="mr-2 mt-2 mr-2 w-11/12 h-0 mt-3"
        />
        <div className="container mt-5">
          <div></div>
          <div>
            <div>
              <img className="absolute mr-2 w-10 h-10" src="/images/image1.jpg" alt="khanum" />
              <span className="mr-16 text-gray-500 font-all font-light text-xs">8دقیقه قبل</span>
            </div>
            <div className="mr-16  ">
              <span className="font-bold font-all text-black text-xs">علیرضا فتحی</span>
              <span className="text-xs font-all text-gray-600">،یک درخواست استخدام جدید برای</span>
            </div>
            <div className="mr-16 font-all text-xs color-gray-text-watch">
              کارشناس حسابداری ایجاد کرده است
            </div>
          </div>
        </div>
      </div>
    );
  }
}
