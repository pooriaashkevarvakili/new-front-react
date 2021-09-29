/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import {Table} from "antd";
import React, {PureComponent} from "react";

export default class HTableComponent extends PureComponent {


  componentDidMount() {
    this.fetch();
  }


  state = {
    loading: true,
    data:[]
  }

  async fetch() {
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
    })

  }

  refresh = () => {
    this.props.model.fetch();
  }

  render() {
    const {model} = this.props;
    console.log(this.state.data);
    return (<Table className="w-full" dataSource={this.state.data} columns={model.cols}/>)
  }
}
