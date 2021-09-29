/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import './Drawer.css';

const MyDrawer = (props) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return(
        <>
            <Button type="primary" onClick={showDrawer} className='drawer_btn'>
                {props.text}
            </Button>

            <Drawer
             style={{
            }}
                title={props.header}
                placement={props.placement}
                closable={props.closable}
                onClose={onClose}
                visible={visible}

            >
              {props.children}
            </Drawer>
        </>
    )
}

export default MyDrawer;
