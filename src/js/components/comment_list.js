/**
 * Created by HeCheng on 2017/7/11.
 */
import React from 'react';
import { Card } from 'antd';
export default class CommentList extends React.Component {
    constructor(){
        super()
        this.state = {
            usercomment:''
        }
    }
    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&" +
            "userid="+ localStorage.userid,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercomment:json});
            });
    }
    render(){
        const {usercomment} = this.state;
        const usercommentList = usercomment.length?
            usercomment.map((comment,index)=>(
                <Card key={index} title={`与 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a> }>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            "你并没有收藏！"
        return (
            <div>
                {usercommentList}
            </div>
        )
    }
}