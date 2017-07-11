/**
 * Created by HeCheng on 2017/7/9.
 */
import React from 'react';

import { Row, Col } from 'antd';

import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import { Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProducts from './pc_products';

export default class PCNewsContainer extends React.Component{
    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <Row gutter={16}>
                            <Col span={8}>
                                <div class="leftContainer">
                                    <div class="carousel">
                                        <Carousel autoplay>
                                            <div><img src="./src/images/carousel_1.png"/></div>
                                            <div><img src="./src/images/carousel_2.png"/></div>
                                            <div><img src="./src/images/carousel_3.png"/></div>
                                            <div><img src="./src/images/carousel_4.png"/></div>
                                        </Carousel>
                                    </div>
                                    <PCNewsImageBlock count={4} type={this.props.type} cartTitle={this.props.typeName} imageWidth="112px"/>
                                </div>
                            </Col>
                            <Col span={8}>
                                <Tabs class="tabs_news">
                                    <TabPane tab={`${this.props.typeName}新闻`} key="1">
                                        <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                                    </TabPane>
                                    <TabPane tab="国际新闻" key="2">
                                        <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                                    </TabPane>
                                </Tabs>
                            </Col>
                            <Col span={8}>
                                <Tabs class="tabs_product">
                                    <TabPane tab="ReactNews 产品" key="1">
                                        <PCProducts/>
                                    </TabPane>
                                </Tabs>
                            </Col>
                        </Row>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="112px"/>
                            <PCNewsImageBlock count={12} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="112px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
