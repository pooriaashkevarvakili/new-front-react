/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import Aparteman from '../svg/aparteman.svg';
import ModalNewStructure from './ModalNewStructure';
export default class StructureOrganizational extends PureComponent {
  render() {
    return (
      /*
ساختارسازمانی
*/
      <section>
        <div
          className="bg-white"
          style={{
            width: '1650px',
            height: '882px',
          }}
        >
          <div className="flex">
            <section className="md:w-2/3">
              <section className="flex  ">
                <div className="mt-5 mr-5">
                  <span className="text-2xl font-all font-extrabold">ساختار سازمانی</span>
                </div>
              </section>
            </section>
          </div>
          <div className="flex mt-56 justify-end ">
            <section className="md:w-3/5">
              <section className="flex  ">
                <div className="mt-5 flex flex-col ">
                  <span className="mr-10">
                    <img src={Aparteman} alt="" />
                  </span>
                  <div className="font-all">هنوز ساختارسازمانی ایجاد نکردید</div>
                  <ModalNewStructure />
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
