/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import Star from './svg/star.svg';
import Reload from './svg/reload.svg';
import { MoreHorizontal, ChevronDown } from 'react-feather';
import MenuTwoCardNewMassageOne from '@/pages/job_offer_worktable/MenuTwoCardNewMassageOne';
export default class MenuTwoCardNewMassage extends PureComponent {
  render() {
    return (
      /*
دراپ داون صندوق پیام
*/
      <div className="right-five">
        <div>
          <div className="flex">
            <section className="md:w-2/3">
              <div className="flex flex-row mr-8 mt-8">
                <span className="text-lg font-all font-bold	">اطلاعیه منابع انسانی</span>
                <div className="mr-3 w-20 bg-red-100 rounded-md	">
                  <span className="w-12 text-red-500 font-all mr-2 text-xs">صندوق پیام</span>
                </div>
              </div>
              <div id="border" className=" h-0 mt-5  color-twenty-six" />
              <section className="flex  ">
                <section>
                  <div className="flex">
                    <section className="md:w-2/3">
                      <section className="flex  ">
                        <section className="md:w-2/3">
                          <div className="container">
                            <div></div>
                            <div>
                              <div>
                                <img
                                  id="width-img"
                                  className="absolute  object-contain  mr-2 mt-2"
                                  src="images/image3.jpg"
                                  alt="shakiba"
                                />

                                <div className="text-xs pt-4 mr-20 font-all">میناسعیدی</div>
                                <span className="absolute ml-2 left-0  text-xs ">
                                  <MoreHorizontal />
                                </span>
                                <span className="absolute left-0 ml-10  text-xs ">
                                  <img src={Reload} alt="reload" />
                                </span>
                                <span className="absolute left-0 ml-16  text-xs ">
                                  <img src={Star} alt="star" />
                                </span>
                                <span className="absolute mt-1 left-0 ml-24  text-xs font-all">
                                  25 خرداد1398،13:57
                                </span>
                              </div>
                              <div className="mr-20 mt-1 flex flex-row text-xs text-gray-700 font-all">
                                <span className="text-xs font-all">ارسالی به:حسین مجیدی نژاد</span>
                                <span>
                                  <ChevronDown size={13} />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 mr-20">
                            <span className="text-sm font-all"></span>
                          </div>
                        </section>
                      </section>
                    </section>
                  </div>

                  <MenuTwoCardNewMassageOne />
                </section>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
