import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import {browserHistory} from 'react-router'


export function signUPRequest(SignUpData) {
    return dispatch => {
        dispatch(signUpRequest());
        fbConfigs.fbAuth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef = fbConfigs.database.ref('/sigup/' + data.uid);
                userRef.set({
                    uid : data.uid,
                    email: data.email,
                }, signUpSuccessData => {
                    dispatch(signUpRequestSuccess({ uid: data.uid, userEmail: data.email}));
                    browserHistory.push('/')
                    alert("SuccessFull signUPRequest")
                });
            })
            .catch((error) => {
                alert("Error Occurred Please try again.");
                dispatch(signUpRequestFailed(error));
            });
        console.log("Hme firebase se y e mila" ,fbConfigs)
    }   
}
function signUpRequest() {
    return {
        type: ActionTypes.signUpRequest
    };
}

function signUpRequestSuccess(data) {
    return {
        type: ActionTypes.signUpRequestSuccess,
        data
    };
}

function signUpRequestFailed() {
    return {
        type: ActionTypes.signUpRequestFailed
    };
}