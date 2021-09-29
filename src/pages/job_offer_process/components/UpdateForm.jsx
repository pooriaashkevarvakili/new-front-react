/*import {Form, Input, Radio} from "antd";
import React from "react";
import UploadFile from "@/components/Upload/UploadFile/UploadFile";
import UploadImage from "@/components/Upload/UploadImage/UploadImage";*/

// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------
/*

import React, {Component} from "react";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import PrimaryButton from "./../../../../../BaseComponent/PrimaryButton/primaryButton";
import Bloc from "@/pages/cv_archive/CvArchiveBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';

import {
    Form,
    Select,
    ConfigProvider,
    Row,
    Col,
    Checkbox,
    Input,
    Alert,
    Empty,
    Spin,
    Avatar,
    Comment,
    Tooltip
} from "antd";


const {Option} = Select;
const {TextArea} = Input;

class UpdateForm extends Component {

  constructor(props) {
    super(props);
    this.bloc = new Bloc();
    record: this.props.record,
  }

  componentDidMount() {
    const  record =this.state.record;
    console.log(record);
    this.bloc.singleInit(record.id)
  }

    handleSubmit = (values) => {
   const { history } = this.props;
      /!* const { id } = this.props.match.params;*!/
        /!*console.log(this.props.id);*!/
        this.bloc.update(this.props.record,values);
    };

     renderSelect(title, name, onChange, items, pClass) {
    return (
      <div className={['w-1/2', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <Select onChange={onChange}>
            {
              items.map((item, key) => (
                <Select.Option value={key}>{item} </Select.Option>
              ))
            }
          </Select>
        </Form.Item>
      </div>
    );
  }

     renderSelectBigData(title, name, onChange, items, pClass){
    return (
      <div className={['w-full', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <Select onChange={onChange}
          size='large'
          className="skills"
          mode="tags"
          placeholder=""
          defaultValue={['a10', 'c12']}

           tokenSeparators={[',']}
        >
          {/!*{children}*!/}
</Select>
</Form.Item>
</div>)
}

renderInput(title, name,pClass) {
  return (<div className={['w-1/2', pClass].join(' ')}>
    <Form.Item label={title} name={name}>
      <Input />
    </Form.Item>
  </div>)
}


renderUploadFile(title, name,pClass) {
  return (<div className={['w-1/2', pClass].join(' ')}>
    <Form.Item label={title} name={name}>
      <UploadFile />
    </Form.Item>
  </div>)
}


renderUploadImage(title, name,pClass) {
  return (<div className={['w-1/2', pClass].join(' ')}>
    <Form.Item label={title} name={name}>
      <UploadImage />
    </Form.Item>
  </div>)
}

renderRadio(title, name, onChange, items, pClass) {
  return (
    <div className={['w-1/2', pClass].join(' ')}>
      <Form.Item label={title} name={name}>
        <RadioGroup onChange={onChange}>
          {
            items.map((item, key) => (
              <Radio value={key}>{item} </Radio>
            ))
          }
        </RadioGroup>
      </Form.Item>
    </div>
  );
}
    formRef = React.createRef();
    render() {
        const children = [];
        const { record } = this.state;
        console.log(record);
        return (
            <BlocBuilder
                subject={this.bloc.getSubject()}
                builder={(snap) => {
                    const current = snap.data;

                  return (
                        <Form layout="vertical"
                            initialValues={record}
                            onFinish={this.handleSubmit} ref={this.formRef} onSubmit={this.handleSubmit}
                            >
                          <div className="flex flex-wrap">
                            {this.renderUploadFile('فایل رزومه', 'age', () => {
                            }, [],'pr-2')}
                            {this.renderUploadImage('عکس متقاضی', 'age', () => {
                            }, [],'pr-2')}
                            {this.renderSelect('عنوان شغل', 'job_title', () => {
                            }, [], 'pl-2')}
                            {this.renderSelect('منبع رزومه', 'send_location', () => {
                            }, [], 'pr-2')}
                            {this.renderInput('نام و نام خانوادگی', 'fullname', () => {
                            },[],'pl-4 ')}
                            {this.renderInput('شماره موبایل', 'mobile', () => {
                            }, [],'pr-2')}
                            {this.renderInput('ایمیل', 'email', () => {
                            }, [],'pr-2')}
                            {this.renderSelect('تحصیلات', 'education', () => {
                            }, [], 'pl-2')}
                            {this.renderInput('سن متقاضی', 'age', () => {
                            }, [],'pr-2')}
                            {this.renderRadio('جنسیت', 'sex', () => {
                            }, [], 'pr-2')}
                            {this.renderSelectBigData('مهارت ها', 'skills', () => {
                            }, [], 'pr-2')}
                          </div>
                        </Form>
                      )
             }
         }
         >
            </BlocBuilder>
        );
    }
}
export default UpdateForm

*/
