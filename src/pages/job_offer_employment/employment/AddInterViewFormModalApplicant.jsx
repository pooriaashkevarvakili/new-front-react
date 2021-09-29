/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/04-11:40
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { AccountCircle } from 'rmdi';
import { Button, Dropdown, Input } from 'antd';
import { Bookmark, Disc } from 'react-feather';
import SendResume from '@/pages/job_offer_employment/employment/SendResume';
import RejectTheApplicant from '@/pages/job_offer_employment/employment/RejectTheApplicant';
import MenuForConformation from '@/pages/job_offer_employment/employment/MenuForConformation';
export default class AddInterViewFormModalApplicant extends PureComponent {
  render() {
    const menuOne = (
      <div
        className=" bg-white	 mr-40"
        style={{
          width: 336,
height:600
        }}
      >
        <MenuForConformation />
      </div>
    );
    return (
      <Fragment>
        <AccountCircle size={130} color="lightgray" />
        <div className="flex flex-col flex-1">
          <div>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              className="w-64 font-bold"
              size="large"
            />
          </div>
          <div className="flex flex-row items-center text-xs py-2">
            <div className="flex text-orange-500">
              <Disc className="-mt-1" color="#ffa360" />
              <span className="text-orange-500 font-all">متقاضی جدید</span>
            </div>
            <p className="mt-2 text-gray-600 text-xs mr-3 font-all">آپلود شده در 5 خرداد</p>
          </div>
          <div>
            <SendResume />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div
            className="inline-flex font-all items-center text-gray-600
                cursor-pointer
                 hover:text-blue-500 dashed-underline mb-2"
          >
            <Bookmark size={16} />
            <span className="font-all">افزودن به لیست مخاطب</span>
          </div>
          <div>
            <Dropdown overlay={menuOne} placement="bottomCenter" arrow>
              <Button className="text-white bg-green-500 h-10 font-all">تایید برای مصاحبه</Button>
            </Dropdown>
            <RejectTheApplicant />
          </div>
        </div>
      </Fragment>
    );
  }
}
