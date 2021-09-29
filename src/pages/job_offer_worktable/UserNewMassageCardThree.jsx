/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/05-11:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
export default class UserNewMassageCardThree extends PureComponent {
  render() {
    return (
      <div className="-mt-5 ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <img
                id="border-six"
                className="absolute   w-16  h-12  mt-1 object-contain"
                src="images/image2.jpg"
                alt="shakiba"
              />
              <span className="mr-16  font-all  text-xs">مهدی حسینی</span>
              <span
                style={{
                  marginRight: '18.8rem',
                }}
                className=" font-all text-xs"
              >
                13:58
              </span>
            </div>
            <div className="pl-64 font-all   text-xs text-gray-800">درخواست سلامت</div>
            <div className=" font-all pl-48 text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
