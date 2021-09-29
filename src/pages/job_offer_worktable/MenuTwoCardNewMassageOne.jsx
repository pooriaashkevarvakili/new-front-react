/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { Download, ArrowLeft, ArrowRight } from 'react-feather';
import { Button, Upload } from 'antd';
import Direction from './svg/direction.svg';
export default class MenuTwoCardNewMassageOne extends PureComponent {
  render() {
    return (
      /*
دراپ دون صندوق پیام قسمت دوم وقسمت اپلود
*/
      <div>
        <div className="mt-4 ">
          <div id="title-one" className="text-xs mr-20 flex flex-row font-all">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون
          </div>
          <div id="title-two" className="text-xs flex flex-row font-all mr-20">
            که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
            کاربردی می باشد.
          </div>
        </div>
        <div className="mt-2 ">
          <div id="title-three" className="text-xs flex flex-row font-all mr-20">
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
            طلبد تا با نرم افزارها شناخت بیشتری را{' '}
          </div>
          <div id="title-four" className="text-xs flex flex-row font-all mr-20">
            رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
            توان امید داشت که تمام و دشواری موجود است.
          </div>
        </div>
        <div className="flex flex-col mt-8 ">
          <span className="text-sm font-all mr-20">با تشکر</span>
          <span className="text-sm font-all mr-20">میناسعیدی</span>
        </div>
        <div id="border" className=" h-0 mt-5 color-twenty-six" />
        <div className="flex flex-row mt-6 ">
          <span className="text-sm mr-5 font-bold font-all ">فایل پیوست</span>
          <div className="absolute left-0 ">
            <Button id="border-radius-one" className="ml-2 border-none   h-12 ">
              <div className="flex flex-row bg-blue-100  p-5">
                <span className="flex items-center mb-1">
                  <img src={Direction} alt="direction" />
                </span>
                <span className="font-all text-blue-600 font-bold mr-2 ">دانلود همه</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-6 mr-2 flex flex-row">
          <Upload>
            <div className="w-24 h-24 bg-gray-200"></div>
          </Upload>
          <div className="mr-3">
            <Upload>
              <div className="w-24 h-24 bg-gray-200"></div>
            </Upload>
          </div>
        </div>
        <div className="flex flex-row">
          <Download className="mr-2" />
          <Download className="mr-20" />
        </div>
        <div id="border" className=" h-0 mt-5 text-black" />
        <div className="flex flex-row mt-5 mr-5">
          <Button>
            <div className="flex flex-row font-all">
              <ArrowRight />
              پاسخ دادن
            </div>
          </Button>
          <Button className="mr-4 ">
            <div className="flex flex-row font-all">
              <ArrowLeft />
              رونوشت
            </div>
          </Button>
        </div>
      </div>
    );
  }
}
