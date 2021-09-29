/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/12-8:42
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React,{PureComponent} from "react";
import Edit from "../svg/edit .svg"
import AccountCircle from "./svg/accountCircle.svg"
import JobSide from "./JobSide"
import SendDeparteman from "./SendDeparteman"
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";
import Aparteman from "./svg/Aparteman.svg"
import { MoreHorizontal, Plus, XCircle } from 'react-feather';
import { Menu,Dropdown } from 'antd';
import AddUser from '@/pages/Manage/structureOrganizational/AddUser';
import Delete from '@/pages/Manage/structureOrganizational/Delete';

class CustomNodeChart extends PureComponent  {
  render() {
    const menu = (
      <Menu style={{
        width: "196.3px",
        height: "168.7px"
      }}>
        <Menu.Item>
          <div className="flex flex-row">
    <span>


      <Plus color={"#f87171"} size={20}/>
    </span>
            <JobSide/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex flex-row">
    <span>
      <Plus color={"#f87171"} size={20}/>
    </span>
            <SendDeparteman/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex flex-row">
       <span>
      <img src={Edit} alt=""/>
    </span>
            <span   className="mr-4 font-all text-xs">ویرایش</span>

          </div>
        </Menu.Item>
        <Menu.Item >
          <div className="flex flex-row">
    <span>
      <XCircle color={"#c4c4c4"} size={20}/>
    </span>
            <Delete/>
          </div>
        </Menu.Item>
      </Menu>
    );
    const menuOne = (

      <Menu style={{
        width: "196.3px",
        height: "132.3px"
      }}>
        <Menu.Item>
          <div className="flex flex-row">
    <span>
      <Plus color={"#f87171"} size={20}/>
    </span>
            <AddUser/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex flex-row">
    <span>
      <img src={Edit} alt=""/>
    </span>
            <span   className="mr-4 font-all text-xs">ویرایش</span>
          </div>
        </Menu.Item>
        <Menu.Item >
          <div className="flex flex-row">
    <span>
      <XCircle color={"#c4c4c4"} size={20}/>
    </span>
            <Delete/>
          </div>
        </Menu.Item>
      </Menu>
    );
    const menuTwo = (
      <Menu style={{
        width: "196.3px",
        height: "89.6px"
      }}>

        <Menu.Item>
          <div className="flex flex-row">
    <span>
      <img src={Edit} alt=""/>
    </span>
            <Delete/>
          </div>
        </Menu.Item>
        <Menu.Item >
          <div className="flex flex-row">
    <span>
      <XCircle color={"#c4c4c4"} size={20}/>
    </span>
            <Delete/>
          </div>
        </Menu.Item>
      </Menu>
    );
    const menuThree = (
      <Menu style={{
        width: "196.3px",
        height: "132.3px"
      }}>
        <Menu.Item>
          <div className="flex flex-row">
    <span>
      <Plus color={"#f87171"} size={20}/>
    </span>
            <SendDeparteman/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex flex-row">
    <span className="font-all">
      <img src={Edit} alt=""/>
    </span>
            <span className="mr-3">
        ویرایش
     </span>
          </div>
        </Menu.Item>
        <Menu.Item >
          <div className="flex flex-row">
    <span>
      <XCircle color={"#c4c4c4"} size={20}/>
    </span>
            <Delete/>
          </div>
        </Menu.Item>
      </Menu>
    );
    const svgZiro=(
      <div className="flex flex-row p-2">
        <img src={Aparteman} alt="" className="mr-3"/>
        <span className="mr-5 font-all text-sm">سازمان هاکوپیان</span>
        <Dropdown className="cursor-pointer" overlay={menuThree}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgOne=(
      <div className="flex flex-row p-2">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5"/>
        <span className="mr-8 font-all text-sm">مدیریت</span>
        <Dropdown className="cursor-pointer" overlay={menu}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTwo=(
      <div className="flex flex-row p-2">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5"/>
        <span className="mr-12 font-all text-sm">مالی</span>

        <Dropdown className="cursor-pointer" overlay={menu}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgThree=(
      <div className="flex flex-row p-2">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5"/>
        <span className="mr-8 font-all text-sm">انفورماتیک</span>
        <Dropdown className="cursor-pointer" overlay={menu}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgFour=(
      <div className="flex flex-row p-2">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5 "/>
        <span className="mr-6 font-all text-sm">منابع انسانی</span>
        <Dropdown className="cursor-pointer" overlay={menu}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgFive=(
      <div className="flex flex-row p-2">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5"/>
        <span className="mr-10 font-all text-sm">بازرگانی</span>
        <Dropdown className="cursor-pointer" overlay={menu}>
          <span className="absolute left-0 ml-3 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgSix=(
      <div className="flex flex-row bg-blue-100 p-3 ">
        <span className="mr-16 font-all text-sm ">مدیرعامل</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-4 "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgSeven=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" mr-8 font-all text-sm">رئیس هیئت مدیره</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgEight=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-16">حسابدار</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgNine=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-16">مدیرمالی</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-10">کاردان حسابداری</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgEleven=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-16">منشی</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTweleve=(
      <div className="flex flex-row p-3">
        <img src="/images/networkpngtwo.png" alt="" className="mr-4 mt-1 w-5 h-5"/>
        <span className=" font-all text-sm mr-10">خزانه</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgThreeTeen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-12">تحصیل دار</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgFourTeen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-10">کارشناس شبکه</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgFiveTeen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-12">برنامه نویس</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgSixTeen=(
      <div className="flex flex-row bg-white  p-3">
        <span><img src={AccountCircle} className="mr-8" alt=""/></span>
        <span className=" font-all text-black  text-sm mr-2 ">علی رفیعی</span>
        <Dropdown className="cursor-pointer" overlay={menuTwo}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgSevenTeen=(
      <div className="flex flex-row bg-white  p-3">
        <span><img src={AccountCircle} className="mr-8" alt=""/></span>
        <span className=" font-all text-black  text-sm mr-2 ">مینا سعیدزاده</span>
        <Dropdown className="cursor-pointer" overlay={menuTwo}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgEightTeen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-12">کارشناس شبکه</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgNineTeen=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-8">مدیرمنابع انسانی</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTwenty=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-16">کارشناس</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTwentyOne=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-12">مسئول دفتر</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTwentyTwo=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-12">مدیربازرگانی</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const svgTwentyThree=(
      <div className="flex flex-row bg-blue-100 p-3">
        <span className=" font-all text-sm mr-8">کارشناس بازرگانی</span>
        <Dropdown className="cursor-pointer" overlay={menuOne}>
          <span className="absolute left-0 ml-3  "><MoreHorizontal onClick={e => e.preventDefault()}/></span>
        </Dropdown>
      </div>
    )
    const ds = {
      id: "n1",

      title: svgZiro,
      children: [
        { id: "n2", title:svgOne

          ,children:[
            {
              id   : 1,
              title: svgSix
            },
            {
              id:2,
              title:svgSeven
            }
          ] },
        {
          id: "n3",

          title:svgTwo,
          children: [
            { id: "0", title: svgEight },
            { id: "1", title: svgNine },   { id: "5", title: svgTen },
            { id: "2", title: svgEleven },
            { id: "3", title: svgTweleve },
            { id: "4", title: svgThreeTeen },
          ]
        },
        { id: "n4", title: svgThree,
          children: [
            {
              id: "1", title: svgFourTeen
            },
            {
              id: "2", title:svgFiveTeen,
              children: [
                {
                  id:"1",
                  title:svgSixTeen
                },
                {
                  id:"2",
                  title:svgSevenTeen
                }
              ]
            }
          ]
        },
        { id: "n5", title: svgFour
          ,children: [
            {
              id: "1",
              title:svgEightTeen
            },
            {
              id: "2",
              title:svgNineTeen
            },
            {
              id: "3",
              title:svgTwenty
            },
            {
              id: "4",
              title:svgTwentyOne
            }
          ]

        },
        {
          id: "n6",

          title: svgFive,
          children: [{ id: "1",  title: svgTwentyTwo },

                     {
                       id: "2",  title: svgTwentyThree
                     }]
        }
      ]
    };
  return (
    <OrganizationChart
      datasource={ds}
      className="font-all"
      chartClass="myChart"
      NodeTemplate={MyNode}

    />
  );
}
}
export default CustomNodeChart;
