import { connect } from 'react-redux';
import DonateBlood  from '../components/blood/donateblood';
import { donateBloodRequest } from '../store/actions/donateblood';


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {

    donateBloodRequest        : (userData) => dispatch(donateBloodRequest(userData))

  };
}

const donateBloodContainer = connect(mapStateToProps, mapDispatchToProps)(DonateBlood);

export default donateBloodContainer;