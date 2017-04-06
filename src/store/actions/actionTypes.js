const actionTypes = {
  LoadInitialState: 'LoadInitialState',

  signUpRequest : 'signUpRequest',
  signUpRequestSuccess : 'signUpRequestSuccess',
  signUpRequestFailed : 'signUpRequestFailed',

  LoginRequest: 'LoginRequest',
  LoginRequestFailed: 'LoginRequestFailed',
  LoginRequestSuccess: 'LoginRequestSuccess',

  logOutRequest : 'logOutRequest',
  logOutRequestSuccess : 'logOutRequestSuccess',
  logOutRequestFailed  :'logOutRequestFailed',

  donateBloodRequest : 'donateBloodRequest',
  donateBloodSuccessRequest : 'donateBloodSuccessRequest',
  donateBloodRequestFailed : 'donateBloodRequestFailed',

  loadDonorReguest : 'loadDonorReguest',
  loadDonorReguestSuccess : 'loadDonorReguestSuccess',
  loadDonorReguestFailed : 'loadDonorReguestFailed',

  checkBloodRequest : 'checkBloodRequest',
  checkBloodDataSuccess : 'checkBloodDataSuccess',
};

export default actionTypes;