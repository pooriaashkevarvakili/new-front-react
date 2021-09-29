/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent, Fragment } from 'react';
import { Button, Form, Modal, Spin } from 'antd';
import Axios from 'axios';
import { FiberManualRecord } from 'rmdi';
import { Plus } from 'react-feather';
import HInput from '@/pages/bloc/Input/Input';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
export default class AddCategories extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

  async submit() {
    const values = await this.formRef.current.validateFields();
    this.bloc.save(values);
  }
  renderModal(model) {
    return (
      /*
صفحه میزکار مدال انتخاب رنگ
*/
      <div key={model.id}>
        <section>
          <div className="flex flex-row ">
            <FiberManualRecord color={model.red} size={50} />
            <FiberManualRecord color={model.orange} size={50} />
            <FiberManualRecord color={model.yellow} size={50} />
            <FiberManualRecord color={model.green} size={50} />
            <FiberManualRecord color={model.palegreen} size={50} />
            <FiberManualRecord color={model.PaleBlue} size={50} />
            <FiberManualRecord color={model.blue} size={50} />
            <FiberManualRecord color={model.pink} size={50} />
            <FiberManualRecord color={model.purple} size={50} />
          </div>
        </section>
      </div>
    );
  }

  state = {
    loading: false,
    visible: false,
    api: [],
  };
  componentDidMount() {
    Axios.get('http://localhost:3005/api/addCategories').then((res) => {
      const api = res.data;
      this.setState({ api: api });
    });
  }
  handleChange = (color) => {
    this.setState({ color: color });
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
    const filterData1 = this.state.api.filter((x) => x.id);
    const { visible, loading } = this.state;
    return (
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          return (
            <Fragment>
              <Button
                className="flex border-none text-blue-500 font-all "
                onClick={this.showModal}
                icon={<Plus className="flex items-center -mr-3" />}
              >
                افزودن دسته بندی
              </Button>
              <Modal
                width={419}
                height={386}
                visible={visible}
                title="افزودن دسته بندی"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button
                    className="w-20 text-red-500 h-10 px-2 font-all"
                    key="back"
                    onClick={this.handleCancel}
                  >
                    بازگشت
                  </Button>,
                  <Button type="primary"
                    className="w-40  text-white font-all "
                    key="submit"
                    loading={loading}
                    onClick={this.handleOk}
                  >
                    افزودن بسته بندی
                  </Button>,
                ]}
              >
                <Spin spinning={data.loading}>
                  <Form
                    form={this.form}
                    ref={this.formRef}
                    onSubmit={this.submit}
                    layout="vertical"
                  >
                    <div className="flex">
                      <section className="md:w-full">
                        <div className="flex mt-3">
                          {new HInput('نام دسته بندی', 'email', 'w-full font-regular')
                            .required().size('large')
                            .place('مثلا پرسنل و...')
                            .render()}
                        </div>
                      </section>
                    </div>
                  </Form>
                </Spin>
                <div className="mt-1">
                  <p className="font-all">انتخاب رنگ</p>
                  {filterData1.map((item) => this.renderModal(item))}
                </div>
              </Modal>
            </Fragment>
          );
        }}
      />
    );
  }
}
