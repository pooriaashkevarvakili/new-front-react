/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/18-17:10
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import Menus from '@/pages/job_offer_worktable/Menus';
import Letter from './svg/letter.svg';
export default class ListMassage extends PureComponent {
  render() {
    return (
      /*
میزکار صندوق پست پیام ها
*/
      <Fragment>
        <div className="flex">
          <section className="md:w-3/4">
            <section className="flex items-start  ">
              <section className="md:w-1/3">
                <Menus />
              </section>
              <section className="md:w-2/3">
                <div className="justify-center items-center m-56">
                  <div className="flex justify-center items-center  ">
                    <img className="img-padding" src={Letter} alt="letter" />
                  </div>
                  <div className="padding-title flex  flex-col pt-5 ">
                    <p className="font-bold w-56 font-all	text-sm">
                      یک پیام را جهت نمایش انتخاب کنید
                    </p>
                    <p className="text-xs mr-5 w-56 font-all font-light ">
                      {' '}
                      پیامی را انتخاب نکردید
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </div>
      </Fragment>
    );
  }
}
