/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import { Button, message, Upload } from 'antd';
import { UploadOutlined, FileAddOutlined } from '@ant-design/icons';
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} رزومه با موفقیت بارگذاری شد`);
    } else if (status === 'error') {
      message.error(`${info.file.name} آپلود رزومه انجام نشد`);
    }
  },
};

const DragDrop = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <FileAddOutlined className="blue-color" />
          {/*  <img alt="" className="" src={require("./../../../Icons/images/220c2335-ff26-490d-9248-affcc9b94f69.svg")} />*/}
        </p>
        <p className="ant-upload-text font-all">رزومه های متقاضیان را در اینجا بکشید و رها کنید</p>
        <p className="ant-upload-hint font-all">
          {' '}
          <span>*</span> فرمت رزومه ها باید PDF باشد{' '}
        </p>
      </Dragger>
    </div>
  );
};
export default DragDrop;
