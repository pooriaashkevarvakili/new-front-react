import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select, Upload, Radio } from 'antd';
import { QuerySelect } from '@/components/QuerySelector';
import UploadFile from '@/components/Upload/UploadFile/UploadFile';
import UploadImage from '@/components/Upload/UploadImage/UploadImage';
import DragDrop from '@/components/Upload/UploadDrag&Drop/DragDrop';

const Dragger = Upload.Dragger;

export default class HInput {
  constructor(title, key, pClass = '') {
    this.title = title;
    this.key = key;
    this.rules = [];
    this.pClass = pClass;
  }

  fromJson(json) {}

  place(value) {
    this.placeholder = value;
    return this;
  }

  icon(value) {
    this.Icon = value;
    return this;
  }

  rows(value) {
    this.rows = value;
    return this;
  }

  required() {
    this.rules.push({ required: true, message: `لطفا فیلد الزامی را وارد کنید` });
    return this;
  }

  min(input) {
    this.rules.push({ min: input });
    return this;
  }

  max(input) {
    this.rules.push({ max: input });
    return this;
  }

  querySelect(url) {
    this.type = 'query-select';
    this.url = url;
    return this;
  }

  text() {
    this.type = 'text';
    return this;
  }

  mode(value) {
    this._mode = value;
    return this;
  }

  size(value) {
    this._size = value;
    return this;
  }

  className(value) {
    this._className = value;
    return this;
  }

  label() {
    this.type = 'label';
    return this;
  }

  Input() {
    this.type = 'Input';
    this.size = 'large';
    return this;
  }

  radio(items) {
    this.type = 'Radio';
    this.items = items;
    this.size = 'large';
    return this;
  }

  select(items) {
    this.type = 'select';
    this.items = items;
    return this;
  }

  textArea() {
    this.type = 'text-area';
    return this;
  }

  number() {
    this.type = 'number';
    return this;
  }

  file() {
    this.type = 'file';
    return this;
  }

  dragdrop() {
    this.type = 'Dragger';
    return this;
  }

  image() {
    this.type = 'image';
    return this;
  }

  checkbox() {
    this.type = 'checkbox';
    return this;
  }

  onChange(fn) {
    this.onChangeFn = fn;
    return this;
  }

  _renderInput() {
    const RadioGroup = Radio.Group;
    const { className, htmlType } = RenderButton;
    switch (this.type) {
      case 'select':
        return (
          <Select
            mode={this._mode}
            placeholder={this.placeholder}
            className={this._className}
            size={this._size}
            onChange={this.onChangeFn}
          >
            {this.items.map((item) => (
              <Select.Option className="font-all" value={item.id} key={item.id}>
                {item.title}{' '}
              </Select.Option>
            ))}
          </Select>
        );
      case 'Radio':
        return (
          <Radio.Group
            className="font-all"
            placeholder={this.placeholder}
            className={this._className}
            size={this._size}
            onChange={this.onChangeFn}
          >
            {this.items.map((item) => (
              <Radio className="font-all" value={item.id} key={item.id}>
                {item.title}{' '}
              </Radio>
            ))}
          </Radio.Group>
        );
      case 'number':
        return (
          <InputNumber
            className="font-all"
            placeholder={this.placeholder}
            onChange={this.onChangeFn}
          />
        );
      case 'checkbox':
        return <Checkbox className="font-all" onChange={this.onChangeFn} />;
      case 'Input':
        return (
          <Input
            className="font-all"
            placeholder={this.placeholder}
            size={this.size}
            onChange={this.onChangeFn}
          />
        );
      case 'text-area':
        return (
          <Input.TextArea
            className="font-all"
            placeholder={this.placeholder}
            onChange={this.onChangeFn}
            rows={this.rows}
          />
        );
      case 'query-select':
        return (
          <QuerySelect placeholder={this.placeholder} url={this.url} onChange={this.onChangeFn} />
        );
      case 'file':
        return (
          <UploadFile placeholder={this.placeholder} url={this.url} onChange={this.onChangeFn} />
        );
      case 'image':
        return (
          <UploadImage placeholder={this.placeholder} url={this.url} onChange={this.onChangeFn} />
        );
      case 'Dragger':
        return (
          <DragDrop placeholder={this.placeholder} url={this.url} onChange={this.onChangeFn} />
        );
      default:
        return (
          <Input className="font-all" placeholder={this.placeholder} onChange={this.onChangeFn} />
        );
    }
  }

  render() {
    return (
      <div className={[this.pClass].join(' ')}>
        <Form.Item label={this.title} name={this.key} rules={this.rules}>
          {this._renderInput()}
        </Form.Item>
      </div>
    );
  }
}

export const RenderButton = (props) => {
  return (
    <Button
      size="large"
      htmlType={props.htmlType}
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};
