import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function donateBloodRequest(donateBlood){
    return dispatch =>{
        dispatch(donateBloodRequests());
        return fbConfigs.database.ref('/donateblood').push(donateBlood).then((data)=>{
            console.log("Succesfull addded data to donateblood");
            dispatch(donateBloodSuccessRequest(data));
        }).catch((err)=>{
            alert("Data Not Inserted Try again")
            dispatch(donateBloodRequestFailed());
        })
    }
}

function donateBloodRequests(){
    return {
        type : ActionTypes.donateBloodRequest
    };
}

function donateBloodSuccessRequest(){
    return {
        type : ActionTypes.donateBloodSuccessRequest
    };
}

function donateBloodRequestFailed(){
    return {
        type : donateBloodRequestFailed
    }
}
