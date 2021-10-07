import React, { Component } from "react";
import './styles.scss';


export default class UserLogin extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            
            <div className="row no-gutters justify-content-center h-100 backgroundSetting">
                <div className="col-sm-6 text=-center">
                   
                <div id="LoginContainer" className="mt100">
                <div className="row no-gutters">
                        <div className="col-sm-12 text-center mt-2"><h2 className="NunitoMedium">Login</h2></div>
                    </div>
                <form className="form"  role="form"    method="POST"    onSubmit={e => e.preventDefault()}>
                    <div className="row no-gutters mt-3  align-items-center">
                        <div className="col-sm-3 text-right ">
                            <span className="NunitoRegular pr-2">Username : </span>
                        </div>
                        <div className="col-sm-9 text-center">
                            <input type="email" value={this.props.email} name="email" onChange={(e)=>this.props.handleChange(e)} className="form-control w-75" />
                        </div>
                    </div>   
                    <div className="row no-gutters mt-3 align-items-center">
                        <div className="col-sm-3 text-right ">
                             <span className="NunitoRegular pr-2">Password : </span> 
                        </div>
                        <div className="col-sm-9 text-center">
                            <input type="password" value={this.props.password} name="password" onChange={(e)=>this.props.handleChange(e)} className="form-control w-75" />
                        </div>
                    </div>   
                    <div className="row no-gutters">
                        <div className="col-sm-12 text-center">
                        {this.props.loginError&&<span style={{color:"red"}}>Username Or Password is Invalid!</span>} 
                        </div>
                    </div>
                    <div className="row no-gutters mt-3 align-items-center">
                        <div className="col-sm-3 text-right NunitoRegular">
                        </div>
                        <div className="col-sm-9 text-center">
                            <input type="submit" onClick={()=>this.props.handleSubmit()} className="form-control w-75 NunitoRegular bg-secondary colorWhite" style={{cursor:'pointer'}}/>
                        </div>
                    </div>  
                            
                </form>
                </div>
                </div>
            </div>
            
        )
    }
}