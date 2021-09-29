/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/10-15:05
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { PureComponent } from 'react';
import { Avatar, Col } from 'antd';

export default class DashboardBrithdayTitle extends PureComponent {
  render() {
    const { inner } = this.props;
    return (
      /*
داشبورد تولد اسلایدر
*/
      <section>
        <div className="w-24 h-8 rounded-lg bg-red-100 relative configuration">
          <span className="text-xs text-red-500 font-all font-extrabold ml-5 ">
            {inner.congratulations_send}
          </span>
        </div>
        <div className="flex flex-row justify-end">
          <div>
            <Col md={{ pull: 3 }}>
              <span className="text-sm font-all font-extrabold">{inner.name}</span>
            </Col>
            <div className="mr-2">
              <span className="text-xs black-color-title font-all">{inner.sub_title}</span>
            </div>
          </div>
          <Avatar src={inner.avatar} />
        </div>
      </section>
    );
  }
}
