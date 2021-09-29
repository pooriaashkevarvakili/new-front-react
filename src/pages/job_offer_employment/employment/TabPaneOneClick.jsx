/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { FileText } from 'react-feather';
import RecentActivities from './RecentActivities';
import TabPaneOneForm from './TabPaneOneForm';
export default class TabPaneOneClick extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    /*
تپ پین اول قبل کلیک
*/
    return (
      <div className="flex">
        <section className="md:w-2/3">
          <section className="flex items-center justify-center ">
            <section className="md:w-2/3">
              <div className="flex flex-wrap flex-col  items-center justify-center ml-10   mt-24 ">
                <FileText size={40} />
                <div className="mt-5">
                  <p className="font-regular font-all">هنوز مصاحبه ای با متقاضی انجام نشده است</p>
                </div>
                <div>
                  <TabPaneOneForm />
                </div>
              </div>
            </section>
          </section>
        </section>
        <RecentActivities />
      </div>
    );
  }
}
