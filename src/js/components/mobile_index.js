/**
 * Created by HeCheng on 2017/7/8.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';
import { Carousel } from 'antd';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <Carousel autoplay>
                            <div><img src="./src/images/carousel_1.png"/></div>
                            <div><img src="./src/images/carousel_2.png"/></div>
                            <div><img src="./src/images/carousel_3.png"/></div>
                            <div><img src="./src/images/carousel_4.png"/></div>
                        </Carousel>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guowai"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        );
    }
}