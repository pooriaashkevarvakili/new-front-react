/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/24-14:07
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Avatar, Card, Dropdown, Menu } from 'antd';
import { Flag, Clock, X } from 'react-feather';
import Axios from 'axios';
const menu = (
  <Menu className="w-40 -mr-32 mt-1	">
    <Menu.Item>
      <div className="flex flex-row font-all">
        اولویت بندی ها
        <div className="flex justify-end mr-6 ">
          <X />
        </div>
      </div>
      <div className="border-solid color-gray-twenty-two w-36	 object-contain mt-3" />
    </Menu.Item>
    <Menu.Item>
      <div className="flex flex-row font-all">
        <Flag className="text-red-500 " />
        اولویت اول
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="flex flex-row font-all">
        <Flag className="text-orange-500" />
        اولویت دوم
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="flex flex-row font-all">
        <Flag className="text-blue-500" />
        اولویت سوم
      </div>
    </Menu.Item>
  </Menu>
);
export default class ConformationForInterview extends PureComponent {
  state = {
    loading: false,
    data: [],
    visible: false,
  };
  constructor(props) {
    super(props);
  }
  renderCard(model) {
    return (
      <div key={model.id}>
        <section className="container">
          <Card
            bordered={true}
            className="mt-3 w-64  h-24 card-table-border "
            onClick={() => {
              this.showModal(model.id);
            }}
          >
            <div className="container">
              <div></div>
              <div>
                <div>
                  <Avatar className="absolute w-12 h-12 object-contain" src={model.image} />
                  <div className="flex flex-row">
                    <span className="mr-16 text-sm">
                      <span className="font-all text-sm">{model.fname}</span>
                      <span className="font-all text-sm">{model.lname}</span>
                    </span>
                    <Dropdown className="  " overlay={menu} trigger={'click'}>
                      <span
                        className=" p-4 absolute left-0 ml-3 w-4 h-4  "
                        style={{
                          borderRadius: '50%',
                          backgroundColor: `${model.color}`,
                          marginRight: ' 2.78rem',
                        }}
                      >
                        <Flag
                          className="-mt-3 ml-2 flex items-center "
                          size={18}
                          color={model.resume}
                        />
                      </span>
                    </Dropdown>
                  </div>
                </div>
                <div className=" text-xs  flex flex-row text-gray-700">
                  <span className="mr-16">
                    <Clock size={15} />
                  </span>
                  <span className="mr-1 font-all ">5خرداد1398</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleOk = () => {
    this.setState({ loading: true });
  };
  componentDidMount() {
    Axios.get('http://localhost:3005/api/conformationForInterView').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }
  render() {
    const filterData = this.state.data.filter((x) => x.fname);
    return (
      /*
جدول تایید برای مصاحبه
*/
      <Fragment>
        {filterData.map((item) => this.renderCard(item))}
        {/*<Modal*/}
        {/*  className="font-bold"*/}
        {/*  visible={this.state.visible}*/}
        {/*  onOk={this.handleOk}*/}
        {/*  onCancel={this.handleCancel}*/}
        {/*  width={1048}*/}
        {/*  height={230}*/}
        {/*  footer={[*/}
        {/*  ]}>*/}
        {/*  <ModalTitle/>*/}
        {/*</Modal>*/}
      </Fragment>
    );
  }
}
