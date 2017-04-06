import ActionTypes from '../actions/actionTypes';

const initial_state = { };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      return state;
    }
    case ActionTypes.signUpRequestSuccess: {
      var newState1 = Object.assign({}, state, { signupuser: action.data });
      state = newState1;
      return state;
    }

    case ActionTypes.LoginRequestSuccess: {
      var newState2 = Object.assign({}, state, { user: action.data });
      state = newState2;
      return state;
    }

    case ActionTypes.donateBloodSuccessRequest: {
      var newState3 = Object.assign({}, state, { donateblood: action.data });
      state = newState3;
      return state;
    }

    case ActionTypes.loadDonorReguestSuccess: {
      var newState4 = Object.assign({}, state, { donorlist: action.data });
      state = newState4;
      return state;
    }

    case ActionTypes.checkBloodDataSuccess: {
      var newState5 = Object.assign({}, state, { checkBlood: action.data });
      state = newState5;
      return state;
    }
    
    // case ActionTypes.logOutRequestSuccess: {
    //   var newState001 = Object.assign({}, state, { logout: action.data });
    //   state = newState001;
    //   return state;
    // }

    default:
      return state;
  }
}