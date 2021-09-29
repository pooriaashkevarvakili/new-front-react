/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/26-8:28
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Upload } from 'antd';
import Attach from '@/pages/job_offer_worktable/svg/attach.svg';

export default class SendsNewMassageCardOneDelete extends PureComponent {
  render() {
    return (
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div className="flex flex-row">
              <img
                id="border-six"
                className="absolute   w-16  h-12  mt-1 object-contain"
                src="images/image3.jpg"
                alt="shakiba"
              />
              <span className="mr-16  font-all line-through	 text-xs">علیرضا امینی</span>

              <span className="absolute left-0 ml-4 font-all text-xs">13:58</span>
            </div>
            <div className="flex flex-row">
              <span className=" pr-16 font-all line-through	  text-xs text-gray-800">
                درخواست افزایش حقوق
              </span>
              <Upload>
                <span>
                  <img className="pr-64" src={Attach} />
                </span>
              </Upload>
            </div>

            <div className="card-two -mt-1 font-all line-through	 text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
