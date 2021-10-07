import React,{useEffect,useState }  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from '../../containers/AllUsers/reducer';
import saga from "../../containers/AllUsers/saga";
import { compose } from "redux";
import * as actions from '../../containers/AllUsers/actions'
import * as selectors from '../../containers/AllUsers/selectors'
import { createStructuredSelector } from "reselect";
import {BrowserRouter as Redirect} from 'react-router-dom';
import '../style.css'
import { fromJS } from 'immutable';



class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id:this.props.match.params.id};
  } 
    afterEdit=(user)=>{
      this.props.FinalUpdateUser();
      
       return <Redirect to={'/allusers'}/>
    }
    componentDidMount(){
      this.props.selectedUser(this.state.id)
      console.log(this.props.match.params.id)
    }
    render(){
     
      const user=this.props.getSingleUser; 
      console.log(user)
      return(
        <div className="editpage mt100">       
          <div className="form">
            <div className="field">
                <label>FirstName:</label>
                <input type="text" value={user.first_name} onChange={(e)=>this.props.currentEditUserData("firstname",e.target.value)}/>
            </div>
            <div className="field">
                <label>LastName:</label>
                <input type="text" value={user.last_name} onChange={(e)=>this.props.currentEditUserData("lastname",e.target.value)}/>
            </div>
            <div className="field">
                <label>Email:</label>
                <input type="text" value={user.email} onChange={(e)=>this.props.currentEditUserData("email",e.target.value)}/>
            </div>
            <div className="field">
                <label>Avater:</label>
                <input type="text" value={user.avatar} onChange={(e)=>this.props.currentEditUserData("avater",e.target.value)}/>
            </div>
            <div className="field">
                <button  className="buttonsize" onClick={()=>this.afterEdit(user)}>EDIT</button>
            </div>
            </div>
        
        </div>       
      )
    }
}

const mapStateToProps = (state) =>{
    return createStructuredSelector({
       getFetchedData: selectors.editUser(),
       getFullUser: selectors.FetchedData(),
       getESuccessFlag:selectors.eSuccessFlag(),
       getSingleUser:selectors.getSingleUser(),
      });
   
}
const mapDispatch = (dispatch) =>{
    return{ 
         getallUsers:() => dispatch(actions.StartbookTicket()),    
         currentEditUserData:(objKey,value) => dispatch(actions.updateCaseForEach(objKey,value)),    
         FinalUpdateUser:(data) => dispatch(actions.updateEditUser(data)),    
         selectedUser:(data) => dispatch(actions.singleUserSelect(data)),    
    }
}

const withReducer = injectReducer({ key: "allUserDetail", reducer: reducer });
const withSaga = injectSaga({ key: "usersdetailsaga", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(EditUser);
 