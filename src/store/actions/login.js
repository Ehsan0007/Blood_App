import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import {browserHistory} from 'react-router'


export function loginRequest(loginData) {
    return dispatch => {
        dispatch(LoginRequest());
        fbConfigs.fbAuth.signInWithEmailAndPassword(
            loginData.email, loginData.password
        )
            .then((data) => {
                return fbConfigs.database.ref('/sigup/' + data.uid).once('value', snap => {
                    var userobject = snap.val();
                    // userobject.uid = data.uid;
                    dispatch(LoginRequestSuccess(userobject));
                    browserHistory.push('/dashboard')
                })
                    .catch((error) => {
                        console.log(error);
                        dispatch(LoginRequestFailed());
                    });
            })
            .catch((error) => {
                console.log(error);
                dispatch(LoginRequestFailed(error));
            });
    }
}

function LoginRequest() {
    return {
        type: ActionTypes.LoginRequest
    };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}

function LoginRequestFailed() {
    return {
        type: ActionTypes.LoginRequestFailed
    };
}