/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/17-11:50
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Plus } from 'react-feather';
import { Button, Modal } from 'antd';
import MenuOne from './MenuOne';
import 'react-quill/dist/quill.snow.css';
export default class CardNewMassage extends PureComponent {
  state = {
    loading: false,
    visible: false,
    value:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد',
  };

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

  handleChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { visible, loading } = this.state;

    const menuOne = (
      <div id="menu-card-one" className="bg-white mr-56  menu-new">
        <MenuOne />
      </div>
    );
    return (
      /*
میزکار دراپ داون پیام جدید
*/
      <div>
        <Button
     type="primary"
        className="w-36 mr-5 mt-5 " onClick={this.showModal}>
          <div className="flex flex-row">
            <span>
              <Plus color={'#fff'} />
            </span>
            <span className="text-white font-all">ارسال پیام جدید</span>
          </div>
        </Button>
        <Modal
          width={800}
          className="font-all"
          visible={visible}
          title="ارسال پیام جدید"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <MenuOne />
        </Modal>
      </div>
    );
  }
}
