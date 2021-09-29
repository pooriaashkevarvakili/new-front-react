/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: ۳1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';

import { Button } from 'antd';
import { KeyboardArrowDown } from 'rmdi';
export default class ViewAllSkills extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      /*
فیلتر های بیشتر مشاهده همه مهارت ها
*/
      <div className="w-56   ">
        <Button className="flex items-center p-2 border-none">
          <span className="pl-4 font-all">مشاهده همه ی مهارت ها</span>
          <KeyboardArrowDown className="p-0" />
        </Button>
      </div>
    );
  }
}
