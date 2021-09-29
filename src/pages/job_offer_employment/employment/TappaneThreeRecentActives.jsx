/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/11/04-13:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { Fragment, PureComponent } from 'react';
import { Timeline } from 'antd';
import { Circle } from 'react-feather';
export default class TappaneThreeRecentActives extends PureComponent {
  render() {
    const CircleTimeLine = {
      backgroundColor: '#e3e3e3',
      borderRadius: '50%',
    };
    return (
      /*
آخرین فعالیت های تپ پین سوم
*/
      <Fragment>
        <div className="flex justify-start mt-2 mr-32 ">
          <p
            style={{
              fontFamily: 'yek',
            }}
            className="font-bold"
          >
            آخرین فعالیت ها
          </p>
        </div>
        <div className="flex justify-center mr-8  ">
          <Timeline>
            <Timeline.Item
              className="h-20"
              dot={<Circle style={CircleTimeLine} size={10} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image12.jpg" alt="shakiba" />

                    <span className="mr-12 text-xs font-all">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 text-xs text-gray-700 font-all">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-20"
              dot={<Circle style={CircleTimeLine} size={10} />}
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
              className="h-20"
              dot={<Circle style={CircleTimeLine} size={10} />}
              color="gray"
            >
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img className="absolute w-10 h-10" src="/images/image2.jpg" />

                    <span className="mr-12 font-all text-xs">9-10:45خرداد98</span>
                  </div>
                  <div className="mr-12 font-all text-xs text-gray-700">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-20"
              dot={<Circle style={CircleTimeLine} size={10} />}
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
