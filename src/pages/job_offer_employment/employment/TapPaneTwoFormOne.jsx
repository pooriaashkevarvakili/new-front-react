import React, { PureComponent, Fragment } from 'react';
import BlocBuilder from 'bloc-builder-react';
import HInput from '@/pages/bloc/Input/Input';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
export default class TapPaneTwoFormOne extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;
  state = {
    visible: false,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }

  showModal = () => {
    this.setState({
                    visible: true,
                  });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };


  render() {
    /*
تپ پین دوم فرم بعد کلیک
*/
    return (
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          return (
            <Fragment>
              <div className="flex flex-wrap flex flex-row  ">
                {new HInput('تاریخ مصاحبه', 'dateInterView', 'w-5/12  mr-3')
                  .required().size('large')
                  .place('انتخاب کنید')
                  .render({})}
                {new HInput('زمان مصاحبه', '', 'w-24  mr-16')
                  .required()
                  .timepicker('شروع')
                  .render({})}
                <p className="mt-10 mr-2 font-all">تا</p>
                {new HInput('', '', 'w-24  mr-3 mt-8').required().timepicker('پایان').render({})}
              </div>
              <div className="flex flex-row">
                {new HInput('نوع مصاحبه', 'interview-title', 'w-5/12 mt-3  mr-3')
                  .required().size('large')
                  .place('انتخاب کنید')
                  .render({})}
                {new HInput('محل مصاحبه', 'location-interview', 'w-5/12 mr-16 mt-3 ')
                  .required().size('large')
                  .place('انتخاب کنید')
                  .render({})}
              </div>
              <div className="flex flex-row">
                {new HInput('یادداشت (برای مصاحبه کنندگان)', 'noteOne', 'w-5/12  font-regular mr-3')
                  .required().size('large')
                  .place('')
                  .render({})}
                  {/*<span className=" w-32 text-sm mr-5">مصاحبه کنندگان</span>*/}
                {/*{new HInput('مصاحبه کنندگان', 'noteOne', 'w-5/12 font-regular mr-3')*/}
                {/*  .label()*/}
                {/*  .render({})}*/}
                <img src="/images/image10.jpg" className="w-10 h-10 mt-8 mr-12" alt="shakiba" />
                <img src="/images/image9.jpg" className="w-10 h-10 mt-8 mr-2" alt="shakiba" />
                <img src="/images/Group.png" className="w-10 h-10 mt-8 mr-2" alt="shakiba" />
              </div>
              <div className="container">
                <div></div>
                <div>
                  <div className="border-solid border-width rounded-lg mt-3  w-11/12 p-3 ">
                    {new HInput('ارسال متقاضی', 'dateInterView', ' font-regular mr-3')
                      .checkbox().required()
                      .render({})}
                    <div className="text-xs font-light font-all mr-4 -mt-5">
                      زمان بندی مصاحبه برای متقاضی ایمیل وپیامک می شود
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }}
      />
    );
  }
}
