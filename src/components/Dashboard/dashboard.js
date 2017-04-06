import React, { Component } from 'react';
import * as mat from 'material-ui';
import './dashboard.css'
import {browserHistory} from 'react-router';
import {logOutRequest} from '../../store/actions/logout'
import {connect} from 'react-redux'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {open : false}
    }
     handleToggle = () =>this.setState({ open : !this.state.open}) 
     handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };



    donateblood = () =>{
        browserHistory.push('/donate')
    }

    checkblood = () =>{
        browserHistory.push('/availableblood')
    }

    donorlist = () =>{
        browserHistory.push('/donorlist')
    }
    
    logout = () =>{
        this.props.logoutRequest()
    }

    render(){
        return(
            <div>
                <mat.AppBar
                title="Blood Managment System" 
                onLeftIconButtonTouchTap={this._handleClick}
                onTouchTap={this.handleToggle}
                 />
                <mat.Drawer open={this.state.open}
                  onRequestChange={(open)=>this.setState({open})}
                  docked={true}
                  openSecondary={false}
                  ><mat.AppBar title="DashBoard" showMenuIconButton={false} />
                <mat.MenuItem disabled className="disbaledImage"><img src="https://image.freepik.com/free-vector/man-holding-blood-drop-donation-concept-design_1057-1023.jpg" className="logoImage" role="presentation"/></mat.MenuItem>
                    <mat.MenuItem  onTouchTap={this.donateblood}>Donate Blood</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.checkblood}>Available Blood</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.donorlist}>Donor List</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.logout}>Logout</mat.MenuItem>
                </mat.Drawer>
                 {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logoutRequest: () => dispatch(logOutRequest()),
    };
}

const mainRootContainer =  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default mainRootContainer;