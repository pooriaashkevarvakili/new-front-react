/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, {PureComponent,Fragment} from "react";
import { Button, Form, Modal, Spin } from 'antd';
import HInput from '@/pages/bloc/Input/Input';
import { Plus } from 'react-feather';
import AddUser from "./AddUser.jsx"
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
export default class JobSide extends PureComponent{
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
ساختار سازمانی مودال ثبت دپارتمان
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return (
      <Fragment>
        <span className="font-all mr-3"

          onClick={this.showModal}>
افزودن سمت شغلی
        </span>
        <Modal className="font-all"

          visible={visible}
          title="افزودن سمت شغلی"
          width={419}
          height={569}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button className="font-all  text-red-500"

              key="back" onClick={this.handleCancel}>
              بازگشت
            </Button>,
            <Button  type="primary" className="font-all   text-white"

                     onClick={this.handleCancel}>
             ثبت سمت شغلی
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
                    {new HInput('دپارتمان'  ,'email', 'w-full font-regular').required().size('large').place(' مالی').render()}
                  </div>
                  <div className="flex mt-2">
                    {new HInput('نام سمت شغلی'  ,'email', 'w-full font-regular').required().size('large').place(' مثلاحسابدار،مدیرمالی').render()}
                  </div>
                  <div className="flex mt-3">
                    <Button className="w-full " type="dashed">
                      <div className="flex border-none justify-center flex-row">
                        <span ><Plus className="text-red-500"/></span>
                        <span className="font-all text-red-500"  >افزودن سمت شغلی</span>
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

