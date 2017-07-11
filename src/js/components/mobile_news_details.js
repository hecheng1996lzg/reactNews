/**
 * Created by HeCheng on 2017/7/10.
 */
import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';
export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }
    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&" +
            "uniquekey="+this.props.params.uniquekey, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({newsItem:json});
                document.title = this.state.newsItem.title + "- React News | React 驱动的新闻平台";
            });
    };
    createMarkup(){
        return {__html: this.state.newsItem.pagecontent};
    }
    render(){
        return (
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={24} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                </Row>
                <MobileFooter/>
                <BackTop/>
            </div>
        )
    }
}
