import React,{useEffect,useState }  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from '../../containers/AllUsers/reducer';
import saga from "../../containers/AllUsers/saga";
import { compose } from "redux";
import * as actions from '../../containers/AllUsers/actions'
import * as selectors from '../../containers/AllUsers/selectors'
import { createStructuredSelector } from "reselect";
import {BrowserRouter as Redirect,Link} from 'react-router-dom';


 class DeleteUser extends React.Component {

    render(){
      const user=this.props.getFetchedData;
     
      return(
        < div className='mt100'>
       <div>SUCCESSFULLY DELETED!</div>
       <div><button> <Link to={'/allusers'}>GO TO Users</Link></button></div>
       </div>
      )
    }
}

const mapStateToProps = (state) =>{
  return createStructuredSelector({
     getFetchedData: selectors.editUser(),
    });
 
}
const mapDispatch = (dispatch) =>{
  return{ 
       deleteuser:(deletedid) => dispatch(actions.deleteruser(deletedid)), 
     
          
  }
}
const withReducer = injectReducer({ key: "allUserDetail", reducer: reducer });
const withSaga = injectSaga({ key: "usersdetailsaga", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(DeleteUser);
 