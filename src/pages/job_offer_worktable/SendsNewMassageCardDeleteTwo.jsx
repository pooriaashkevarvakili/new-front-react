/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/26-8:28
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
export default class SendsNewMassageCardDeleteTwo extends PureComponent {
  render() {
    return (
      <div className="-mt-3 ">
        <div className="container">
          <div></div>
          <div>
            <div className="flex flex-row">
              <img
                id="border-six"
                className="absolute   w-16  h-12   object-contain"
                src="images/image8.jpg"
                alt="shakiba"
              />
              <span className="mr-16  font-all line-through	 text-xs">حسین مجیدی نژاد</span>

              <span className="absolute left-0 ml-6 font-all text-xs">13:58</span>
            </div>
            <div className="flex flex-row">
              <span className=" pr-16 font-all line-through	  text-xs text-gray-800">
                درخواست افزایش حقوق
              </span>
            </div>
            <div className=" -mt-1 pr-16 font-all line-through	 text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div
          className="border-solid mt-2  line-border "
          style={{
            width: '210%',
          }}
        />
      </div>
    );
  }
}
