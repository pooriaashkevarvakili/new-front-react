/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-15:55
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import {Card, Typography, Alert, Tabs, Button} from 'antd';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import EditableTag from "@/components/EditableTag";
import {Divider} from "antd/es";
import {useIntl} from 'umi';


export default () => (
  <PageHeaderWrapper content="توضیحات مدیریت ثابت ها">
    <Card bodyStyle={{padding: 0}}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={useIntl().formatMessage({id: 'dep'})} key="1">
          <EditableTag/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="عنوان شغلی" key="2">
          <EditableTag/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="سمت سازمانی" key="3">
          <EditableTag/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="محل کار" key="4">
          <EditableTag/>
        </Tabs.TabPane>
      </Tabs>
      <Divider/>
      <div className="flex justify-end pb-5 pl-5">
        <Button type="primary" onClick={() => {
          setTimeout(() => {
          }, 100)
        }}>
          ذخیره تغییرات
        </Button>
      </div>
    </Card>
  </PageHeaderWrapper>
);
