/**
 * Created by HeCheng on 2017/7/8.
 */
import React from 'react';

import { Row, Col } from 'antd';

export default class PCFooter extends React.Component{

    constructor(){
        super();
        this.state ={
            current: 'top',
        }
    }

    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy; 2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}
