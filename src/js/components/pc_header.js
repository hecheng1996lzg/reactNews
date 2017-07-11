/**
 * Created by HeCheng on 2017/7/8.
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

class PCHeader extends React.Component{

    constructor(){
        super();
        this.state ={
            current: 'top',
            visible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0,
            menuArr: [
                {'key': 'top', 'name': '头条'},
                {'key': 'shehui', 'name': '社会'},
                {'key': 'guonei', 'name': '国内'},
                {'key': 'guoji', 'name': '国际'},
                {'key': 'yule', 'name': '娱乐'},
                {'key': 'tiyu', 'name': '体育'},
                {'key': 'keji', 'name': '科技'},
                {'key': 'shishang', 'name': '社会'}
            ]
        }
    }

    componentWillMount(){
        if(localStorage.userid!=''){
            this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName});
            this.setState({userid:localStorage.userid});
        }
    }

    setModalVisible(value){
        this.setState({visible:value});
    }

    handleClick(e){
        if(e.key=="register"){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else{
            this.setState({current:e.key});
            if(e.key != 'logout'){
                var typeName = this.getMenuName(e.key)
                this.props.setType(e.key,typeName);
            }
        }
    }

    getMenuName(key){
        var typeName = ''
        this.state.menuArr.forEach((value,index,array)=>{
            if(value.key == key){
                typeName = value.name;
            }
        })
        return typeName;
    }

    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData= this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?" +
            "action="+this.state.action+
            "&username="+formData.userName+
            "&password="+formData.password+
            "&r_userName=="+formData.r_userName+
            "&r_password="+formData.r_password+
            "&r_confirmPassword="+formData.r_confirmPassword,
            myFetchOptions).
            then(response=>response.json()).then(json=>{
                this.setState({userNickName:json.NickUserName,userid:json.UserId});
                localStorage.userid= json.UserId;
                localStorage.userNickName= json.NickUserName;
            });
        if(this.state.action=='login'){
            this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    };

    callback(key){
        if(key==1){
            this.setState({action:'login'});
        }else if(key==2){
            this.setState({action:'register'});
        }
    }

    logout(){
        localStorage.userid= "";
        localStorage.userNickName= "";
        this.setState({hasLogined:false});
    }

    render(){
        let { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank" to={`/usercenter`}>
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        const menuList = this.state.menuArr.map((v,k)=>(
            <Menu.Item key={v.key}>
                <Icon type="appstore"/>{v.name}
            </Menu.Item>
        ));
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="../src/images/logo.png" alt="logo" />
                            <span>React</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                        >
                            {menuList}
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.visible}
                        onCancel={()=>this.setModalVisible(false)}
                        onOk={()=>this.setModalVisible(false) } okText ="关闭">
                            <Tabs type="card" onChange={this.callback.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('userName',{
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input placeholder="请输入您的账号" />
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('password',{
                                                rules: [{ required: true, message: 'Please input your password!' }],
                                            })(
                                                <Input placeholder="请输入您的密码" type="password" />
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                    </Form>
                                </TabPane>

                                <TabPane tab="注册" key="2">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName',{
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input placeholder="请输入您的账号" />
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('r_password',{
                                                rules: [{ required: true, message: 'Please input your password!' }],
                                            })(
                                                <Input placeholder="请输入您的密码" type="password" />
                                            )}
                                        </FormItem>
                                        <FormItem label="重复密码">
                                            {getFieldDecorator('r_confirmPassword',{
                                                rules: [{ required: true, message: 'Please input your password!' }],
                                            })(
                                                <Input placeholder="请再次输入您的账号" type="password" />
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}
export default PCHeader = Form.create({})(PCHeader);

