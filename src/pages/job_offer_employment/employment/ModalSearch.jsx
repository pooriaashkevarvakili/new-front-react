/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/04-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Input } from 'antd';
import { Search } from 'react-feather';
import Soltany from '@/assets/image/image10.jpg';
export default class ModalSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSearchOne: [],
    };
  }
  titleSearchOnChangeCheck() {
    const dataSearchOne = [];
    dataSearchOne.filter((data) => {
      return data.name.toLowerCase().includes(dataSearchOne.toLowerCase());
    });
  }
  render() {
    /*
دراپ داون عکس ها دربالای جدول
*/
    return (
      <Fragment>
        <Input
          id="blue-focus"
          className="w-11/12 white-color-bg bg-gray-200 mr-3 mt-2 border-none"
          type="text"
          placeholder="جستجو"
        />
        <span className="  mr-56 border-none relative span-search">
          <Search />
        </span>
        <div className="flex flex-row mr-3">
          <img src="/images/image4.png" alt="shakiba" />
          <p className="mt-2 mr-2 font-all font-medium">علیرضامحمدی</p>
        </div>
        <div className="mr-2 mt-2 border-dropdown" />
        <div className="flex flex-row mr-3 mt-2">
          <img src="/images/image9.jpg" alt="majidy" />
          <p className="mt-2 mr-2 font-all font-medium">حسین مجیدی نژاد</p>
        </div>
        <div className="mr-2 mt-2 border-dropdown" />
        <div className="flex flex-row mr-3 mt-3">
          <img src="/images/image11.jpg" alt="" />
          <p className="mt-2 font-all mr-2 font-medium">علی شکیبا</p>
        </div>
        <div className="mr-2 mt-2 border-dropdown" />
        <div className="flex flex-row mr-3 mt-3">
          <img src="/images/image10.jpg" alt="" />
          <p className="mt-2 mr-2 font-all font-medium">علی سلطانی</p>
        </div>
      </Fragment>
    );
  }
}
