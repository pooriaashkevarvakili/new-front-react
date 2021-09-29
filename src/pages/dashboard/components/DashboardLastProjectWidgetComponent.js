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
import { Progress } from 'antd';
export default class DashbordLastProject extends PureComponent {
  constructor(props) {
    super(props);
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
  render() {
    const { model } = this.props;
    console.log(this.state.value);
    return (
      /*
داشبورد پروژه های هاکوپیان360
*/
      <section>
        <div>
          <h3 className="font-extrabold  -mt-4 font-all">{model.header}</h3>
        </div>
        <div>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={99.9}
          />
        </div>
        <div className="flex flex-row">
          {this.state.value.map((item, index) => (
            <div key={item.id}>
              <div className="flex flex-row">
                <span className="font-bold font-all text-xs">{item.Percentage}</span>
                <span className="font-bold font-all font-size-small mr-1">{item.name}،</span>
                <span className="font-bold font-all text-xs mr-1">{item.PercentageOne}</span>
                <span className="font-bold font-all mr-1 font-size-small ">{item.doneTest}</span>
                <span className="absolute left-0 ml-2">
                  <img src={item.imgOne} className="w-6 h-6" alt="" />
                  <img src={item.imgTwo} className="w-6 h-6" alt="" />
                  <img src={item.imgThree} className="w-6 h-6" alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
