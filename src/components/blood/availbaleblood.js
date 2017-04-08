import React, { Component } from 'react';
import * as mat from 'material-ui';
import './blood.css'
class AvailableBlood extends Component {
    constructor(props) {
        super(props);
        this.bloodGroup = [
            "A+",
            "B+",
            "AB+",
            "O+",
            "A-",
            "B-",
            "AB-",
            "O-"
           
        ]
        this.state = { requiredBlood: "A+" }
        this.handleBloodTypeChange = this.handleBloodTypeChange.bind(this);
    }

    handleBloodTypeChange = (event, index, value) => {
        this.setState({ requiredBlood: value }); console.log(value)

             this.props.checkBloodRequest(value)
        // console.log("BloodType ka State " , this.state.requiredBlood)
    }



    render() {

        const checkBlood = this.props && this.props.application && this.props.application.checkBlood ? this.props.application.checkBlood : [];
        console.log("Particular bloodGroup data ", checkBlood)

        return (
            
            <div className="avilableBlood">
                <mat.Card className="main_div">
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit}>
                            <mat.SelectField
                                ref="bloodType"
                                name="bloodType"
                                floatingLabelText="Blood Type"
                                value={this.state.requiredBlood}
                                onChange={this.handleBloodTypeChange}
                                className="available"
                                required={true}
                            >
                                {
                                    this.bloodGroup.map(bloodgroup => {
                                        return <mat.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                                    })
                                }
                            </mat.SelectField>
                        </form>
                    </mat.CardText>
                    <mat.Divider />
                    <mat.Table adjustForCheckbox={false} displayRowCheckbox={false}>
                        <mat.TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <mat.TableRow>
                                <mat.TableHeaderColumn>Name</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Email</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Cell Number</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Gender</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Address</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Blood Type</mat.TableHeaderColumn>
                            </mat.TableRow>
                        </mat.TableHeader>
                        <mat.TableBody displayRowCheckbox={false}>
                            {checkBlood.map((data, index) => {
                                return (
                                    <mat.TableRow key={index}>
                                        <mat.TableRowColumn>{data.name}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.email}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.cellNumber}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.gender}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.address}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.bloodType}</mat.TableRowColumn>
                                    </mat.TableRow>
                                )
                            })}

                        </mat.TableBody>
                    </mat.Table>
                </mat.Card>
            </div>
        )
    }
}

export default AvailableBlood;