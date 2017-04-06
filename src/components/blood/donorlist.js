import React, { Component } from 'react';
import * as mat from 'material-ui';
import './blood.css'

class DonorList extends Component {
    // constructor(props){
    //     super(props);

    // }

    componentDidMount() {
        this.props.loadDonorList();
    }

    render() {
        const donorlist = this.props && this.props.application && this.props.application.donorlist ? this.props.application.donorlist : [];
        console.log("====================", donorlist)
        return (
            <div>
                <div className="donorlist">
                    <mat.Card className="donorcart">
                        <mat.AppBar className="list" title="Donar List" showMenuIconButton={false} />
                        <mat.CardText>
                            {/*{donorlist && donorlist.length > 0 ?*/}
                                <mat.Table adjustForCheckbox={false} displaytSelectAll={false}>
                                    <mat.TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                        <mat.TableRow>
                                            <mat.TableHeaderColumn>Name</mat.TableHeaderColumn>
                                            <mat.TableHeaderColumn>Email</mat.TableHeaderColumn>
                                            <mat.TableHeaderColumn>Cell Number</mat.TableHeaderColumn>
                                            <mat.TableHeaderColumn>Gender</mat.TableHeaderColumn>
                                            <mat.TableHeaderColumn>Address</mat.TableHeaderColumn>
                                            <mat.TableHeaderColumn>BloodType</mat.TableHeaderColumn>
                                        </mat.TableRow>
                                    </mat.TableHeader>
                                    <mat.TableBody displayRowCheckbox={false}>
                                        {donorlist.map((data, index) => {
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
                                {/*: null}*/}

                        </mat.CardText>
                    </mat.Card>
                </div>
            </div>
        )
    }
}

export default DonorList;