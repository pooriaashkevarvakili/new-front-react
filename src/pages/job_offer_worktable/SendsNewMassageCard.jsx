/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/26-8:28
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import Point from '@/pages/job_offer_worktable/svg/point.svg';
export default class SendsNewMassageCard extends PureComponent {
  render() {
    return (
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-ro">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12   object-contain"
                  src="images/image3.jpg"
                  alt="shakiba"
                />
                <span className="mr-16  font-all  text-xs">علیرضاتهرانی</span>
                <span className="flex pr-2">
                  <img src={Point} alt="" />
                </span>
                <span className="margin-right-three font-all  text-xs">13:58</span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افزایش حقوق</div>
            <div className="card-two font-all text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
