/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/26-16:44
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { PureComponent } from 'react';

import axios from '@/utils/axios';

export default class DashboardTinyWidgetComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: '-',
    };
  }

  componentDidMount() {
    this.getValue();
  }

  async getValue() {
    const { model } = this.props;
    const { data } = await axios.get(model.api);
    this.setState({
      value: data,
    });
  }

  render() {
    const { model } = this.props;
    return (
      /*
داشبورد ساعت ورود،مانده مرخصی ،درصد پیشرفت تسک ها، و تاریخ امروز
*/
      <section className="flex flex-row">
        <div className="widget-back-icon w-16 h-16 flex justify-center items-center relative">
          <div
            className="back-layer absolute top-0 left-0 right-0 bottom-0"
            style={{ backgroundColor: model.color }}
          ></div>
          <img src={model.image} className="w-8 h-8" alt="" />
        </div>
        <div>
          <div className="font-bold text-2xl mr-2">
            <div className="text-sm font-medium font-all mt-1	" style={{ color: model.colorTitle }}>
              {model.title}
            </div>
            <div className="font-all text-gray-700">{this.state.value}</div>
          </div>
        </div>
      </section>
    );
  }
}
