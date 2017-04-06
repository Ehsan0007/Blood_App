import React, { Component } from 'react';
// import './login.css';
import * as mat from 'material-ui';
// import {Link} from 'react-router'

class SignUP extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

      handleSubmit(evt) {
        evt.preventDefault();
        var email = evt.target.email.value;
        var password = evt.target.password.value;
        var userObj = { "email": email, "password": password };
        console.log("user Object" , userObj)
        this.props.signUpRequest(userObj);
    }

    render(){
        return(
               <div className="main-login-div">
    
                <mat.Card className="centerAlign">
                    <mat.AppBar title="Signup" showMenuIconButton={false}  />
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                className="full-width-container"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <mat.RaisedButton type="submit"  label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default SignUP;