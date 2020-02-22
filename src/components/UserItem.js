import React,{Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component{
    render(){
        const { name,last_name,id,facebook } = this.props;
        return(
            <div>
                <h2>{name}</h2>
                <h3>{last_name}</h3>
                <h3>{facebook}</h3>
            </div>
        )
    }   
}

UserItem.propTypes = {
    name:       PropTypes.string.isRequired,
    last_name:  PropTypes.string.isRequired,
    id:         PropTypes.number.isRequired,
    facebook:   PropTypes.string
}

export default UserItem;