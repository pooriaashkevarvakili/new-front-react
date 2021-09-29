/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/16-11:34
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import CardNewMassage from './CardNewMassage';

import SendNewMassageCard from '@/pages/job_offer_worktable/SendNewMassageCard';
export default class Menus extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e.target.getContent());
  }
  render() {
    return (
      /*
      کل منو و صفحه ها
      صندوق پیام svg
*/
      <Fragment>
        <div className="flex flex-wrap flex-col ml-10 ">
          <section id="width-one" className="rounded-md shadow-md bg-white		">
            <div className="flex flex-col ">
              <CardNewMassage />
              <section className="">
                <div className="flex flex-row  ">
                  <SendNewMassageCard />
                </div>
              </section>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
