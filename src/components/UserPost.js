import React,{Component } from 'react';
import PropTypes from 'prop-types';

class UserPost extends Component{
    render(){
        const {title,message } = this.props;
        return(
            <div className="UserPost">
                <div className="card">
                    <div className="card-image">
                        <h5>{title}</h5>
                    </div>
                    <div className="card-content">
                        <h5>{message}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

UserPost.propTypes = {
    id:         PropTypes.any,
    title:      PropTypes.string,
    message:    PropTypes.string
}

export default UserPost;