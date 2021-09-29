import React, { PureComponent } from 'react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
import { Form, Spin } from 'antd';

import { DragDropSix } from '@/components/Upload/employment form/DrapDropEmployment';
export default class AddGroups extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;

  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  renderUploadFile(title, name, pClass) {
    return (
      <div className={['w-full mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropSix />
        </Form.Item>
      </div>
    );
  }

  render() {

    return (
      /*
تپ پین دوم بعد کلیک وفرم
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          console.log(data);
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          if (data)

            return (
              <Spin spinning={data.loading}>
                <Form
                  form={this.form}
                  ref={this.formRef}
                  onSubmit={this.submit}
                  layout="vertical"
                >
              <div>
                <div className="flex flex-wrap">
                  {this.renderUploadFile('', 'age', () => {
                  }, [], 'pr-2')}
                </div>
              </div>
                </Form>
              </Spin>


            );
        }}
      />
    );
  }
}
