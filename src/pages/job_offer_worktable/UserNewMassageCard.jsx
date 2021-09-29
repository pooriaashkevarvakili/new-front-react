/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/05-11:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import Point from './svg/point.svg';
import Axios from 'axios';
import config from '../../../config/defaultSettings';

export default class UserNewMassageCard extends PureComponent {
  state = {
    visible: false,
    data: [],
  };
  renderCard(model) {
    return (
      /*
مصاحبه
*/
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-ro">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12  mt-2 object-contain"
                  src="images/image3.jpg"
                  alt="shakiba"
                />
                <span className="mr-16  font-all  text-xs">
                  {console.log(model.to)}
                  {model.id}
                </span>
                <span className="flex pr-2">
                  <img src={Point} alt="" />
                </span>
                <span className="margin-right-three font-all  text-xs">13:58</span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افزایش حقوق</div>
            <div className="card-two font-all text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
  componentDidMount() {
    const apiURL = `${config.baseApiUrl}/letter/create/`;
    const token =
      'User 1 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyODc5MTQzLCJqdGkiOiJjMmFlOWEzNmI2OWY0NmNhYTE0YTM5OTQyNzQ0OWExYSIsInVzZXJfaWQiOjF9.J4UiSI_lCzq9hewVGQoYYkTIHZNWkyXEHjFNAgCXGgc';
    Axios.post(apiURL, {
      headers: {
        Authorization: `Basic ${token}`,
        model: 'Manager',
      },
    })
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    const filterData = this.state.data.filter((x) => x.id);
    return (
      // <div>
      //   {filterData.map((item) => this.renderCard(item))}
      //
      // </div>
      <div className=" ">
        <div className="container">
          <div></div>
          <div>
            <div>
              <div className="flex flex-ro">
                <img
                  id="border-six"
                  className="absolute  w-16  h-12   object-contain"
                  src="images/image3.jpg"
                  alt="shakiba"
                />
                <span className="mr-16  font-all  text-xs">علیرضاتهرانی</span>
                <span className="flex pr-2">
                  <img src={Point} alt="" />
                </span>
                <span className="margin-right-three font-all  text-xs">13:58</span>
              </div>
            </div>
            <div className="card-one font-all text-xs text-gray-800">درخواست افزایش حقوق</div>
            <div className="card-two font-all  text-xs text-gray-800">
              با سلام به استیحضار می رسانم
            </div>
          </div>
        </div>

        <div className="border-solid mt-2  line-border" />
      </div>
    );
  }
}
