/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/09/21-16:44
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { Modal, Button } from 'antd';
import React, { PureComponent, Fragment } from 'react';
import { FileText, Plus } from 'react-feather';
import AddWidgetsModalOne from './AddWidgetsModalOne';
import AddWidgetsModalTwo from './AddWidgetsModalTwo';
export default class AddWidgets extends PureComponent {
  state = {
    loading: false,

    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      /*
داشبورد افزودن ابزارک
*/
      <Fragment>
        <div className="flex">
          <Button
            className="flex font-all text-red-500  "

            onClick={this.showModal}
          >
        <div className="flex flex-row">
          <span ><Plus className="text-red-500 mt-1"/></span>
          <span className="text-red-500 font-all text-sm mt-1">افزودن ابزارک </span>
        </div>
          </Button>
        </div>
        <Modal
          className="font-all"
          width={958}
          height={739}
          visible={visible}
          title="افزودن ابزارک"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <div className="flex ">
            <section className="md:w-2/3  ">
              <section className="flex  ">
                <section className="md:w-5/6">
                  <div className="flex  ">
                    <AddWidgetsModalOne />
                    <AddWidgetsModalTwo />
                  </div>
                </section>
              </section>
            </section>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
