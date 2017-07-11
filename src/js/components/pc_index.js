/**
 * Created by HeCheng on 2017/7/8.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';
export default class PCIndex extends React.Component {
    constructor(){
        super();
        this.state = {
            type: 'top',
            typeName: '头条',
        }
    }

    setType(type,typeName){
        this.setState({
            type: type,
            typeName: typeName
        })
    }

    render() {
        return (
            <div>
                <PCHeader setType={this.setType.bind(this)}></PCHeader>
                <PCNewsContainer type={this.state.type} typeName={this.state.typeName}></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        );
    }
}