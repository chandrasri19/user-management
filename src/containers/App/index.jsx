import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-inject-reducer-and-saga';
import { createStructuredSelector } from 'reselect';
import History from 'utils/history-utils';
import * as actions from './actions';

import * as selectors from './selectors';

import AppReducer from './reducer';
import AppSaga from './sagas';
import Home from 'containers/Home';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less'
import RouterComponent from 'components/RouterComponent';
import 'styles/fonts.scss';
import 'styles/globalStyles.scss';
import 'styles/spacing.scss';


class App extends Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){

}
  render() {
    return (

      <Router history={History}>
        <React.Fragment>
          <Switch>
            <Route
              render={props => (
                <Home
                  {...props}
                  isAuthendicated={this.props.isAuthendicated}
                  handleLogout={this.props.handleLogout}
                  getlogoutStatus={this.props.getlogoutStatus}
                />
              )}
              path="/"
            />

          </Switch>
        </React.Fragment>
      </Router>
      
    );
  }
}
function mapStateToProps(state) {
  return createStructuredSelector({
    getlogoutStatus: selectors.getlogoutStatus(),
    isAuthendicated:selectors.getAuthendicate(),  
  });
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: () => {
      dispatch(actions.handleLogout());
    },
   
  };
}

const withReducer = injectReducer({ key: 'employees',  reducer:AppReducer });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'employees',  saga:AppSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
