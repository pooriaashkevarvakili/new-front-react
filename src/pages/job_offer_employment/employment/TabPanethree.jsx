/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent, Fragment } from 'react';
import { Form } from 'antd';

import {
  DragDrop,
  DragDropOne,
  DragDropTwo,
  DragDropThree,
  DragDropFour,
  DragDropFive,
} from '@/components/Upload/employment form/DrapDropEmployment';
import TappaneThreeRecentActives from '@/pages/job_offer_employment/employment/TappaneThreeRecentActives';
export default class TabPanethree extends PureComponent {
  renderUploadFile(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDrop />
        </Form.Item>
      </div>
    );
  }
  renderUploadFileOne(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropOne />
        </Form.Item>
      </div>
    );
  }
  renderUploadFileTwo(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropTwo />
        </Form.Item>
      </div>
    );
  }
  renderUploadFileThree(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropThree />
        </Form.Item>
      </div>
    );
  }
  renderUploadFileFour(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropFour />
        </Form.Item>
      </div>
    );
  }
  renderUploadFileّFive(title, name, pClass) {
    return (
      <div className={['w-40 mt-3 mr-5', pClass].join(' ')}>
        <Form.Item label={title} name={name}>
          <DragDropFive />
        </Form.Item>
      </div>
    );
  }
  render() {
    return (
      /*
تپ پین سوم
*/
      <Fragment>
        <div className="flex">
          <section className="md:w-3/4">
            <div className="flex flex-row">
              {this.renderUploadFile('', 'age', () => {}, [], 'pr-2')}
              {this.renderUploadFileOne('', 'age', () => {}, [], 'pr-2')}
              {this.renderUploadFileTwo('', 'age', () => {}, [], 'pr-2')}
            </div>
            <div className="flex flex-row">
              {this.renderUploadFileThree('', 'age', () => {}, [], 'pr-2')}
              {this.renderUploadFileFour('', 'age', () => {}, [], 'pr-2')}
              {this.renderUploadFileّFive('', 'age', () => {}, [], 'pr-2')}
            </div>
          </section>
          <section className="md:w-4/6">
            <TappaneThreeRecentActives />
          </section>
        </div>
      </Fragment>
    );
  }
}
