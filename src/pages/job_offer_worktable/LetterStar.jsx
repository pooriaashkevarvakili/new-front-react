/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/26-8:28
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
export default class LetterStar extends PureComponent {
  render() {
    return (
      /*
میزکار پیام های منتخب کارد اول
*/
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-row">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12   object-contain"
                  src="images/image3.jpg"
                  alt="shakiba"
                />
                <span className="mr-16  font-all  text-xs">علیرضاتهرانی</span>

                <span className="margin-right font-all  text-xs">13:58</span>
                <span style={{}} className="absolute left-0 ml-16 flex">
                  <img className="w-5 h-5 -mt-1" src="images/starone.png" alt="" />
                </span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افزایش حقوق</div>
            <div className="card-two font-all  text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
