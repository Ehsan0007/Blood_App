import React, { Component } from 'react';
import * as mat from 'material-ui';
import './blood.css' 
class DonateBlood extends Component{
    constructor(props){
        super(props);
        this.bloodGroup =[
            "A+",
            "B+",
            "AB+",
            "O+",
            "A-",
            "B-",
            "AB-",
            "O-"
        
        ]
        this.state = {name :'' ,email : '', cellnumber : '' , gender : 1 , bloodType : "A+"}
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleGenderTypeChange = (event,index,value) => this.setState({gender : value})
    handleBloodTypeChange = (event,index,value) => this.setState({bloodType : value})


    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

       handleSubmit(evt) {
        evt.preventDefault();
        // var name = this.refs.name.getValue();
        // var email = this.refs.email.getValue();
        // var cellNumber = this.refs.cellNumber.getValue();
        // var gender = this.state.gender === 1 ? "Male" : "Female";
        // var address = this.refs.address.getValue();
        // var bloodType = this.state.bloodType;
        // A =  ["A+","A-" ,"O-","O+"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // B =  ["B+","B-" ,"O-","O+"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // AB = ["A+","B+" ,"AB+","O+","A-","B-","AB-"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // O =  ["O-","O+"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // A =  ["A-" ,"O-"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // B =  ["O-","B+"].indexOf(this.state.bloodType) !== -1 ? true :null;
        // AB =  ["O-","B-","A-","A+"].indexOf(this.state.bloodType) !== -1 ? true :null;

        let newObj = {
            name : this.refs.name.getValue(),
            email : this.refs.email.getValue(),
            cellNumber : this.refs.cellNumber.getValue(),
            gender : this.state.gender === 1 ? "Male" : "Female",
            address : this.refs.address.getValue(),
            bloodType : this.state.bloodType,
            // A : ["A" ,"O"].indexOf(this.state.bloodType) !== -1 ? true :null,
            // B : ["B", "O+"].indexOf(this.state.bloodType) !== -1 ? true :null,
            // AB : ["A","B" ,"AB","O"].indexOf(this.state.bloodType) !== -1 ? true :null,
            // O : ["O"].indexOf(this.state.bloodType) !== -1 ? true :null,
        }

        // var userObj = { email: email, name: name, gender: gender, address: address, bloodType: bloodType, cellNumber: cellNumber, isDonor : false };
        console.log("Ehsan =================" , newObj)
        this.props.donateBloodRequest(newObj);

    }


    render(){
        return(
              <div className="main-login-div">
                <mat.Card className="centerAlign1">
                    <mat.AppBar title="Donate Blood" showMenuIconButton={false}  />
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit}>        
                            <mat.TextField
                                hintText="Name"
                                floatingLabelText="Name"
                                className="Name"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                               
                                /><br />
                            <mat.TextField
                                hintText="Email"
                                floatingLabelText="Email"
                                className="Email"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                               
                                /><br />

                          <mat.TextField
                                hintText="Enter Cell Number"
                                floatingLabelText="Cell Number"
                                className="full-width-container"
                                ref="cellNumber"
                                name="cellNumber"
                                required={true}
                                type="text"
                                
                                /><br />
                                 <mat.SelectField
                                ref="gender"
                                name="gender"
                                floatingLabelText="Gender"
                                onChange={this.handleGenderTypeChange}
                                className="full-width-container"
                                value={this.state.gender}
                                required={true}
                                >
                                <mat.MenuItem value={1} primaryText="Male" />
                                <mat.MenuItem value={2} primaryText="Female" />
                            </mat.SelectField>
                                  <mat.TextField
                                hintText="Address"
                                floatingLabelText="Address"
                                className="Address"
                                ref="address"
                                name="address"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                                 <mat.SelectField
                                ref="bloodType"
                                name="bloodType"
                                floatingLabelText="Blood Type"
                                onChange={this.handleBloodTypeChange}
                                value={this.state.bloodType}
                                className="full-width-container"
                                required={true}
                                >
                                {
                                    this.bloodGroup.map(bloodgroup => {
                                        return <mat.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                                    })
                                }
                            </mat.SelectField>

                            <mat.RaisedButton type="submit"  label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default DonateBlood;