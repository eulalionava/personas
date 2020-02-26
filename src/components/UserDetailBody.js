import React,{Component } from 'react';
import PropTypes from 'prop-types';

import UserPost from '../components/UserPost';

class UserDetailBdy extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages:this.props.messages
        }
    }
    render(){
        let messages = this.state.messages.map( (currentvalue)=>{
            return(<UserPost 
                    key={currentvalue.id}
                    id={currentvalue.id}
                    title={currentvalue.title}
                    message={currentvalue.message}/>);
        })
        
        
        return(
            <div className="UserDetailBody">
                <div>
                    {messages}
                </div>
            </div>
        );
    }
}

UserDetailBdy.propTypes = {
    messages:PropTypes.array.isRequired
}

export default UserDetailBdy;