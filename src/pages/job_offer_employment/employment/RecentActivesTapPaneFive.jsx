import React, { PureComponent, Fragment } from 'react';
import { Col, Timeline } from 'antd';
import { Circle } from 'react-feather';
export default class RecentActivesTapPaneFive extends PureComponent {
  render() {
    const CircleTimeLine = {
      backgroundColor: '#e3e3e3',
      borderRadius: '50%',
    };
    return (
      /*
تپ پین عکس ها
*/
      <section className="md:w-5/6">
        <Col md={{ pull: 5 }}>
          <div className="flex justify-center  mt-1  ">
            <p className="font-bold font-all">آخرین فعالیت ها</p>
          </div>
        </Col>
        <div className="flex   justify-center mt-1 mr-4  ">
          <Timeline className="">
            <Timeline.Item className="h-16" dot={<Circle style={CircleTimeLine} size={8} />}>
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
              className="h-16"
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
                  <div className="mr-12 font-all text-xs text-gray-700">
                    علیرضا فتحی رزومه متقاضی را دانلود کرد
                  </div>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item
              className="h-16"
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
              className="h-16"
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
      </section>
    );
  }
}
