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
import { Button } from 'antd';
import { ChevronLeft } from 'react-feather';
export default class DashboardLastTaskWidgetComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: [],
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

    return (
      /*
داشبورد آخرین تسک ها
*/
      <section>
        <div className="-mt-4">
          <span className="text-base font-all font-extrabold">{model.header}</span>
        </div>
        <section>
          {this.state.value.map((item, index) => (
            <div key={item.id} className="p-5">
              <div className="container">
                <div></div>
                <div>
                  <div className="">
                    <div
                      className="absolute right-0 mr-6 h-8 "
                      style={{ border: `4px solid ${item.borderColor}` }}
                    />
                    <span className="text-sm font-all">{item.name}</span>
                    <span className="absolute font-all text-xs text-gray-600 left-0 ml-5">{item.date}</span>
                    <div className="flex flex-row">
                      <span className="text-xs font-all text-gray-600">{item.sub_title}</span>
                      <div
                        className="mr-2 w-16 h-6"
                        style={{
                          backgroundColor: `${item.roundedColor}`,
                          color: `${item.color}`,
                        }}
                      >
                        <span className="font-size-old font-all mr-2">{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Button
          style={{
            color: `${model.buttonColor}`,
            backgroundColor: `${model.buttonBackground}`,
          }}
          className="mt-2 font-all w-full  border-none"
        >
          <div className="flex flex-row mr-24">
            {model.button}
            <ChevronLeft
              style={{
                color: `${model.buttonColor}`,
              }}
            />
          </div>
        </Button>
      </section>
    );
  }
}
