/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, {Fragment,PureComponent} from "react"
import { Spin,Form,Button, Modal } from 'antd';
import {Plus} from "react-feather"
import HInput from '@/pages/bloc/Input/Input';
import BlocBuilder from 'bloc-builder-react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import {Link} from "umi"
export default class NewDeparteman extends PureComponent{
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
  render(){
    const { visible, loading } = this.state;
    return (
      /*
افزودن دپارتمان جدید
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
    return(
      <Fragment>
      <Button className="font-all h-10"  type="primary" onClick={this.showModal}>
        ثبت سازمان
      </Button>

    <Modal className="font-all"

      visible={visible}
      width={419}
      height={468}
      title="افزودن دپارتمان جدید"
      onOk={this.handleOk}
      onCancel={this.handleCancel}
      footer={[
        <Button key="back" onClick={this.handleCancel}>
         بازگشت
        </Button>,
        <Button type="primary" >
          <Link className="font-all"  to="structureOrganizational/registration-organization" >
            ثبت دپارتمان

          </Link>
        </Button>
      ]}
    >

      {/*<Spin spinning={data.loading}>*/}
      {/*  <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">*/}
      {/*    <div className="flex">*/}
      {/*      <section className="md:w-full">*/}
      {/*        <div className="flex mt-3">*/}
      {/*          {new HInput('سازمان'  ,'email', 'w-full font-regular').required().place('هاکوپیان').render()}*/}
      {/*        </div>*/}
      {/*        <div className="flex mt-3">*/}
      {/*          {new HInput('نام دپارتمان'  ,'email', 'w-full font-regular').required().place('مثلا مالی،انفورماتیک').render()}*/}
      {/*        </div>*/}
      {/*        <div className="flex mt-3">*/}
      {/*          <Button className="w-full" type="dashed">*/}
      {/*            <div className="flex border-none justify-center flex-row">*/}
      {/*              <span id="color-red"><Plus/></span>*/}
      {/*              <span id="color-red">افزودن دپارتمان</span>*/}
      {/*            </div>*/}
      {/*          </Button>*/}
      {/*        </div>*/}

      {/*      </section>*/}

      {/*    </div>*/}
      {/*  </Form>*/}
      {/*</Spin>*/}
    </Modal>
      </Fragment>
    );
      }}/>
    );
  }
}
