import { connect } from 'react-redux';
import DonorList  from '../components/blood/donorlist';
import { loadDonorRequest } from '../store/actions/donorlist';


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {

    loadDonorList        : () => dispatch(loadDonorRequest())

  };
}

const donorListContainer = connect(mapStateToProps, mapDispatchToProps)(DonorList);

export default donorListContainer;