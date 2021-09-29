/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/07/12-15:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
export default class Index extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }
}
