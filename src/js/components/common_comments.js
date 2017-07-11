/**
 * Created by HeCheng on 2017/7/8.
 */
import React from 'react';

import { Row, Col, Card } from 'antd';

import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistroy} from 'react-router'

class CommonComments extends React.Component{

    constructor(){
        super();
        this.state ={
            comments: ''
        }
    }

    componentDidMount(e){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&" +
            "uniquekey="+this.props.uniquekey, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({comments: json});
            });
    };

    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData= this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment" +
            "&userid="+ localStorage.userid +
            "&uniquekey="+ this.props.uniquekey +
            "&commnet="+formData.remark,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.componentDidMount();
            });
    }

    addUserCollection(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc" +
            "&userid="+ localStorage.userid +
            "&uniquekey="+ this.props.uniquekey,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                notification['success']({message:'ReactNews提醒',description:'收藏次文章成功'})
            });
    }

    render(){
        let { getFieldDecorator } = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length?
            comments.map((comment,index)=>(
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            "没有加载到任何评论";
        return(
            <div class="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark',{
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                    initialValue:"请输入评论"
                                })(
                                    <Input placeholder="请输入评论pp" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交</Button>
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CommonComments = Form.create({})(CommonComments);

