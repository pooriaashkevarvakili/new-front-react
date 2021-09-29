/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { Select } from 'antd';
import querystring from 'querystring';
import request from "@/utils/request";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";

const { Option } = Select;

export class QuerySelect extends React.Component {

  timeout;
  currentValue;

  fetch(value, callback) {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.currentValue = value;
    this.timeout = setTimeout(async ()=>{
      callback(await this.getData(value));
      }, 300);
  }


  async getData(value) {
    console.log(value);
    try{
      const str = querystring.encode({
        q: value,
      });

      const res = await request(`${this.props.url}?${str}`);
      if (this.currentValue === value) {
        const {result} = res;
        const data = [];
        result.forEach(r => {
          data.push({
            value: r[0],
            text: r[0],
          });
        });
        return data;
      }
    }catch(err){
      return [
        {
          id:1,
          title:'salam'
        }
      ];
    }
  }




  constructor(props, context) {
    super(props, context);
  }

  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    if (value) {
      this.fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  };
 
  render() {
    const options = this.state.data.map(d => <Option key={d.id}>{d.title}</Option>);
    return (
      <Select

        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        filterOption={false}
        suffixIcon={<DownOutlined />}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}
