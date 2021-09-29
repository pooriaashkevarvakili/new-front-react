/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/05-11:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Dropdown } from 'antd';
import { AccountCircle } from 'rmdi';
import MenuTwoCardNewMassage from '@/pages/job_offer_worktable/MenuTwoCardNewMassage';
export default class UserNewMassageCardOne extends PureComponent {
  render() {
    return (
      /*
صفحه صندوق پیام قسمت بیمه
*/
      <div className="-mt-5">
        <div className="container">
          <div></div>
          <div>
            <div>
              <AccountCircle className="absolute   " size={65} />
              <span className="card-three text-xs font-all">بیمه ایران</span>
              <span className=" ml-6 margin-right-two text-xs font-all">08:24</span>
            </div>
            <div className="card-four text-xs text-gray-800 font-all">فرم بیمه تکمیلی</div>
            <div className=" text-xs card-five text-gray-800 font-all">
              با سلام به استیحضار می رسانم
            </div>
            <div className="mr-16 mt-2 flex flex-row">
              <span className="  text-purple-500 bg-purple-200 font-xs   font-all" id="card-one">
                بیمه
              </span>
              <span
                id="card-two"
                className="text-yellow-500 w-24 font-xs font-all   bg-yellow-200 mr-2 px-2 "
              >
                برون سازمانی
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '95%',
          }}
          className="border-solid mt-2 ml-10  line-border"
        />
      </div>
    );
  }
}
