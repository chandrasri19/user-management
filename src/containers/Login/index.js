import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-inject-reducer-and-saga';
import { createStructuredSelector } from 'reselect';
import History from 'utils/history-utils';
import * as actions from './actions';
import * as selectors from './selectors';
import LoginReducer from './reducer';
import LoginSagas from './sagas';
import LoginComponent from 'components/UserLogin'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidUpdate(){        
    }

    handleSubmit = (e) => {
        const {email,password}=this.props;
        if(email&&password){
            this.props.loginUser(email,password)
        }        
    };

    handleChange=(e)=>{
        this.props.LoginUserField(e.target.name,e.target.value)
    }
    checkLoginStatus=()=>{
        if(this.props.loginStatus){
          
          this.props.updateLoginStatus()
          History.push('/dashboard');
        }
    }
    render(){
    return (
        <>
       
             {this.checkLoginStatus()}
            <LoginComponent
                email={this.props.email}
                handleChange={this.handleChange}
                password={this.props.password}
                handleSubmit={this.handleSubmit}
                loginError={this.props.loginError}
            
            />
       
        </>

        )
    }
}
const mapStateToProps = (state) =>{
        return createStructuredSelector({
        email:selectors.getEmail(),
        password:selectors.getPassword(),
        loginStatus:selectors.getLoginStatus(),
        loginError:selectors.loginError(),
    })
}

const mapDispatch = (dispatch) =>{
    return {
        LoginUserField:(name,value)=>{dispatch(actions.LoginUserField(name,value))},
        loginUser:(username,password)=>{dispatch(actions.loginPost(username,password))},
        updateLoginStatus:()=>{dispatch(actions.updateLoginStatus())}       
      };
}
const withReducer = injectReducer({ key: 'Login',  reducer:LoginReducer });
const withConnect = connect(mapStateToProps,mapDispatch,
);
const withSaga = injectSaga({ key: 'Login',  saga:LoginSagas });


export default compose(withReducer,withSaga,withConnect)(Login)