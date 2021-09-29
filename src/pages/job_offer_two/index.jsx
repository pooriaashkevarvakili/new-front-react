import {PureComponent} from "react";
import {Card} from "antd";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";

export default class PageCom extends PureComponent {


  state = {visibleModal: false};

  render() {
    return <Card>
      سلام هاکوپیان
      <Modal
        title="Basic Modal"
        zIndex={100000}
        onClose={() => this.setState({visibleModal: false})}
        onOk={() => this.setState({visibleModal: false})}
        onCancel={() => {
          this.setState({visibleModal: false})
        }}
        visible={this.state.visibleModal} width={'50%'}>
        <div>
          Visible Modal
        </div>
      </Modal>
      <Button onClick={() => {
        this.setState({
          visibleModal: true
        });
      }}>
        Salam
      </Button>
    </Card>
  }
}
