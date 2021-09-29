/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import {Dropdown, Menu, Tag} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import React from "react";

export  default class TableModel {
  url;
  title;
  cols = [];
  pagination;
  count;
  headerBtnTitle;


  constructor(url , title) {
    this.url = url;
    this.title = title;
    this.count = 20;

  }
  fetch() {
  }

  changePage() {
  }

  changeCount() {
  }

  onClickHeaderBtn() {
  }

  onSortChange() {
  }

  onFilter() {
  }

}


export class TableModelCol {
  title;
  key;
  sortable;
  sortDirection;
  filterType;
  isHide;
  pClass;
  constructor(key , title, pClass = '') {
    this.title = title;
    this.key = key;
    this.dataIndex = key;
    this.isHide = false;
    this.filterType = 'text';
    this.sortable = true;
    this.pClass = pClass;
  }

  get filterable() {
    return this.filterType != null
  };


  filter(type){
    this.filterType = type;
    return this;
  }



  setTip(input){
    this.tip = input;
    return this;
  }

  customRender(input){
    this.render = input;
    return this;
  }



  filterSwitch(){
    this.filterType = 'switch';
    return this;
  }


  filterText(){
    this.filterType = 'text';
    return this;
  }



  filterNumber(){
    this.filterType = 'number';
    return this;
  }


  filterDate(){
    this.filterType = 'date';
    return this;
  }



  sort(input){
    this.sortable = input || true;
    return this;
  }





  onSortChange() {
  }

  onFilterChange() {
  }

  onClick() {
  }
}

const opt  = (_, record) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="">
          مشاهده
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">
          حذف
        </a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3">
        بررسی
      </Menu.Item>
    </Menu>
  );
  return <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <MoreOutlined/>
    </a>
  </Dropdown>
};


const tick = (value, row)=>{
  if (value){
    return <TickIcon  color="green"/>
  }
  return  <CloseIcon color="red"/>
};

const status=(_, record)=> {
  const colors = {
    1: 'yellow',
    2: 'green',
    3: 'grey',
    4: 'grey',
  };
  return (<Tag color={colors[record.sts]}>{_}</Tag>)
}

const tbl = new TableModel('/asasas' , 'جدول آزماشی');
tbl.cols.push(new TableModelCol('title' , 'عنوان ستون').filterNumber().sort().customRender(opt))
tbl.cols.push(new TableModelCol('title' , 'عنوان ستون').filterSwitch().sort())
tbl.cols.push(new TableModelCol('is_programmer' , 'برنامه نویس').filterSwitch().sort().customRender(tick))
tbl.cols.push(new TableModelCol('is_programmer' , 'برنامه نویس').filterSwitch().sort().customRender(status))
