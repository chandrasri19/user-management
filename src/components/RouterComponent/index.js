import React, { Component } from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import History from 'utils/history-utils';

import Login from 'containers/Login/index';
import Allusers from 'containers/AllUsers/index';
import Dashboard from '../Dashboard/dashboard';
import DeleteUser from 'components/DeleteUser'
import EditUser from 'components/EditUser'
export const pathArr = [
  '/login',
];
export default class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    window.scroll(0, 0);
  }
  excludedPaths = () => {
    const path = pathArr.filter(item => window.location.href.indexOf(item) != -1).length > 0;
    return !path;
  };
  render() {
    const { match } = this.props;
    if (!this.props.isAuthendicated&&this.excludedPaths()) {
      return <Redirect to="/login" />;
    }
    if (this.props.isAuthendicated&&window.location.pathname=='/') {
      return <Redirect to="/login" />;
    }
    return (
      <Switch>
        <Route path={`${match.path}login`} component={Login} />
        <Route path={`${match.path}dashboard`} component={Dashboard} />
        <Route path={`${match.path}allusers`} component={Allusers} />
        <Route path={`${match.path}edit`} component={EditUser} />
        <Route path={`${match.path}delete`} component={DeleteUser} />
      </Switch>
    );
  }
}
