import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppBar from './components/AppBar/Appbar'
import LoginContainer from './containers/login'
import SignupContainer from './containers/signup'
import mainRootContainer from './components/Dashboard/dashboard'
// import DonateBlood from './components/blood/donateblood'
// import DonorList from './components/blood/donorlist'
import donorListContainer from './containers/donorlist'
import donateBloodContainer from './containers/donateblood'
// import AvailableBlood from './components/blood/availbaleblood'
import availableBloodContainer from './containers/availableblood'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {browserHistory,Router,Route,IndexRoute} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>

              <Route path="/" component={AppBar}>
                <IndexRoute component={LoginContainer}/>
                <Route path="/signup" component={SignupContainer} />
              </Route>

              <Route path="dashboard" component={mainRootContainer}>

                <Route path="/donate" component={donateBloodContainer}/>
                <Route path="/availableblood" component={availableBloodContainer}/>
                <Route path="/donorlist" component={donorListContainer}/>
            
              </Route>

            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);

