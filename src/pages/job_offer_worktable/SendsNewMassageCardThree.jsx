/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/26-8:28
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
export default class SendsNewMassageCardThree extends PureComponent {
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
                src="images/image1.jpg"
                alt="shakiba"
              />
              <span className="mr-16  font-all  text-xs">ناهید زاد فتح الله</span>
              <span className=" font-all margin-right-three text-xs">13:58</span>
            </div>
            <div className="pl-64 font-all  text-xs text-gray-800">درخواست سلامت</div>
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
