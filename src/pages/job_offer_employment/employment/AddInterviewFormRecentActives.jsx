/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/04-11:40
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Timeline } from 'antd';
import { Circle } from 'react-feather';

export default class AddInterviewFormRecentActives extends PureComponent {
  render() {
    const CircleTimeLine = {
      backgroundColor: '#e3e3e3',
      borderRadius: '50%',
    };
    return (
      /*
آخرین فعالیت ها
*/
      <Fragment>
        <div className=" flex justify-start mr-16 mt-2  ">
          <p className="font-bold font-all">آخرین فعالیت ها</p>
        </div>
        <div className="flex justify-start mr-16 mt-1 ">
          <Timeline>
            <Timeline.Item
              className="h-24"
              dot={<Circle style={CircleTimeLine} size={8} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image12.jpg" alt="shakiba" />
                    <span className="mr-12 font-all text-xs">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 font-all text-xs text-gray-700">
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
                    <img className="absolute w-10 h-10" src="/images/image1.jpg" alt="khanum" />

                    <span className="mr-12 font-all text-xs">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 fon-all text-xs text-gray-700">
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
                    <img className="absolute w-10 h-10" src="/images/image2.jpg" alt="Soltany" />
                    <span className="mr-12 font-all text-xs">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 font-all text-xs text-gray-700">
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
                    <span className="mr-12 font-all text-xs">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 font-all text-xs text-gray-700">
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
