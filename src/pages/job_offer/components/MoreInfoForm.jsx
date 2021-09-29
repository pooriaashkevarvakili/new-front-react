/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/28-10:19
- ------------------------------------------------------------------------------------ *
- This file is MoreInfoForm of job offer module.
- This Form use [props]
- ----------------------------------------------------------------------------------- */
import React, {Component} from 'react';
import {Descriptions,Button, Layout } from 'antd';
import "./../../../complete.less";
const { Header, Footer, Content } = Layout;
class MoreInfoForm extends Component {
  render() {
    const {model} = this.props;
    console.log(model);
    return (
      <div>
        <Layout className="bg-white">
          <Content>
        <div className="flex flex-wrap">
          <Descriptions title="" layout="vertical" size="large" bordered={false} colon={false}  column={2}>
            <Descriptions.Item   label="دپارتمان"  className="pr-2 md:w-1/2">{model.department_id}</Descriptions.Item>
            <Descriptions.Item label="عنوان شغل" className="font-regular color-grey-label pr-2 md:w-1/2 "
                               >{model.job_title_id}</Descriptions.Item>
            <Descriptions.Item label="سمت سازمانی" className="font-regular color-grey-label pl-2 md:w-1/2 "
                               >{model.level_id}</Descriptions.Item>
            <Descriptions.Item label="محل کار" className="font-regular pr-2 color-grey-label md:w-1/2 "
                               >{model.work_place_id}</Descriptions.Item>
            <Descriptions.Item label="شرح موقعیت شغلی" className="font-regular color-grey-label"  span={2}>
              <span className="text-blue-500"> {model.description_id}</span>
            </Descriptions.Item>
            <Descriptions.Item label="مهارت ها" className="font-regular color-grey-label"  span={2}>
              <span className="text-blue-500 blue-color"> {model.skill}</span>
            </Descriptions.Item>
            <Descriptions.Item label="تحصیلات موردنیاز" className="font-regular pl-2 md:w-1/2 color-grey-label"
                               >{model.education_id}</Descriptions.Item>
            <Descriptions.Item label="سابقه کاری موردنیاز" className="font-regular pr-2 md:w-1/2 color-grey-label"
                               ><span className="tex-color:blue-color bg-color:color-btn-image">{model.work_experience_id}</span> </Descriptions.Item>
            <Descriptions.Item label="جنسیت متقاضی" className="font-regular pl-2 md:w-1/2 color-grey-label"
                               >{model.sex_id}</Descriptions.Item>
            <Descriptions.Item label="علت درخواست استخدام" className="font-regular pr-2 md:w-1/2 color-grey-label"
                               >{model.reason_request_id}</Descriptions.Item>
          </Descriptions>
        </div>
          </Content>
        <div className="flex flex-wrap back-grey">
          <div className="flex-1"/>
          <Button danger className="pr-2 pl-2  md:w-1/5 mt-56 items-center"  onClick={this.onClose} type="" htmlType="">بازگشت </Button>
        </div>
        </Layout>
      </div>
    );
  }
}

export default MoreInfoForm;
