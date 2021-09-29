/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React,{Fragment,PureComponent}from "react";
import { Modal, Button, Form, Spin } from 'antd';
import HInput from '@/pages/bloc/Input/Input';
import { Plus, Search } from 'react-feather';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import AddUserOne from '@/pages/Manage/structureOrganizational/AddUserOne';

export default class AddUser extends PureComponent{
  bloc;
  formRef = React.createRef()
  form;
  constructor(props) {
    super(props);


    this.state = {
      visible:false,
    }
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

  async submit() {
    const values = await this.formRef.current.validateFields()
    this.bloc.save(values);
  };
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
    const { visible } = this.state;
    return (
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return (
      /*
مودال ساختارسیستمی افزودن کاربر
*/
      <Fragment>
        <span

        className="font-all mr-3" onClick={this.showModal}>
        افزودن کاربران
        </span>
        <Modal className="font-all"
          width={419}
          height={666}
          visible={visible}
          title="افزودن کاربران"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button className="font-all  text-red-500 "


                    key="back" onClick={this.handleCancel}>
              بازگشت
            </Button>,
            <Button
             type="primary"
              className="font-all  text-white "

              key="submit"   onClick={this.handleOk}>
             ثبت کاربر
            </Button>,
          ]}
        >
          <Spin spinning={data.loading}>
            <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
             <AddUserOne/>
            </Form>
          </Spin>
        </Modal>
      </Fragment>
    );
      }}/>
    );
  }
}
