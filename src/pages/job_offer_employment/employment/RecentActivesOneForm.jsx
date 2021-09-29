/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/11/06-10:53
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent, Fragment } from 'react';
import { Timeline } from 'antd';
import { Circle } from 'react-feather';
export default class RecentActivitiesOneForm extends PureComponent {
  render() {
    const CircleTimeLine = {
      backgroundColor: '#e3e3e3',
      borderRadius: '50%',
    };
    return (
      /*
تپ پین عکس ها
*/
      <Fragment>
        <div className="flex justify-center  mt-5 ml-32 ">
          <p className="font-bold font-all">آخرین فعالیت ها</p>
        </div>
        <div className="flex   justify-center  mr-12  ">
          <Timeline className="">
            <Timeline.Item className="h-24" dot={<Circle style={CircleTimeLine} size={8} />}>
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image12.jpg" />
                    <span className="mr-12 text-xs font-all">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 text-xs text-gray-700 font-all">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-24 font-all"
              dot={<Circle style={CircleTimeLine} size={8} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image1.jpg" />

                    <span className="mr-12 text-xs font-all">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 text-xs text-gray-700 font-all">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-24"
              dot={<Circle style={CircleTimeLine} size={8} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image2.jpg" />

                    <span className="mr-12 text-xs font-all">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 text-xs text-gray-700 font-all">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-24"
              dot={<Circle style={CircleTimeLine} size={8} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image3.jpg" />
                    <span className="mr-12 text-xs font-all">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 text-xs text-gray-700 font-all">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </Fragment>
    );
  }
}
