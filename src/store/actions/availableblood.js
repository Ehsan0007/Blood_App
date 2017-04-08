import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function checkBloodRequests(checkBloodData) {
    return dispatch => {
        dispatch(checkBloodRequest());
        return fbConfigs.database.ref('/donateblood').once('value', snap => {
            var array = [];
            var donateBloodSnap = snap.val();
            // console.log("snap", donateBloodSnap);


            var array = Object.keys(donateBloodSnap).map(function (key) { return donateBloodSnap[key]; });
            // console.log("16::::", array);
            if (checkBloodData === "A+") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].bloodType === "A+" || array[i].bloodType === "O-" || array[i].bloodType === "O+" || array[i].bloodType === "A-") {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);   
                    }
                }
            }
            if (checkBloodData === "B+") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].bloodType === "B+" || array[i].bloodType === "O-" || array[i].bloodType === "O+" || array[i].bloodType === "B-") {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "AB+") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].bloodType === "B+" || array[i].bloodType === "O-" || array[i].bloodType === "O+" || array[i].bloodType === "B-" || array[i].bloodType === "A+" || array[i].bloodType === "A-" || array[i].bloodType === "AB+" || array[i].bloodType === "AB-") {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "O+") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if ( array[i].bloodType === "O-" || array[i].bloodType === "O+" ) {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "A-") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if ( array[i].bloodType === "O-" || array[i].bloodType === "A-" ) {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "B-") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if ( array[i].bloodType === "O-" || array[i].bloodType === "B-" ) {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "AB-") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if ( array[i].bloodType === "O-" || array[i].bloodType === "B-" || array[i].bloodType === "A-" || array[i].bloodType === "A+" ) {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            if (checkBloodData === "O-") {
                 var aData = [];
                for (var i = 0; i < array.length; i++) {
                    if ( array[i].bloodType === "O-") {
                        var group = array;
                        console.log("A+ ka data ", array[i]);
                        aData.push(array[i]);
                    }
                }
            }
            // console.log("Array" , array)

            // snap.forEach(ChildSnapshot => {
            //     var data = ChildSnapshot.val();
            //     console.log("data", data);
            //     if (checkBloodData === "A+") {
            //         if (data.bloodType === "A+" || data.bloodType === "O-" || data.bloodType === "O+" || data.bloodType === "A-") {
            //             var apositive = ChildSnapshot.val();


            //             // array.push(abpositive)
            //             // console.log("Child", apositive)
            //         }
            //     }
            //     if (checkBloodData === "B+") {
            //         if (data.bloodType === "B+" || data.bloodType === "O-" || data.bloodType === "O+" || data.bloodType === "B-") {
            //             var bpositive = ChildSnapshot.val();
            //             console.log("Child", bpositive)
            //         }
            //     }
            //     if (checkBloodData === "AB+") {
            //         if (data.bloodType === "A+" || data.bloodType === "O-" || data.bloodType === "O+" || data.bloodType === "A-" || data.bloodType === "B+" || data.bloodType === "B-" || data.bloodType === "AB+" || data.bloodType === "AB-") {
            //             var abpositive = ChildSnapshot.val();
            //             console.log("Child", abpositive)
            //         }
            //     }
            //     // array.push(apositive);
            // })

            console.log("Blood Type ka data ye he ", aData);
            dispatch(checkBloodDataSuccess(aData));
        })
    }
}

function checkBloodRequest() {
    return {
        type: ActionTypes.checkBloodRequest
    }
}

function checkBloodDataSuccess(data) {
    return {
        type: ActionTypes.checkBloodDataSuccess,
        data
    }
}