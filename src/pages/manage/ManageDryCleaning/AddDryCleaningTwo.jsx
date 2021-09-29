/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/28-9:30
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import { Modal, Button, Spin, Form } from 'antd';
import React, { PureComponent } from 'react';
import { FileText, Plus } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';

export default class AddDryCleaningTwo extends PureComponent {
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

  render() {



    return (
      /*
مدیریت خشک شویی
مودالی است که برای افزودن خشک شویی استفاده می شود
*/
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
        return (
          <>
            <Button className=" w-36 border-none h-12 text-white  font-all  flex flex-col text-sm"  onClick={this.showModal}>
               <div className="flex flex-row">
                 <span>
                   <Plus className="text-blue-500"/>
                 </span>
                 <span className="text-blue-500 text-sm font-all mr-1">
             افزودن آدرس
           </span>
               </div>

            </Button>

            <Modal
              width={700}
              height={706}
              visible={this.state.visible}
              title="افزودن آدرس"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[

                <Button key="submit" type="primary" className=""  loading={this.state.loading} onClick={this.handleCancel}>
                  <div className="flex flex-row">
                    <span className="text-white mr-1 font-all">
                      افزودن خشک شویی
                    </span>
                  </div>

                </Button>,
              ]}
            >
              <Spin spinning={data.loading}>
                <Form form={this.form} ref={this.formRef} onSubmit={this.submit} layout="vertical">

                  <div className="flex">
                    <section className="md:w-2/3">
                      <section className="flex flex-row items-start justify-start ">
                        {new HInput('عنوان آدرس', 'titleAddress', ' w-8/12 rounded-xl ')
                          .required().size('large')
                          .place('نام کاربری یاایمیل کاربرواردکنید ')
                          .render({})}
                        {new HInput('شماره موبایل', 'telNumber', ' absolute left-0 w-6/12  mr-5 rounded-xl').size('large').
                          required().place('شماره موبایل کاربرواردنمایید')
                          .render({})}
                      </section>
                      <section className="flex flex-row items-start justify-start ">
                        {new HInput('آدرس', 'titleAddressOne','')
                          .required()
                          .place('آدرس را وارد کنید').textarea()
                          .render({})}

                      </section>
                      <section className="flex flex-row items-start justify-start ">
                        {new HInput('تلفن اول', 'telOne', ' w-8/12 rounded-xl ').size('large')
                          .required()
                          .place('تلفن اول را وارد نمایید')
                          .render({})}
                        {new HInput('تلفن دوم', 'telTwo', '  absolute left-0 w-6/12 mr-5 rounded-xl').size('large')
                          .required().place('تلفن دوم را وارد کنید')
                          .render({})}
                      </section>
                    </section>

                  </div>
                </Form>
              </Spin>
            </Modal>
          </>
        );
      }}/>
    );
  }
}
