// -------------------------------------------------
// title: add job offer
// wireframe: HR_job offers_add job 1 ---> HR_job offers_add job 2 --- >HR_job offers_add job 3
// ---> HR_job offers_add job filled ---> HR_job offers_add job successfull
// Here we are implementing the Menu Section
// -------------------------------------------------

import React, {Component} from "react";
import {Avatar, Col, Form, Input, Row, Select, Spin,} from "antd";

import BlocBuilder from 'bloc-builder-react';
import "./Form.css";
import Bloc from "./../../../JobOfferProcessBloc/JobOfferApplicantProcessBloc/Bloc";

;

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
    this.bloc = new Bloc();

    this.state = {
      dt1: this.props.dt1,
    }
    console.log(this.props.dt1);
  }

  componentDidMount() {
    const dt1 = this.state.dt1;
    console.log(dt1.id);
    this.bloc.singleInit(dt1.id)
  }

  handleSubmit = (values) => {
    this.bloc.save(values);
  };
  formRef = React.createRef();

  render() {
    const {dt1} = this.state;
    console.log(dt1);
    return (
      <BlocBuilder
        subject={this.bloc.getSubject()}
        builder={(snap) => {
          const current = snap.data;

          return (
            <Spin spinning={false}>
              <Form
                className=""
                hideRequiredMark={true}
                onFinish={this.handleSubmit} ref={this.formRef} onSubmit={this.handleSubmit}
                name="validate_other"
                initialValues={dt1}
              >
                <Row className='spacing-reset'>
                  <Col className='pr-3' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Form.Item>
                      <Avatar src={current.image} width={200}/>
                    </Form.Item>
                  </Col>
                  <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Form.Item>
                      <label> {current.fname}</label> <label> {current.lname}</label>
                    </Form.Item>
                  </Col>
                </Row>
                <Row className='spacing-reset'>
                  <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Form.Item>
                      <label> ارسالی از </label> <label> {current.send_ocation_id}</label><label> در تاریخ </label>
                      <label> {current.send_date} </label>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Spin>
          )
        }}
      >
      </BlocBuilder>
    );

  }
}

export default JobOfferApplicantForm
