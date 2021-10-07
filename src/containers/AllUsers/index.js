import React,{useEffect,useState }  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "../../containers/AllUsers/reducer";
import saga from "../../containers/AllUsers/saga";
import { compose } from "redux";
import * as actions from '../../containers/AllUsers/actions'
import * as selectors from '../../containers/AllUsers/selectors'
import { createStructuredSelector } from "reselect";
import {NavLink,Link, Redirect} from "react-router-dom";


class Allusers extends React.Component { 

    componentDidMount() {
      console.log("did:")
       this.props.getallUsers();
    }
    constructor(props){
      super(props);
    this.state = {tableHead:["Id","Email","first_name","last_name","avater"]};
    }

    editClick=(user)=>{
      this.props.geteditUser(user);
      if (this.props.isAuthendicated){
        return <Redirect to={`/edit`}></Redirect>
      }
    }
   render(){     
    return (
      <div  className="mt100">
      <table>
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows() }
        </tbody>
        {console.log()}
      </table>  
      </div>
      )
    }
      renderTableRows = () => {
            return this.props.getFetchedData?.data.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.avatar}</td>
              <td>
                <button className="buttonsize2" onClick={()=>this.props.geteditUser(user)}>
                <NavLink to={`/edit/${user.id}`}>Edit</NavLink></button></td>
              <td>
                <button className="buttonsize2"onClick={()=>this.props.getdeleteUser(user)}>
                <NavLink to={`/delete/${user.id}`}>Delete</NavLink></button></td>
            </tr>
          )
        })
      }
    renderTableHeader = () => {
      if(this.state.tableHead.length==0)return null;
      return this.state.tableHead.map((item)=>{
        return <th>{item}</th>
        })
    }
}
const mapStateToProps = (state) =>{
    return createStructuredSelector({ getFetchedData: selectors.FetchedData()});
   
}
const mapDispatch = (dispatch) =>{
    return{ 
      getallUsers:() => dispatch(actions.StartbookTicket()), 
      geteditUser:(user)=>dispatch(actions.editUser(user)),   
      getdeleteUser:(user)=>dispatch(actions.deleteruser(user))   
    }
}

const withReducer = injectReducer({ key: "allUserDetail", reducer: reducer });
const withSaga = injectSaga({ key: "usersdetailsaga", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(Allusers);