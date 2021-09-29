// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, {Component} from "react";
import "./Form.css";
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
    Avatar,
    Comment,
    Tooltip
} from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import PrimaryButton from "./../../../../../BaseComponent/PrimaryButton/primaryButton";
import {Translation} from "react-i18next";
import JobOfferEvaluateProcessBloc from "./../../JobOfferProcessBloc/JobOfferEvaluateProcessBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';
import {Route} from "react-router-dom";
import JobOfferEvaluateProcessUpdateForm from "./Update";
import JobOfferProcess from "../../JobOfferProcess";

const {Option} = Select;
const {TextArea} = Input;

class JobOfferEvaluateUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.bloc = new JobOfferEvaluateProcessBloc();
        this.bloc.init();


        this.state = {
            likes: 0,
            dislikes: 0,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.bloc.singleInit(id)
    }

    handleSubmit = (values) => {
        const { id } = this.props.match.params;
        const { history } = this.props;
        this.bloc.Delete(id);
        history.push("/DataTable");
    };
    handleLike = () => {
        this.setState({
            likes:1,
            dislikes:0,

        })
    }
    handleDislike = () => {
        this.setState({
            likes:0,
            dislikes:1,
        })
    }
    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    formRef = React.createRef();
    render() {
        const children = [];
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
                            name="validate_other">
                            <ConfigProvider direction="rtl">
                                <Spin spinning = {current.loading}>
                                   <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label='امتیاز'
                                                       labelCol={{span: 24}}
                                                       name={['score']}>
                                                <label> {current.score}</label>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label=''
                                                       labelCol={{span: 24}}
                                                       name={['comment']}>
                                                <label> {current.comment}</label>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-rightform-container"
                                                name={["likes"]}>
                                                <button  onClick = { this.handleLike }>
                                                    تایید |
                                                    {this.state.likes}
                                                    {<DislikeFilled /> && <LikeOutlined/>}
                                                    </button>
                                            </Form.Item>
                                        </Col>
                                        <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-leftform-container"
                                                name={["dislikes"]}>
                                                <button  onClick = { this.handleDislike }>
                                                    عدم تایید|
                                                    {this.state.dislikes}
                                                    {<LikeFilled/> && <DislikeOutlined/>}
                                                </button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} md={{span: 24}} xs={{span: 24}}>
                                        <div className='submit-container'>
                                            <Form.Item>
                                                <PrimaryButton    className='icon-gap mr-5 mt-1 sm:mr-1 md:mr-1 sm:mr-1 text-white bg-red-400' htmlType='submit'>
                                                    <Translation>
                                                        {(t) => {
                                                            return t("job-request.8");
                                                        }}
                                                    </Translation>
                                                </PrimaryButton>
                                            </Form.Item>
                                        </div>
                                        </Col>
                                    </Row>
                                </Spin>
                            </ConfigProvider>
                        </Form>
                    )
             }
         }
         >
            </BlocBuilder>

        );
        <Route path="/DataTable/Evaluate/DataTable" component={JobOfferProcess}/>
    }
}
export default JobOfferEvaluateUpdateForm
