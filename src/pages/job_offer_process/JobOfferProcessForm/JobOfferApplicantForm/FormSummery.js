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
import JobOfferApplicantProcessBloc from "./../../../Kanban/JobOfferProcessBloc/JobOfferApplicantProcessBloc/Bloc";

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

        this.state = {
            dt1: this.props.dt1,


        }
        console.log(this.props.dt1);
    }
    componentDidMount() {
        const  dt1 =this.state.dt1;
        console.log(dt1.id);
        this.bloc.singleInit(dt1.id)
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
        const { dt1 } = this.state;
        console.log(dt1);
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
                           className=""
                            hideRequiredMark={true}
                           onFinish={this.handleSubmit} ref={this.formRef} onSubmit={this.handleSubmit}
                            name="validate_other"
                            initialValues={dt1}
                        >
                            <ConfigProvider direction="rtl">
                                <Spin spinning = {current.loading}>
                                    <Row className='spacing-reset'>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                className="joboffer-leftform-container"
                                                name={["ImageEmployee"]}>
                                                <Avatar src={current.image}   width={200} />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                className="joboffer-rightform-container"
                                                name={["department"]}>
                                                <label> {current.fname}</label>    <label> {current.lname}</label>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row className='spacing-reset'>

                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={['org_title']}>
                                                <label> ارسالی از </label>    <label> {current.sendLocation_id}</label><label> در تاریخ </label>  <label> {current.senddate} </label>
                                            </Form.Item>
                                        </Col>
                                    </Row>
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
