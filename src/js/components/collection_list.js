/**
 * Created by HeCheng on 2017/7/11.
 */
import React from 'react';
import { Card } from 'antd';
export default class CollectionList extends React.Component {
    constructor(){
        super()
        this.state = {
            usercollection:''
        }
    }
    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&" +
            "userid="+ localStorage.userid,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercollection:json});
            });
    }
    render(){
        const {usercollection} = this.state;
        const usercollectionList = usercollection.length?
            usercollection.map((uc,index)=>(
                <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a> }>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            "你并没有收藏！"
        return (
            <div>
                {usercollectionList}
            </div>
        )
    }
}