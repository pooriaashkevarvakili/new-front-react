// -----------------------------
// here we are implementing jobOfferAddButton component
// we user Drawer component from ant design
// -----------------------------

import React from "react";
import {Translation} from "react-i18next";
import "./JobOfferProcesAddButton.css";
import PrimaryButton from "../../../../BaseComponent/PrimaryButton/primaryButton";
import {Button, Card, Col, Row, Input, Modal, Tabs, Form, Select, Divider, Menu, Steps, ConfigProvider,Popconfirm, message } from "antd";
import JobOfferApplicantFormSummery from "./../JobOfferProcessForm/JobOfferApplicantForm/FormSummery";
import JobOfferApplicantFormDetails from "./../JobOfferProcessForm/JobOfferApplicantForm/FormDetails";
import JobOfferEvaluateProcessForm from "./../JobOfferProcessForm/JobOfferEvaluateProcessForm/Form";
import AddPerson from "../../../../Icons/images/addPerson.svg";
import plusIcon from "../../../../Icons/images/shapes-and-symbols.svg";
import JobOfferApplicantProcessBloc from "./../JobOfferProcessBloc/JobOfferApplicantProcessBloc/Bloc";
import DataTable from "./../DataTable/Evaluate/DataTable";
import Axios from "axios";
import AddResume from "../../../../Icons/images/addResume.svg";
const { TabPane } = Tabs;



class JobOfferApplicantAddButton extends React.Component {
    render() {

        const fullWidth = global.window.innerWidth > 600 ? ('675px') : ('100%');
        return (
            <>
                <Col xl={{span:12}} lg={{span:12}} sm={{span:24}} md={{span:12}} xs={{span:24}} >
                    <PrimaryButton className='border border-red-400 rounded-lg md:mt-2 sm:mt-2 lg:ml-4 xl:ml-4 sm:ml-1 sm:mb-2 xl:mr-2 lg:mr-2 md:mr-3 text-white bg-red-400 ' onClick={this.showDrawerAddPerson} type="default" danger>
                        <Translation>
                            {(t) => {
                                return t("job-request.6");
                            }}
                        </Translation> <img src={AddPerson} alt='AddPerson'/>
                    </PrimaryButton>
                    <PrimaryButton className='border border-red-400 rounded-lg md:mt-2 sm:mt-2  sm:ml-1 xl:mr-1  lg:mr-1 md:mr-3 sm:mr-3 text-red-400   ' onClick={this.showDrawerAddResume} type="default" danger>
                        <Translation>
                            {(t) => {
                                return t("job-request.5");
                            }}
                        </Translation> <img src={AddResume} alt='AddResume'/>
                    </PrimaryButton>
                </Col>



            </>
        );
    }
}
export default JobOfferApplicantAddButton;
