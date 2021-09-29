/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import CompletionOfDocuments from './CompletionOfDocuments';
import CardTable from './CardTable';
import Interview from './InterView';
import ConformationForInterview from './Confirmationforinterview';
import Recruitment from './Recruitment';
export default class Tables extends PureComponent {
  render() {
    return (
      /*
جدول ها
*/
      <section className="flex  flex-wrap">
        <div
          style={{
            backgroundColor: '#ededed',
          }}
          className="  w-1/5 mt-5 rounded-lg"
        >
          <h3 className="font-bold font-all text-black mr-6 mt-3 font-bold ">متقاضیان</h3>
          <span className="flex flex-col w-1/6 mr-5">
            <CardTable />
          </span>
        </div>
        <div
          style={{
            backgroundColor: '#ededed',
          }}
          className="  w-1/5 mr-4 mt-5 rounded-lg "
        >
          <h3 className="font-bold font-all text-black mr-6 mt-3 font-bold ">تایید برای مصاحبه</h3>
          <span className="flex flex-col w-1/6 mr-5">
            <ConformationForInterview />
          </span>
        </div>
        <div
          style={{
            backgroundColor: '#ededed',
          }}
          className="  w-1/5  mr-4 mt-5 rounded-lg"
        >
          <h3 className="font-bold font-all text-black mr-6 mt-3 font-bold "> مصاحبه</h3>
          <span className="flex flex-col w-1/6 mr-5">
            <Interview />
          </span>
        </div>
        <div
          style={{
            backgroundColor: '#ededed',
          }}
          className="  w-1/5  mr-4 mt-5 rounded-lg "
        >
          <h3 className="font-bold font-all text-black mr-6 mt-3 font-bold ">تکمیل مدارک</h3>
          <span className="flex flex-col w-1/6 mr-5">
            <CompletionOfDocuments />
          </span>
        </div>
        <div
          style={{
            backgroundColor: '#ededed',
          }}
          className="  w-1/5  -mr-12 mt-5"
        >
          <h3 className="font-bold font-all text-black mr-6 mt-3 font-bold ">استخدام</h3>
          <span className="flex font-all flex-col w-1/6 mr-5">
            <Recruitment />
          </span>
        </div>
      </section>
    );
  }
}
