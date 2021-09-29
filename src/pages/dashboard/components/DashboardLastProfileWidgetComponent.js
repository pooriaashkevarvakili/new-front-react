/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/26-16:44
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import axios from '@/utils/axios';
import { Timeline } from 'antd';
import { FileText } from 'react-feather';
import TabPaneOneForm from '@/pages/job_offer_employment/employment/TabPaneOneForm';
import RecentActivities from '@/pages/job_offer_employment/employment/RecentActivities';
export default class DashboardLastProfileWidgetComponent extends PureComponent {
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
داشبورد پروفایل شما
*/
      <section>
        {this.state.value.map((item, index) => (
          <div key={item.id}>
            <section>
              <div className="flex flex-col items-center ">
                <img src={item.img} alt="" className="w-20 h-20" />
                <span className="text-base font-all font-extrabold ">{item.name}</span>
                <span className="text-sm font-all font-medium text-gray-600">
                  {item.header}
                </span>
              </div>
            </section>
            <div className="flex">
              <section className="md:w-2/3">
                <section className="flex items-center justify-start ">
                  <div className="flex flex-row mt-1">
                    <span className="w-20 text-xs text-gray-500 font-all">{item.title}</span>
                    <div
                      className="mt-1 h-3 w-0"
                      style={{
                        border: `1px solid ${item.borderColor}`,
                      }}
                    />
                    <span className="w-12 mr-12  text-xs text-gray-500 font-all">
                      {item.personal}
                    </span>
                    <div
                      className="mt-1 mr-1 h-3 w-0"
                      style={{
                        border: `1px solid ${item.borderColor}`,
                      }}
                    />
                    <span className="w-20 absolute left-0 ml-6 text-center text-xs text-gray-500 font-all">
                      {item.fany}
                    </span>
                  </div>
                </section>
                <div className="flex flex-row">
                  <span className="w-24 font-all font-extrabold text-xs">{item.date}</span>
                  <span className="w-10 mr-10 font-all font-extrabold text-xs">{item.serial}</span>
                  <span className="w-20 ml-4 absolute left-0 font-all font-extrabold text-xs">
                    {item.it}
                  </span>
                </div>
              </section>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
