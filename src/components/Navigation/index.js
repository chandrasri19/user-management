import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Dashboard from 'components/Dashboard/dashboard'
import './styles.scss';

import { Menu,Avatar, Dropdown, Icon, message } from 'antd';

export default class Navigation extends Component{
    constructor(props){
        super(props);
    }
    showLogin=()=>{
        if(this.props.isAuthendicated)return;
        return(
            <NavLink className='nav-link colorWhite  navFontSize' to="/login" href="">Login</NavLink>
        )
    }
    onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
    menu=()=>{
        return(
            <Menu onClick={this.onClick}>
            <Menu.Item key="3" className="navFontSize NunitoSemiBold"> 
                <div onClick={()=>this.props.handleLogout()} className="logout-btn NunitoSemiBold " style={{fontSize:"16px"}}>
                            Logout
                </div>
            </Menu.Item>
          </Menu>
        )
    }
    showLogout=()=>{
        if(!this.props.isAuthendicated)return;
        return(<>
             <li className="nav-item">
                 <a className="nav-link NunitoSemiBold">  
                    <Dropdown overlay={this.menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Avatar size={35} icon="user" />
                        </a>
                    </Dropdown>
                 </a>
             </li>
           
            </>
        )
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light navBackgroud  fixed-top">
                <div className="container-fluid">
                <a className="navbar-brand logoGradient p-0 NunitoBold" href="#" ><img  className="w-100"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link colorWhite NunitoSemiBold navFontSize" href="">Home</a>
                    </li>
                    
                    <li className="nav-item ">
                    {this.showLogin()}
                        {/* <a className="nav-link" href="">Login <span className="sr-only">(current)</span></a> */}
                    </li>

                    {this.showLogout()}                   
                    </ul>           
                </div>
                 
                </div>
            </nav>
        
        )
    }
}