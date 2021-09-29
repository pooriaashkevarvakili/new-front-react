/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { FileText } from 'react-feather';
import RecentActivities from './RecentActivities';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
import TabPaneTwoForm from './TabPaneTwoForm';
export default class TabPaneTwo extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;

  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      /*
تپ پین دوم
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          return (
            <div className="flex">
              <section className="md:w-2/3">
                <section className="flex items-center justify-center ">
                  <section className="md:w-2/3">
                    <div className="flex flex-wrap flex-col  items-center justify-center  ml-10  mt-24 ">
                      <FileText size={40} />
                      <div className="mt-5">
                        <p className="font-regular font-all">
                          هنوز مصاحبه ای با متقاضی تنظیم نشده است
                        </p>
                      </div>
                      <div>
                        <TabPaneTwoForm />
                      </div>
                    </div>
                  </section>
                </section>
              </section>
              <RecentActivities />
            </div>
          );
        }}
      />
    );
  }
}
