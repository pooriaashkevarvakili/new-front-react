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
export default class DashboardLastFoodWidgetComponent extends PureComponent {
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
داشبورد انتخاب غذا
*/
      <section>
        <div>
          <h3 className="font-extrabold  -mt-4">{model.header}</h3>
        </div>
        {this.state.value.map((item) => {
          return (
            <div key={item.id} className="p-5">
              <div className="container">
                <div></div>
                <div>
                  <div>
                    <img
                      style={{
                        backgroundColor: `${item.backgroundColor}`,
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                      }}
                      className="absolute  p-3 right-0 mr-4 "
                      src={item.img}
                    />

                    <span className="mr-8 font-all font-size-old text-gray-800">{item.name}</span>
                  </div>
                  <div className="mr-8 font-all text-sm">{item.title}</div>
                </div>
              </div>
            </div>
          );
        })}
        <Button
          style={{
            color: `${model.buttonColor}`,
            backgroundColor: `${model.buttonBackground}`,
          }}
          className="mt-2 w-full font-all p-2  border-none"
        >
          <div className="flex flex-row mr-32">
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
