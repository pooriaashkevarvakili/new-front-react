import {Table} from "antd";
import React, {PureComponent} from "react";
import Bloc from "./model/bloc";
export default class HTableComponent extends PureComponent {
  constructor(props) {
    super(props);
 /*   this.state = {
      data:[],
      loading: true,
    }*/
    this.bloc = new Bloc();
  }
  componentDidMount() {
    this.fetch();
  }
  /*state = {
    loading: true,
    data:[]
  }*/
/*  const data =getEvaluateForSingleApplicant().then(
    res => {const data = res.data;
      this.setState({data });
    }*/
  async fetch() {
    const data=this.bloc.init();
    /*this.setState({data });
    this.setState({
      data: [
        {
          title: "test",
          name: 'sasas'
        }, {
          title: "asdsad",
          name: 'qwewe'
        }, {
          title: "rtrg",
          name: 'qwwe'
        }, {
          title: "retrt",
          name: 'qwewqe'
        },
      ]
    })*/
  }
  refresh = () => {
    this.props.model.fetch();
  }
  render() {
    const {model} = this.props;
    console.log(this.data);
    return (<Table className="w-full" dataSource={this.data} columns={model.cols}/>)
  }
}
