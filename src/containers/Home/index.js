import React,{Component} from 'react';
import RouterComponent from 'components/RouterComponent';
import HeaderComp from 'components/Navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(this.props)
    const {match,isAuthendicated,getlogoutStatus}=this.props
    return (
      <React.Fragment>
        <HeaderComp isAuthendicated={isAuthendicated} getlogoutStatus={getlogoutStatus} handleLogout={this.props.handleLogout}/>
      
          <RouterComponent isAuthendicated={isAuthendicated} match={match} getlogoutStatus={getlogoutStatus} />
         
      </React.Fragment>
      
      
    );
  }
}
