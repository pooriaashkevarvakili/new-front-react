/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React,{PureComponent}from "react";
import { Modal, Button, Form, Spin } from 'antd';
import { Plus } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
export default class NewTitle extends PureComponent {
  state = {
    loading: false,
    visible: false,
  };
  bloc;
  formRef = React.createRef()
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();



  }
  showModal = () => {
    this.setState({
                    visible: true,
                  });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      /*
مودال عناوین
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return (
      <div>
        <Button   onClick={this.showModal} style={{
          backgroundColor:"#cc9900"
        }} className="ml-5  font-all  text-white">
          <div className="flex flex-row">
                       <span>
                         <Plus/>
                       </span>
            <span className="font-all"

            >ایجاد عنوان جدید</span>
          </div>
        </Button>
        <Modal
          width={419}
          height={328}
          visible={visible}
          title="ایجادعنوان جدید"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button  key="back" className="font-all h-10"  onClick={this.handleCancel}>
              بازگشت
            </Button>,
            <Button
              className="font-all h-10"

              key="submit" type="primary" loading={loading} onClick={this.handleOk}>
             افزودن عنوان
            </Button>,
          ]}
        >
          <Spin spinning={data.loading}>
            <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
              <div className="flex">
                <section className="md:w-full">
                  <div className="flex mt-3">
                    {new HInput('نام عنوان'  ,'email', 'w-full font-regular').required().size('large').place('مثلا کارشناس').render()}
                  </div>
                </section>

              </div>
            </Form>
          </Spin>
        </Modal>
      </div>

    );
      }}/>
    );
  }
}

