/**
 * Created by HeCheng on 2017/7/11.
 */
import React from 'react';

import { Row, Col } from 'antd';

import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistroy} from 'react-router'
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CollectionList from './collection_list';
import CommentList from './comment_list';

export default class MobileUsercenter extends React.Component{
    render(){
        return (
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <CollectionList/>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <CommentList/>
                            </TabPane>
                            <TabPane tab="头像设置" key="3"></TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <MobileFooter/>
            </div>
        )
    }
}

