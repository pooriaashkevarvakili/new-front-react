/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import HInput from '@/pages/bloc/Input/Input';
import { Plus, Search } from 'react-feather';
import { Button, Spin } from 'antd';
import React,{PureComponent} from 'react';
export default class AddUserOne extends PureComponent{
  state = {
    html:[]
  }
  handleChangeEdit = function(event){
    this.setState({html: event.target.value});
  }.bind(this);
  render() {
    /*
مودال ساختارسیستمی  ادامه افزودن کاربر
*/
    return (

      <div className="flex">
        <section className="md:w-full">
          <div className="flex mt-3">
            {new HInput('سازمان', 'email', 'w-full font-regular').required().place('هاکوپیان').size('large').render()}
          </div>
          <div className="flex mt-3">
            {new HInput('دپارتمان', 'email', 'w-full font-regular').required().place(' مالی').size('large').render()}
          </div>
          <div className="flex mt-2">
            {new HInput(' سمت شغلی', 'email', 'w-full font-regular').required().size('large').place(' حسابدار').render()}
          </div>
          <div className="flex mt-2 ">
            <span html={this.state.html} onChange={this.handleChangeEdit} contentEditable="true"
                  className="bg-blue-100  p-2 border-input text-black font-all  w-full px-4">نام نمایشی</span>
          </div>
          <div className="flex mt-5">
            {new HInput(' نام کاربر', 'email', 'w-full  font-regular').required().place(' جستجوکنید').size('large').render()}
          </div>
          <div className="flex span-search-one absolute left-0 ">
            <Search/>
          </div>
          <div className="flex p-5 ">
            <Button className="w-full" type="dashed">
              <div className="flex border-none justify-center flex-row">
                <span ><Plus className="text-red-500"/></span>
                <span className="font-all text-red-500" >افزودن کاربر</span>
              </div>
            </Button>
          </div>
        </section>
      </div>
    )
  }
}
