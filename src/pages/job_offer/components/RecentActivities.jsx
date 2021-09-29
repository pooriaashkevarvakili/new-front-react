/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/24-10:19
- ------------------------------------------------------------------------------------ *
- This file is RecentActivities of job offer module.
- This Form use [bloc]
- ----------------------------------------------------------------------------------- */
import React,{PureComponent} from "react"
import {Button, Card, Spin, Timeline} from "antd";
import Bloc from "@/pages/job_offer/model/ActivityBloc";
import BlocBuilder from "bloc-builder-react";
import {RenderButton} from "@/components/Input/Input";
export default class RecentActivities extends PureComponent {
  bloc;
  constructor(props) {
    super(props);
    this.bloc = new Bloc();
  }
  componentDidMount() {
    this.inject();
  }
  async inject(){
   const getActivity= await this.bloc.get(1);
   console.log(getActivity);
  }
  render() {
    return (
      <BlocBuilder subject={this.bloc.subject} builder={({error, data}) => {
        if (error) return <div>Error</div>;
        if (!data) return <div>Data Not Init</div>;
        if (data)
          return (
            <Spin spinning={data.loading}>
              <div className="flex flex-wrap">
                <section className="md:w-1/3">
                  <div className="">
                    <p className="font-bold">آخرین فعالیت ها</p>
                  </div>
                  <div className="flex align-end justify-end mt-2  ">
                    <Timeline>
                      {data.getActivity.map((item) =>
                      <Timeline.Item color="gray">
                        <Card extra={
                          <section>
                            <div className="flex flex-row">
                              <img className="w-12 h-12 flex flex-start"
                                   alt="example" src={item.image}/>
                              <div className="flex flex-col  mr-2">
                                <p className="font-bold">{item.send_date}</p>
                                <p className="font-regular"><label className="text-gray-400">{item.status_id}</label>{item.fname}{item.lname}</p>
                                <p className="font-bold">{item.job_offer_id}</p>
                              </div>
                            </div>
                          </section>
                        }>
                        </Card>
                      </Timeline.Item>
                      )}
                    </Timeline>
                  </div>
                </section>
              </div>
              <div className="flex flex-wrap back-grey">
                <div className="flex-1"/>
                <Button danger className="pr-2 pl-2  md:w-1/5 mt-56 items-center"  onClick={this.onClose} type="" htmlType="">بازگشت </Button>
              </div>
            </Spin>
          );
      }}/>
    );
  }
}
