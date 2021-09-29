/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import  React,{PureComponent,Fragment} from "react";
import { Modal, Button, Spin, Form } from 'antd';
import { Link } from 'umi';
import { Plus } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
export default  class ModalNewStructure extends  PureComponent{
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
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render(){
    const { visible } = this.state;
    return (
      /*
مودال ساختارجدید ونام سازمان
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return(
      <Fragment>
        <Button type="primary"  onClick={this.showModal} className="mt-6 ">
         <div className="flex flex-row">
           <Plus className="text-white"/>
          <span  className="mr-2 font-all text-white">ایجاد ساختارجدید</span>
         </div>
        </Button>
        <Modal className="font-all"
          visible={visible}
          width={419}
          height={325}
          title="ایجادساختارجدید"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            [
              <Button type="primary" >
                <Link className="font-all"  to="structureOrganizational/registration-organization" >
                  ثبت دپارتمان

                </Link>
              </Button>,
              <Button className="mr-2 font-all h-10" onClick={this.handleCancel}>
                بازگشت
              </Button>
            ]
          }
        >
          <Spin spinning={data.loading}>
            <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">
              <div className="flex">
                <section className="md:w-full">
                  <div className="flex mt-3">
                    {new HInput('نام سازمان'  ,'email', 'w-full font-regular').size('large').required().place('مثلا سازمان را وارد کنید').render()}
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
