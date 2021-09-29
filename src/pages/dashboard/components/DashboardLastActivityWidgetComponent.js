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
export default class DashboardLastActivityWidgetComponent extends PureComponent {
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
    return (
      /*
داشبورد اخرین اعلانات
*/
      <section>
        <div>
          <h3 className="font-extrabold font-all  -mt-4">
            {model.header}
          </h3>
        </div>
        <div>
          {this.state.value.map((item) => {
            return (
              <div key={item.id} className="p-5">
                <div className="container">
                  <div></div>
                  <div>
                    <div>
                      <img
                        style={{
                          backgroundColor: `${item.roundedOne}`,
                          borderRadius: '50%',
                        }}
                        className="absolute p-3 right-0 mr-4"
                        src={item.image}
                      />

                      <span className="mr-8 font-all">{item.name}</span>
                    </div>
                    <div className="mr-8 font-all text-gray-600">{item.date}</div>
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
            className="mt-2  w-full p-2 border-none"
          >
            <div className="flex font-all flex-row mr-24">
              {model.button}
              <ChevronLeft
                style={{
                  color: `${model.buttonColor}`,
                }}
              />
            </div>
          </Button>
        </div>
      </section>
    );
  }
}
