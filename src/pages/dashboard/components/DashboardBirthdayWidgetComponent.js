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
import { Carousel } from 'antd';
import DashboardBrithdayTitle from '@/pages/dashboard/components/DashboardBrithdayTitle';

export default class DashboardBirthdayWidgetComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: [],
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

  splitTwoItem() {
    const exp = [];
    for (let i = 0; i < this.state.value.length; i += 2) {
      const a = [this.state.value[i]];
      if (this.state.value[i + 1]) {
        a.push(this.state.value[i + 1]);
      }
      exp.push(a);
    }
    return exp;
  }

  render() {
    const { model } = this.props;
    return (
      /*
داشبورد تولد
*/
      <section>
        <div className="-mt-4">
          <span className="text-base font-all font-extrabold">{model.header}</span>
        </div>
        <div className="dashboard-widget-birthday-wrapper">
          <Carousel autoplay={true}>
            {this.splitTwoItem().map((item) => (
              <div key={item.id}>
                {item.map((inner) => (
                  <section>
                    <DashboardBrithdayTitle inner={inner} />
                  </section>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }
}
