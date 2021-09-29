/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/24-13:34
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
import ModalTitleMenu from '@/pages/job_offer_employment/employment/ModalTitleMenu';
export default class ModalTitleTapPane extends PureComponent {
  render() {
    const menuOne = (
      <div className=" bg-white	height-500 mr-56" style={{ width: 336,height:550 }}>
        <ModalTitleMenu />
      </div>
    );
    return (
      /*
پروفایل تپ پین
*/
      <Fragment>
        <AccountCircle size={130} color="lightgray" />
        <div className="flex flex-col flex-1">
          <div>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              className="w-64  font-bold"
              size="large"
            />
          </div>
          <div className="flex flex-row items-center text-xs py-2">
            <div className="flex">
              <Disc className="-mt-1" color="#ffa360" />
              <span className="text-orange-500 font-all ">متقاضی جدید</span>
            </div>
            <p className="mt-2 text-gray-500 text-xs mr-3 font-all">آپلود شده در 5 خرداد</p>
          </div>
          <div>
            <SendResume />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div
            className="inline-flex items-center text-gray-600
                cursor-pointer
                 hover:text-blue-500 dashed-underline mb-2"
          >
            <Bookmark size={16} />
            <span className="font-all">افزودن به لیست مخاطب</span>
          </div>
          <div>
            <Dropdown overlay={menuOne} placement="bottomCenter" arrow>
              <Button className=" text-white  font-all text-sm  font-bold bg-green-500">
                تایید برای مصاحبه
              </Button>
            </Dropdown>
            <RejectTheApplicant />
          </div>
        </div>
      </Fragment>
    );
  }
}
