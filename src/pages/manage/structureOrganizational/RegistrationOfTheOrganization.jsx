/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/10/30-15:13
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, {PureComponent,Fragment} from "react"
import {Button} from "antd"
import {Plus} from "react-feather"
import Chart from "./Chart"
export default class RegistrationOfTheOrganization extends PureComponent{

  render() {


    return (
      /*
ساختار سازمانی وچارت ها
*/
      <Fragment>
        <section>
          <div className="bg-white" style={{
            width: "1650px",
            height: "882px"
          }}>
            <div className="flex">
              <section className="md:w-2/3">
                <section className="flex  ">
                  <div className="mt-5 mr-5 flex flex-row">
                    <span className="text-2xl font-all" >ساختار سازمانی</span>
                    <div className="absolute left-0 ml-6">
                    <Button   type="primary">
                      <div className="flex flex-row">
                        <span className="flex items-center">
                          <Plus className="text-white"/>
                        </span>
                      <span className="text-white  text-sm font-extrabold font-all">ایجادساختارجدید</span>
                      </div>
                    </Button>
                    </div>
                  </div>
                </section>

              </section>

            </div>
            <div className="flex mt-20  ">
              <section className="md:w-11/12">
                <section className="flex justify-center  ">
                  <div>

                  </div>
                  <Chart/>
                  {/* code charts

                  */}

                </section>

              </section>

            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
