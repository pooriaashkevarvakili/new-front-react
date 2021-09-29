/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created:1399/08/21-14:21
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { createRef, Fragment, PureComponent } from 'react';
import Axios from 'axios';
import TabPaneFour from './TabPaneFour';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import RecentActivities from './RecentActivities';

export default class JobOfferAssessmentTabpaneFour extends PureComponent {
  bloc;
  formRef = createRef();
  form;
  componentDidMount() {
    Axios.get('http://localhost:3000/api/FormTabpane').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  async submit() {
    const values = await this.formRef.current.validateFields();
    this.bloc.save(values);
  }
  render() {
    return (
      /*
تپ پین صفحه ی4
*/
      <Fragment>
        <div className="flex">
          <section className="md:w-2/3">
            <div className="flex flex-wrap">
              <TabPaneFour />
            </div>
            <div></div>
          </section>
          <RecentActivities />
        </div>
      </Fragment>
    );
  }
}
