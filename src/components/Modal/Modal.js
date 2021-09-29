/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


const MyModal = (props) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const  handleOk = (e) => {
        console.log(e);
        setVisible(false);
    };
    const handleCancel = (e) => {
        console.log(e);
        setVisible(false);
    };

    return(
        <>
            <Button type="primary" onClick={showModal} className='drawer_btn'>
                {props.text}
            </Button>
            <Modal
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } } }
             style={{


             }}
                title={props.header}
                placement={props.placement}
                closable={props.closable}
                onOk={handleOk}
                onCancel={handleCancel}
                visible={visible}
                width={1000}

            >
              {props.children}
            </Modal>
        </>
    );
}
export default MyModal;
