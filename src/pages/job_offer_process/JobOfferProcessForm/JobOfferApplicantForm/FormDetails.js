// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, {Component} from "react";
import {
    Form,
    Select,
    ConfigProvider,
    Row,
    Col,
    Checkbox,
    Input,
    Alert,
    Empty,
    Spin,
    Button,
    Card,
    Drawer,
    Tabs,
    Tooltip, Avatar,
} from "antd";
import PrimaryButton from "./../../../../../BaseComponent/PrimaryButton/primaryButton";
import {Translation} from "react-i18next";
import BlocBuilder from 'bloc-builder-react';
import "./Form.css";
import UploadFile from "./../../../../../BaseComponent/Upload/UploadFile/UploadFile";
import UploadImage from "./../../../../../BaseComponent/Upload/UploadImage/UploadImage";
import Radio from "./../../../../../BaseComponent/Radio/Radio";
import SelectMultiple from "./../../../../../BaseComponent/SelectMultiple/SelectMultiple";
import JobOfferApplicantProcessBloc from "./../../JobOfferProcessBloc/JobOfferApplicantProcessBloc/Bloc";


const {Option} = Select;
const {TextArea} = Input;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
class JobOfferApplicantForm extends Component {
    constructor(props) {
        super(props);
        this.bloc = new JobOfferApplicantProcessBloc();
        this.bloc.init();
    }
    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    handleSubmit = (values) => {
        this.bloc.save(values);
    };
    formRef = React.createRef();
    render() {
        return (
            <BlocBuilder
                subject={this.bloc.getFormSubject()}
                builder={(snap) => {
                    const current = snap.data;
                    if (snap.error) {
                        return <ConfigProvider direction={"rtl"}><Alert showIcon message={snap.error} description="لطفا چند لحظه دیگر اقدام کنید" type={'warning'}/></ConfigProvider>
                    }
                    if (!current) {
                        return <Empty />
                    }
                    return (
                        <Form
                           className="job-offer-form"
                            hideRequiredMark={true}
                           onFinish={this.handleSubmit} ref={this.formRef} onSubmit={this.handleSubmit}
                            name="validate_other"
                        >
                            <ConfigProvider direction="rtl">
                                <Spin spinning = {current.loading}>
                                    <Row className='spacing-reset'>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                               /* rules={[
                                                    {
                                                        required: true,
                                                        message: "لطفا فایل رزومه را انتخاب کنید",
                                                    },
                                                ]}*/
                                                //initialValue={current.model.department_id}
                                                label="فایل رزومه"
                                                className="joboffer-rightform-container"
                                                name={["ResumeFile"]}
                                                //rules={[{ required: true, message: 'لطفا فایل رزومه را انتخاب کنید' }]}
                                            >
                                                <span className='spantitle tracking-tight leading-8 pt-0'>رزومه متقاضی را با فرمت PDF آپلود نمایید</span>
                                                <UploadFile/>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="عکس متقاضی"
                                                className="joboffer-leftform-container"
                                                name={["ImageEmployee"]}
                                                //rules={[{ required: true, message: 'لطفا عکس خود را انتخاب کنید' }]}
                                            >
                                                <span className='spantitle'> عکس متقاضی را با فرمت JPG یا PNG آپلود نمایید</span>
                                                <UploadImage/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row className='spacing-reset'>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                /*        rules={[
                                                            {
                                                                required: true,
                                                                message: "لطفا دپارتمان را انتخاب کنید",
                                                            },
                                                        ]}*/
                                                //initialValue={current.model.department_id}
                                                label="نام و نام خانوادگی متقاضی"
                                                className="joboffer-rightform-container"
                                                name={["department"]}
                                            >
                                                <label> {current.fname}</label>    <label> {current.lname}</label>

                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={['org_title']}
                                            >
                                                <label> ارسالی از </label>    <label> {current.sendLocation_id}</label><label> در تاریخ </label>  <label> {current.senddate} </label>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={['job_location']}
                                            >
                                                {/*<div className="gx-profileon-thumb">   <img src={current.image} className="gx-rounded-lg"  alt=""/></div>*/}
                                                <Avatar src={current.image}   width={200} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row className='spacing-reset'>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "لطفا عنوان شغل را انتخاب کنید",
                                                    },
                                                ]}
                                                //initialValue={current.model.department_id}
                                                label="عنوان شغل"
                                                className="joboffer-rightform-container"
                                                name={["job_title"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-right-form"
                                                    showSearch
                                                    onChange={(val) => this.bloc.onChangeModel({jobTitle_id: val})}
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children
                                                            .toLowerCase()
                                                            .indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    {
                                                        current.jobTitles.map((el) => (
                                                            <Option
                                                                className="options-font"
                                                                value={el.id}
                                                                key={el.id}
                                                            >
                                                                {el.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="منبع رزومه"
                                                className="joboffer-leftform-container"
                                                name={["send"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-left-form "
                                                    showSearch
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children
                                                            .toLowerCase()
                                                            .indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    {
                                                        current.sendLocations.map((location) => (
                                                            <Option
                                                                className="options-font"
                                                                value={location.id}
                                                                key={location.id}
                                                            >
                                                                {location.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="نام و نام خانوادگی"
                                                className="joboffer-leftform-container"
                                                name={['fullName']}
                                                //rules={[{ required: true, message: 'لطفا نام و نام خانوادگی خود را وارد نمایید' }]}
                                            >
                                                <Input
                                                    size='large'
                                                    className="joboffer-left-form textinput"
                                                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                                                    optionFilterProp="children"
                                                />


                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="شماره موبایل"
                                                className="joboffer-leftform-container"
                                                name={['mobile']}
                                                //rules={[{ required: true, message: 'لطفا شماره موبایل خود را وارد نمایید' }]}
                                            >
                                                <Input placeholder="شماره موبایل خود را وارد کنید"
                                                    size='large'
                                                    className="joboffer-left-form textinput"
                                                    optionFilterProp="children"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                className="joboffer-leftform-container"
                                                       label='ایمیل'
                                                       name={['email']}
                                                //rules={[{ required: true, message: 'لطفاایمیل خود را وارد نمایید' }]}
                                            >
                                                <Input

                                                    className="joboffer-left-form textinput inline"
                                                    placeholder="لطفاایمیل خود را وارد نمایید"
                                                />
                                            </Form.Item>
                                        </Col>

                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="تحصیلات مورد نیاز"
                                                className="joboffer-leftform-container"
                                                name={["education"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="joboffer-left-form "
                                                    showSearch
                                                    placeholder="انتخاب کنید"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children
                                                            .toLowerCase()
                                                            .indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    {
                                                        current.educations.map((edu) => (
                                                            <Option
                                                                className="options-font"
                                                                value={edu.id}
                                                                key={edu.id}
                                                            >
                                                                {edu.name}
                                                            </Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label='سن متقاضی'
                                                       name={['age']}
                                                //rules={[{ required: true, message: 'لطفا سن خود را وارد نمایید' }]}
                                            >
                                                <Input
                                                    className="joboffer-left-form textinput inline"
                                                    placeholder="لطفا سن خود را وارد نمایید"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label="جنسیت"
                                                className="joboffer-leftform-container inline"
                                                name={["sex"]}
                                                //rules={[{ required:false, message: '' }]}
                                            >
                                                <Radio/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item
                                                label='مهارت های مورد نیاز'
                                                labelCol={{span: 24}}
                                                name={["skills"]}
                                            >
                                                <Select
                                                    size='large'
                                                    className="skills"
                                                    mode="tags"
                                                    placeholder="مهارت های مورد نیاز شما ..."
                                                    defaultValue={['a10', 'c12']} onChange={handleChange} tokenSeparators={[',']}
                                                >
                                                    {children}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}} xl={{span: 24}} md={{span: 24}} >
                                            <Form.Item className="joboffer-textarea-container"
                                                       label='توضیحات'
                                                       labelCol={{span: 24}}
                                                       name={['job_description']}
                                            >
                                                <TextArea  autoSize={{ minRows: 2, maxRows: 6 }}

                                                    placeholder="درباره این موقعیت شغلی و نیازمندی ها و شرایط لازم در اینجا توضیح دهید"
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <div className="drawer-footer">
                                        <div className='submit-container'>
                                            <Form.Item>
                                                <PrimaryButton className='icon-gap mr-5 mt-1 sm:mr-1 md:mr-1 sm:mr-1 text-white bg-red-400' htmlType='submit'>
                                                    <Translation>
                                                        {(t) => {
                                                            return t("job-request.7");
                                                        }}
                                                    </Translation>
                                                </PrimaryButton>
                                            </Form.Item>
                                        </div>

                                        <div
                                            className="back-joboffer-container"
                                        >
                                            <div
                                                onClick={this.props.onClose}
                                                className="back-joboffer-drawer s"
                                            >
                                                <Translation>
                                                    {(t) => {
                                                        return t("base");
                                                    }}
                                                </Translation>
                                            </div>
                                        </div>
                                    </div>
                                </Spin>
                            </ConfigProvider>
                        </Form>
                    )
                }}
            >

            </BlocBuilder>
        );

    }
}
export default JobOfferApplicantForm
