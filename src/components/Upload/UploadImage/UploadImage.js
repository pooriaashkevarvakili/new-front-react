/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import { Modal, Upload, Button } from 'antd';
import { Camera, Cloud } from 'react-feather';
class UploadImage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: -1,
      },
    ],
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = <></>;
    return (
      <div title="آپلود عکس" className="rounded-lg font-all text-blue-color  leading-7 ">
        <Upload onChange={this.handleChange}>
          <p className="ant-upload-hint text-xs font-all text-gray-600">
            {' '}
            عکس متقاضی را با فرمت JPG یا PNG{' '}
          </p>
          <Button
            className=" rounded-lg bg:color-btn-image text-blue-color lg:mt-5  xl:mt-5  flex items-center font-weight-100"
            size="large"
          >
            <div className="flex flex-row">
              <span className="-mr-4">
                <Camera className="text-blue-500" />
              </span>
              <span className="text-sm font-all font-bold mr-2">
                {fileList.length >= 3 ? null : uploadButton} آپلود عکس
              </span>
            </div>
          </Button>
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export default UploadImage;
