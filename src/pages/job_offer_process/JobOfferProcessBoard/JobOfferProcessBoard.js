import React, { Component } from 'react';
import {
    Table,
    Tag,
    Dropdown,
    Menu,
    Input,
    Space,
    Button,
    Tabs,
    Steps,
    Drawer,
    AutoComplete,
    Modal, Popconfirm, Row, Col, Card, Avatar, Form
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MyModal from "@/components/Modal/Modal";
import Axios from "axios";


import ApplicantFormSummery from "./../components/JobOfferProcessForm/JobOfferApplicantForm/FormSummery";
import JobOfferEvaluateProcessForm from "./../JobOfferProcessForm/JobOfferEvaluateProcessForm/Form";
import Bloc  from "./../JobOfferProcessBloc/JobOfferApplicantProcessBloc/Bloc"

const { TabPane } = Tabs;
const { Step } = Steps;

class JobOfferProcessBoard extends Component {
    constructor(props) {
        super(props);
        this.bloc = new Bloc();
        this.bloc.init();
    }
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        hasData: true,
        searchText: '',
        searchedColumn: '',
        sortedInfo: null,
        scroll: undefined,
        data:[],
        id:'',
        visible:false,
        firstvisible:false,
        secondvisible:false,
        record:'',
        dt1:'',
    };
    onUpdate(id) {
        const { history } = this.props;
       /* <MyModal></MyModal>*/
        this.bloc.singleInit(id);
       /* history.push("/Update/"+id);*/
        console.log(id);
    }
    onDelete(id,e) {
        e.preventDefault();
        const { history } = this.props;
        const data = this.state.data.filter(item => item.id !== id);
        this.setState({ data });
        this.bloc.Delete(id);
       /* history.push("/delete/:id");*/
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    showModal1 = () => {
        this.setState({
            firstvisible: true,
        });
    };
    showSecondModal = () => {
        this.setState({
            secondvisible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    secondonClose = () => {
        this.setState({
            secondvisible: false,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    firsthandleCancel = (e) => {
        console.log(e);
        this.setState({
            firstvisible: false,
        });
    };

    secondhandleOk = (e) => {
        console.log(e);
        this.setState({
            secondvisible: false,
        });
    };
    secondHandleCancel = (e) => {
        console.log(e);
        this.setState({
            secondvisible: false,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };
    secondhideModal = () => {
        this.setState({
            secondvisible: false,
        });
    };


}
export default withRouter(JobOfferProcessBoard);
