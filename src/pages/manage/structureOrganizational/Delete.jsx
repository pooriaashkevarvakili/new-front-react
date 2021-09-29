/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/12-16:35
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import {PureComponent} from "react"
import {Modal,} from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

function confirm() {
  Modal.confirm({
                  title: 'حذف چارت',
                  icon: <ExclamationCircleOutlined style={{
                    position: 'absolute',
                    left:350,
                   top:10
                  }
                  }  />,
                  content: 'آیا از حذف کردن چارت اطمینان دارید؟',
                  okText: 'بله',
                  cancelText: 'بی خیال',
                });
}
export default class Delete extends PureComponent{
  render() {return(
    <span className="mr-3" onClick={confirm}>حذف</span>
  )}
}
