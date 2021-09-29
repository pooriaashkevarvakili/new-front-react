/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:22
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React from 'react';
import { message, Upload } from 'antd';
import { Download, FileText } from 'react-feather';
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
export const DragDrop = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon font-all">
          <Download color={'#9a9a9a'} />
        </p>
        <p className="font-regular font-all font-medium">پرسشنامه ی استخدامی</p>
      </Dragger>
    </div>
  );
};

export const DragDropOne = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Download color={'#9a9a9a'} />
        </p>
        <p className="font-regular font-all font-medium">فرم شماره 3 متقاضی</p>
      </Dragger>
    </div>
  );
};
export const DragDropTwo = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Download color={'#9a9a9a'} />
        </p>
        <p className="font-regular font-all font-medium">فرم شماره 4 متقاضی</p>
      </Dragger>
    </div>
  );
};
export const DragDropThree = () => {
  return (
    <div title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Download color={'#9a9a9a'} />
        </p>
        <div className="flex flex-col">
          <p className="font-regular font-all font-medium">فرم شماره 5 </p>
          <p className="font-regular font-all font-medium">ویژگی های شخصیتی</p>
        </div>
      </Dragger>
    </div>
  );
};
export const DragDropFour = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Download color={'#9a9a9a'} />
        </p>
        <div className="flex flex-col">
          <p className="font-regular font-all font-medium">فرم شماره 6</p>
          <p className="font-regular font-all font-medium">مدیر مستقیم متقاضی</p>
        </div>
      </Dragger>
    </div>
  );
};
export const DragDropFive = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Download color={'#9a9a9a'} />
        </p>
        <div className="flex flex-col">
          <p className="font-regular font-all font-medium">فرم شماره 7</p>
          <p className="font-regular font-all font-medium">مدیر منابع انسانی</p>
        </div>
      </Dragger>
    </div>
  );
};

export const DragDropSix = () => {
  return (
    <div className="" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <FileText color={'#5685ee'} size={40} className="gray-color-bloc" />
        </p>
        <div className="flex flex-col">
          <p className="font-regular font-all font-medium">
            رزومه ی متقاضیان را در اینجا بکشید و رها کنید
          </p>
          <p className="font-regular font-all font-medium">فرمت رزومه باید pdf باشد</p>
        </div>
      </Dragger>
    </div>
  );
};
