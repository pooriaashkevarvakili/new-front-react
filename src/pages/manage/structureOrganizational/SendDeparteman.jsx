/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React,{Fragment,PureComponent} from "react";
import { Modal, Button, Form, Spin } from 'antd';
import HInput from '@/pages/bloc/Input/Input';
import { Plus } from 'react-feather';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import JobSide from "./JobSide.jsx"
export default class SendDeparteman extends PureComponent{
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
  componentDidMount() {
    // this.inject();
  }
  // async inject(){
  //   /*
  //       await this.bloc.get(1);
  //   */
  //   await this.bloc.getDropDownForCvArchive();
  //   this.formRef.current.setFieldsValue(this.bloc.repo.model)
  // }
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
    const { visible, loading } = this.state;
    return (
      /*
ثبت دپارتمان و فرم
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return (
      <Fragment>
        <span className="font-all mr-1 "   onClick={this.showModal}>
   افزودن دپارتمان جدید
        </span>
        <Modal className="font-all"
          height={569}
          width={419}
          visible={visible}
          title=" افزودن دپارتمان جدید"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button className="text-red-500 h-10" key="back" onClick={this.handleCancel}>
              بازگشت
            </Button>,
            <Button     type="primary" className="text-white  h-10"   onClick={this.handleCancel}>
             ثبت دپارتمان
            </Button>,
          ]}
        >
          <Spin spinning={data.loading}>
            <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
              <div className="flex">
                <section className="md:w-full">
                  <div className="flex mt-3">
                    {new HInput('سازمان'  ,'email', 'w-full font-regular').required().size('large').place('هاکوپیان').render()}
                  </div>
                  <div className="flex mt-3">
                    {new HInput('دپارتمان اصلی'  ,'email', 'w-full font-regular').required().size('large').place('مالی').render()}
                  </div>
                  <div className="flex mt-3">
                    {new HInput('دپارتمان زیرمجموعه'  ,'email', 'w-full font-regular').required().size('large').place('مثلا خزانه').render()}
                  </div>
                  <div className="flex mt-3">
                    <Button className="w-full h-10" type="dashed">
                      <div className="flex border-none justify-center flex-row">
                        <span ><Plus className="text-red-500"/></span>
                        <span className="font-all text-red-500"  >افزودن دپارتمان </span>
                      </div>
                    </Button>
                  </div>

                </section>

              </div>
            </Form>
          </Spin>
        </Modal>
      </Fragment>
    );
      }}/>
    );
  }
}
