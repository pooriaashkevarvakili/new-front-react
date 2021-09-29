// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, {Component} from "react";
import "./Form.css";
import {
    Button,
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
    Tooltip, Modal
} from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import {Translation} from "react-i18next";
import JobOfferEvaluateProcessBloc from "./../../JobOfferProcessBloc/JobOfferEvaluateProcessBloc/Bloc";
import BlocBuilder from 'bloc-builder-react';


const {Option} = Select;
const {TextArea} = Input;

class JobOfferEvaluateForm extends Component {
    constructor(props) {
        super(props);
        this.bloc = new JobOfferEvaluateProcessBloc();
        this.bloc.init();
      /*  this.bloc.initAdmin();*/

        this.state = {
            alreadyLiked: false,
            alreadyDisliked: false,
            likes: 0,
            dislikes: 0,
            action:null,
            visible: true,
            close:false,
        }
    }
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
    handleSubmit = (values) => {
        this.bloc.save(values);
    };
    onClose = () => {
        this.setState({
            close: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    showModal = () => {
        this.setState({
            visible: false,
        });
    };
    formRef = React.createRef();
    render() {
        const {visible} = this.state;
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
                            className=""
                            hideRequiredMark={true}
                            onFinish={this.handleSubmit}  ref={this.formRef} onSubmit={this.handleSubmit}
                            name="validate_other"
                        >
                            <ConfigProvider direction="rtl">
                                <Spin spinning = {current.loading}>
                                    <Row>
                                        <Col lg={{span: 12}} xs={{span: 24}}>

                                            <Form.Item
                                                       label= { <Translation>
                                                           {(t) => {
                                                               return t("job-request-Modal.4");
                                                           }}
                                                       </Translation>}
                                                       labelCol={{span: 24}}
                                            >
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>

                                            <Form.Item className="joboffer-textarea-container"
                                                       label=''
                                                       labelCol={{span: 24}}
                                                      name={['score']}
                                            >
                                                <TextArea  autoSize={{ minRows: 1, maxRows: 1 }}
                                                           placeholder="امتیاز"
                                                         value={current.score}
                                                           onChange={(val) => this.bloc.onChangeModel({score: val})}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 24}} xs={{span: 24}}>
                                            <Form.Item className="joboffer-textarea-container"
                                                       label=''
                                                       labelCol={{span: 24}}
                                                       name={['Comment']}>
                                                <TextArea  autoSize={{ minRows: 4, maxRows: 8 }}
                                                           placeholder="نظر شما در مورد متقاضی"
                                                          value={current.comment}
                                                           onChange={(val) => this.bloc.onChangeModel({comment: val})}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                                            <Form.Item
                                                label=""
                                                className="joboffer-rightform-container"
                                                name={["like"]}
                                            >
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
                                                 name={["dislike"]}
                                            >
                                                <button  onClick = { this.handleDislike }>
                                                    عدم تایید|
                                                    {this.state.dislikes}
                                                    {<LikeFilled/> && <DislikeOutlined/>}
                                                </button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className=''>
                                        <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>

                                                <Form.Item>
                                                  <div className="flex items-center back-grey">
                                                    <Button type="primary">ثبت</Button>
                                                  </div>
                                                </Form.Item>
                                        </Col>
                                            <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>

                                                <div
                                                    className="back-joboffer-container">
                                        {/*            <Button onClick={this.onClose} type="primary">
                                                        Submit
                                                    </Button>*/}
                                                </div>
                                            </Col>
                                        </div>

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
    }
}
export default JobOfferEvaluateForm
