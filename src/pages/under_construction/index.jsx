/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { PureComponent } from 'react';
import img from '@/assets/image/under_const.svg';

export default class Index extends PureComponent {
  render() {
    return <div className="flex h-full flex-col items-center justify-center">
      <img  src={img} alt="UnderConstruction" style={{maxWidth:'450px'}}/>
      <p className="my-4">این قسمت از سیستم درحال پیاده سازی است.</p>
    </div>;
  }
}
