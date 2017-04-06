import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadDonorRequest(donorList){
    return dispatch =>{
        dispatch(loadDonorReguest());
        return fbConfigs.database.ref('/donateblood/').once('value' , snapshot=>{
            var array=[];
            snapshot.forEach(childSnapshot=>{
                var data = childSnapshot.val();
                array.push(data)
            })
            dispatch(loadDonorReguestSuccess(array));
        }).catch((error)=>{
            alert("Error")
            dispatch(loadDonorReguestFailed())
        })
    }
}

function loadDonorReguest(){
    return {
        type : ActionTypes.loadDonorReguest
    }
}

function loadDonorReguestSuccess(data){
    return {
        type : ActionTypes.loadDonorReguestSuccess,
        data
    }
}

function loadDonorReguestFailed(){
    return {
        type : ActionTypes.loadDonorReguestFailed
    }
}