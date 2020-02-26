import React,{Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class UserItem extends Component{
    constructor(){
        //PARA PODER HACER USO DEL (this)
        super();
        //REDIRECCION EN FALSO
        this.state = {
            isRedirected:false
        }

        this.onClick = this.onClick.bind(this);
    }

    //EVENTO ONCLICK
    onClick(e){
        //Redirecciona en true
        this.setState({isRedirected:true});
    }
    render(){
        const { name,last_name,id,facebook } = this.props;
        //VERIFICA SI REDIRECCIONA
        if(this.state.isRedirected){
            return(<Redirect to={"/detail/" + id} />);
        }
        return(
            <div className="card" onClick ={this.onClick}>
                <div className="card-content">
                    <div className="UserItem-leftBox">
                        <img src="../../img/1486564400-account_81513.png"/>
                    </div>
                    <div className="Useritem-rightBox">
                        <h2 className="UserItem-name">{name} {last_name}</h2>
                        <h3 className="UserItem-facebook">{facebook}</h3>
                    </div>
                </div>
            </div>
        )
    }   
}

//DEFINIMOS LA PROPIEDADES
UserItem.propTypes = {
    name:       PropTypes.string.isRequired,
    last_name:  PropTypes.string.isRequired,
    id:         PropTypes.number.isRequired,
    facebook:   PropTypes.string
}

export default UserItem;