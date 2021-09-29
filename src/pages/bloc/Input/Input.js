import React  from 'react';
import { Checkbox, Form, Input, InputNumber, Select, TimePicker, Radio ,ConfigProvider,DatePicker} from 'antd';
import moment from 'moment';
import fa_IR from "antd/lib/locale/fa_IR";
import { DatePicker as DatePickerJalali, Calendar } from "antd-jalali";
import { QuerySelect } from '@/components/QuerySelector';
import UploadFile from '@/components/Upload/UploadFile/UploadFile';
import UploadImage from '@/components/Upload/UploadImage/UploadImage';

export default class HInput {
  state = {
    value: [],
    title: [],
  };

  constructor(title, key, pClass = '') {
    this.title = title;
    this.key = key;
    this.rules = [];
    this.pClass = pClass;
    this.placeholder = title;
  }

  place(value) {
    this.placeholder = value;
    return this;
  }

  required() {
    this.rules.push({ required: true, message: `لطفا فیلد الزامی را وارد کنید` });
    return this;
  }

  size(value) {
    this._size = value;
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

  select(items) {
    this.type = 'select';
    this.items = items;
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

  label() {
    this.type = 'label';
    return this;
  }

  password() {
    this.type = 'text';
    this.htmlType = 'password';
    return this;
  }

  textarea() {
    this.type = 'textarea';
    return this;
  }
  line() {
    this.type = 'line';
    return this;
  }
  rangePicker() {
    this.type = 'line';
    return this;
  }
  timepicker() {
    this.type = 'timepicker';
    return this;
  }

  number() {
    this.type = 'number';
    return this;
  }
  label() {
    this.label = 'label';
    return this;
  }

  file() {
    this.type = 'file';
    return this;
  }

  image() {
    this.type = 'image';
    return this;
  }

  radio(items, initialValue) {
    this.type = 'radio';
    this.items = items;
    if (initialValue) {
      this.initialValue = initialValue;
    }
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
    const { TextArea } = Input;
    const format = 'HH:mm';

    switch (this.type) {
      case 'select':
        return (
          <Select mode={this._mode} placeholder={this.placeholder} onChange={this.onChangeFn}>
            {this.items.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.title}{' '}
              </Select.Option>
            ))}
          </Select>
        );
      case 'number':
        return (
          <InputNumber
            className="font-all"
            placeholder={this.placeholder}
            onChange={this.onChangeFn}
          />
        );
      case 'line':
        return (
          <Input
            className="font-all"
            placeholder={this.placeholder}
            bordered={false}
            onChange={this.onChangeFn}
          />
        );
      case 'checkbox':
        return (
          <Checkbox className="font-all" onChange={this.onChangeFn}>
            {this.title}
          </Checkbox>
        );

      case 'radio':
        return (
          <div>
            <Radio.Group className="font-all" defaultValue={this.initialValue}>
              {this.items.map((item) => (
                <Radio value={item.id}>{item.title}</Radio>
              ))}
            </Radio.Group>
          </div>
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
          <UploadImage placeholder={this.placeholder} onChange={this.onChangeFn} url={this.url} />
        );
      case 'textarea':
        return <TextArea rows={5} />;
      case 'timepicker':
        return (
          <TimePicker

            defaultValue={moment('12:08', format)}
            placeholder={this.placeholder}
            format={format}

         />


        );
      case 'rangePicker':
        return (
          <ConfigProvider locale={fa_IR}  direction="rtl">
          <DatePickerJalali   placeholder={this.placeholder} />
            <DatePickerJalali.RangePicker />
          </ConfigProvider>
          // <ConfigProvider locale={fa_IR}  direction="rtl">
          // <DatePicker
          //
          //   placeholder={this.placeholder}
          //
          // />
          // </ConfigProvider>

        );
      case 'text':
      default:
        return (
          <Input
            className="font-all"
            type={this.htmlType}
            size={this._size}
            placeholder={this.placeholder}
            onChange={this.onChangeFn}
          />
        );
    }
  }

  render() {
    return (
      <div className={[this.pClass].join(' ')}>
        <Form.Item
          label={this.type == 'checkbox' ? null : this.title}
          name={this.key}
          rules={this.rules}
        >
          {this._renderInput()}
        </Form.Item>
      </div>
    );
  }
}
