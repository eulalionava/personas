import React,{Component } from 'react';
import UserItem from './UserItem';
import logo from '../img/account.png';

class UserDetailCover extends Component{
    constructor(){
        super();
        this.state = {
            cover:logo,

        }
    }

    render(){
        const {name,last_name } = this.props;
        
        return(
            <div className="UserDetailCover">
                <img src={this.state.cover} width="100" height="100"/>
                <p>{name}</p>
            </div>
        );
    }
}

export default UserDetailCover;