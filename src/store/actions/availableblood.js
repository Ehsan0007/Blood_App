import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs'; 

export function checkBloodRequests(checkBloodData){
    return dispatch =>{
        dispatch(checkBloodRequest());
        return fbConfigs.database.ref('/donateblood').orderByChild("bloodType").equalTo(checkBloodData).once('value' ,snap=>{
            var array = [];
            snap.forEach(ChildSnapshot =>{
                var data = ChildSnapshot.val();
                array.push(data);
            })

            // console.log("Blood Type ka data ye he " , data);
            dispatch(checkBloodDataSuccess(array));
        })
    }
}

function checkBloodRequest(){
    return {
        type : ActionTypes.checkBloodRequest
    }
}

function checkBloodDataSuccess(data){
    return {
        type : ActionTypes.checkBloodDataSuccess,
        data
    }
}