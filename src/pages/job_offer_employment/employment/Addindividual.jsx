import React, { PureComponent } from 'react';
import JobOfferBloc from '@/pages/job_offer/model/Bloc';
import BlocBuilder from 'bloc-builder-react';
import HInput from '@/pages/bloc/Input/Input';
import { Form, Spin } from 'antd';


export default class Addindividual extends PureComponent {
  bloc;
  formRef = React.createRef();
  form;
  constructor(props) {
    super(props);
    this.bloc = new JobOfferBloc();
    this.bloc.init();
  }
  render() {
    return (
      /*
تپ پین اول بعد کلیک وفرم
*/
      <BlocBuilder
        subject={this.bloc.subject}
        builder={({ error, data }) => {
          if (error) return <div>Error</div>;
          if (!data) return <div>Data Not Init</div>;
          const pClass = 'md:w-1/2 w-full ';
    return (
      <Spin spinning={data.loading}>
        <Form
          form={this.form}
          ref={this.formRef}
          onSubmit={this.submit}
          layout="vertical"
        >
     <div>
       <div className="flex flex-wrap pl-odd">
         {new HInput('فایل رزومه', 'file', pClass)
           .file()
           .required()
           .render({ fontFamily: 'yek' })}
         {new HInput('عکس متقاضی', 'image', pClass)
           .image()
           .required()
           .render({ fontFamily: 'yek' })}

         {new HInput('عنوان شغل', 'job_titles', pClass)
           .required().size('large')
           .querySelect('my-url')
           .place('انتخاب کنید')
           .render({ fontFamily: 'yek' })}
         {new HInput('منبع رزومه', 'send_locations', 'mr-6 w-5/12')
           .required().size('large')
           .querySelect('my-url')
           .place('انتخاب کنید')
           .render({ fontFamily: 'yek' })}

         {new HInput('نام ونام خانوادگی', 'job_titles', pClass)
           .required().size('large')
           .place('نام متقاضی راواردنمایید')
           .render({ fontFamily: 'yek' })}
         {new HInput('شماره موبایل', 'send_locations', 'mr-6 w-5/12')
           .required()
         .size('large')
           .place('موبایل')
           .render({ fontFamily: 'yek' })}

         {new HInput('ایمیل', 'job_titles', pClass)
           .required()
           .size('large')
           .place('ایمیل راواردنمایید')
           .render({ fontFamily: 'yek' })}
         {new HInput('تحصیلات', 'send_locations', 'mr-6 w-5/12')
           .required()
           .querySelect('my-url').size('large')
           .place('انتخاب کنید')
           .render({ fontFamily: 'yek' })}

         {new HInput('سن متقاضی', 'job_titles', pClass)
           .required().
           size('large')
           .place('سن را به صورت عدد یا سال')
           .render({
                     fontFamily: 'yek',
                   })}
         {new HInput('جنسیت', 'sex', 'mr-6')
           .required()
           .radio(
             [
               {
                 id: 1,
                 title: 'آقا',
               },
               {
                 id: 2,
                 title: 'خانم',
               },
             ],
             1,
           )
           .render({ fontFamily: 'yek' })}
       </div>
       <div>
         {new HInput('مهارت ها', 'send_locations', 'w-full')
           .required()
           .querySelect('my-url')
           .place('انتخاب کنید')
           .render({
                     fontFamily: 'yek',
                   })}
       </div>
     </div>
        </Form>
      </Spin>
    );
        }}
      />
    );
  }
}
