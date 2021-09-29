import React, { PureComponent } from 'react';

export default class LetterStarOne extends PureComponent {
  render() {
    return (
      /*
میزکار پیام های منتخب کارد دوم
*/
      <div className="-mt-3 ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-row">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12   object-contain"
                  src="images/pooria.jpg"
                  alt="shakiba"
                />
                <span className="mr-16  font-all  text-xs">پوریاوکیلی</span>

                <span
                  style={{
                    marginRight: '19.5rem',
                  }}
                  className=" font-all  text-xs"
                >
                  13:58
                </span>
                <span
                  style={{
                    marginLeft: '4.5rem',
                  }}
                  className="absolute left-0  flex "
                >
                  <img className="w-5 h-5 -mt-1" src="images/starone.png" alt="" />
                </span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افزایش حقوق</div>
            <div className="card-two font-all  text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
