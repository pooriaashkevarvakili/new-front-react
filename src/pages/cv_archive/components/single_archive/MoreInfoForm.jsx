/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/28-10:19
- ------------------------------------------------------------------------------------ *
- This file is MoreInfoForm of cv archive module.
- This Form use [props]
- ----------------------------------------------------------------------------------- */
import React, {Component} from 'react';
import {Button, Descriptions, Layout} from 'antd';
import "./../../../../complete.less";
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
            <Descriptions.Item  label="فایل رزومه"   className="font-regular color-grey-label pl-2 md:w-1/2 "
            >{model.file_upload}</Descriptions.Item>
            <Descriptions.Item label="عکس متقاضی" className="font-regular color-grey-label pr-2 md:w-1/2 "
            >{model.image}</Descriptions.Item>
            <Descriptions.Item label="عنوان شغل" className="font-regular color-grey-label pl-2 md:w-1/2 "
            >{model.job_title_id}</Descriptions.Item>
            <Descriptions.Item label="منبع رزومه" className="font-regular pr-2 color-grey-label md:w-1/2 "
            >{model.send_location_id}</Descriptions.Item>
            <Descriptions.Item label="نام و نام خانوادگی" className="font-regular pl-2 color-grey-label md:w-1/2">
              <span className="text-blue-500"> {model.full_name}</span>
            </Descriptions.Item>
            <Descriptions.Item label="شماره موبایل" className="font-regular color-grey-label pr-2 md:w-1/2"  >
              <span className="text-blue-500 blue-color"> {model.mobile}</span>
            </Descriptions.Item>
            <Descriptions.Item label="ایمیل" className="font-regular pl-2 md:w-1/2 color-grey-label"
            >{model.email}</Descriptions.Item>
            <Descriptions.Item label="تحصیلات" className="font-regular pr-2 md:w-1/2 color-grey-label"
            >{model.education_id}</Descriptions.Item>
            <Descriptions.Item label="سن متقاضی" className="font-regular pl-2 md:w-1/2 color-grey-label"
            >{model.age}</Descriptions.Item>
            <Descriptions.Item label="جنسیت" className="font-regular pr-2 md:w-1/2 color-grey-label"
            >{model.sex_id}</Descriptions.Item>
            <Descriptions.Item label="مهارت ها" className="font-regular pr-1 w-full color-grey-label"
            >{model.skill_id}</Descriptions.Item>
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
