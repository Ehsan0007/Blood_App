import { connect } from 'react-redux';
import SignUP from '../components/signup/signup';
import { signUPRequest } from '../store/actions/signup';


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {

    signUpRequest        : (userData) => dispatch(signUPRequest(userData))

  };
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignUP);

export default SignupContainer;