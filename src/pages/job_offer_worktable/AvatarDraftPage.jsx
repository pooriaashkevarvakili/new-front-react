/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/21-11:11
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import Point from '@/pages/job_offer_worktable/svg/point.svg';
import React, { PureComponent } from 'react';

export default class AvatarDraftPage extends PureComponent {
  render() {
    return (
      /*
پیش نویس کارد اول
*/
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-ro">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12   object-contain"
                  src="images/avatar.png"
                  alt="avatar"
                />
                <span className="mr-16  font-all  text-xs">ناشناس</span>
                <span className="flex pr-2">
                  <img src={Point} alt="" />
                </span>
                <span className="margin-right font-all  text-xs">13:58</span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افرایش حقوق</div>
            <div className="pl-48 font-all text-xs text-gray-800">باسلام به استحیضارمی رسانم</div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
