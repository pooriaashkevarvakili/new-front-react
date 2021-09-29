/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import { Button, Upload } from 'antd';
import { Cloud } from 'react-feather';
class UploadFile extends React.Component {
  handleChange = (info) => {
    let fileList = info.fileList;
    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);
    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });
  };
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <div title="کنترل کامل">
        <Upload {...props}>
          <p className="ant-upload-hint text-xs text-gray-600 font-all">
            {' '}
            رزومه متقاضی را با فرمت PDF آپلود نمایید{' '}
          </p>
          <Button
            className=" rounded-lg bg:color-btn-image text-blue-color lg:mt-2  xl:mt-2  flex items-center font-weight-100"
            size="large"
          >
            <div className="flex flex-row">
              <span className="-mr-4">
                <Cloud className="text-blue-500" />
              </span>
              <span className="text-sm font-bold mr-2 font-all">آپلود رزومه</span>
            </div>
          </Button>
        </Upload>
      </div>
    );
  }
}
export default UploadFile;
