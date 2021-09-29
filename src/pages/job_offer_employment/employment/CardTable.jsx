/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent, Fragment } from 'react';
import { Clock } from 'react-feather';
import Axios from 'axios';
import { Modal, Avatar, Card, Tabs } from 'antd';
import ModalTitle from './ModalTitle';
export default class CardTable extends PureComponent {
  renderCard(model) {
    return (
      /*
جدول متقاضیان
*/
      <div key={model.id}>
        <section>
          <Card
            bordered={true}
            className="mt-3 w-64 h-24 card-table-border "
            onClick={() => {
              this.showModal(model.id);
            }}
          >
            <div className="container">
              <div></div>
              <div>
                <div>
                  <Avatar className="absolute w-12 h-12 object-contain" src={model.image} />
                  <span className="mr-16 text-sm font-all">
                    {model.fname}
                    {model.lname}
                  </span>
                </div>
                <div className=" text-xs flex flex-row text-gray-700 mt-1">
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

  componentDidMount() {
    Axios.get('http://localhost:3005/api/getAllApplicant').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  state = {
    loading: false,
    data: [],
    visible: false,
  };
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

  render() {
    const { TabPane } = Tabs;
    const filterData1 = this.state.data.filter((x) => x.fname);
    return (
      <Fragment>
        {filterData1.map((item) => this.renderCard(item))}
        <Modal
          className="font-bold"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1048}
          height={230}
          footer={[]}
        >
          <ModalTitle />
        </Modal>
      </Fragment>
    );
  }
}