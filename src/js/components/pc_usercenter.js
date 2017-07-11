/**
 * Created by HeCheng on 2017/7/11.
 */
import React from 'react';

import { Row, Col } from 'antd';

import {
    Card,
    Menu,
    Upload,
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
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import CollectionList from './collection_list';
import CommentList from './comment_list';

export default class PCUserCenter extends React.Component{
    constructor(){
        super()
        this.state = {
            previewVisible: false,
            previewImage: '',
            usercollection: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
    }

    handleCancel(){
        this.setState({previewVisible: false})
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        })
    }

    handleChange({fileList}){
        this.setState({fileList})
    }

    render(){
        const { previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传照片</div>
            </div>
        )
        return (
            <div>
                <PCHeader/>
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
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload
                                        action=""
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview.bind(this)}
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        {uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        )
    }
}

