
/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: ۳1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, {Component} from 'react';
import {Form, Input, Select, Spin,Radio} from 'antd';
import UploadFile from "@/components/Upload/UploadFile/UploadFile";
import UploadImage from "@/components/Upload/UploadImage/UploadImage";
import Bloc from "@/pages/cv_archive/CvArchiveBloc/Bloc";
const RadioGroup = Radio.Group;


class CreateForm extends Component {
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
          {/*{children}*/}
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

  render() {
    return (
      <div>
        <Spin spinning={false}>
          <Form layout="vertical">
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
        </Spin>
      </div>
    );
  }
}

export default CreateForm;
