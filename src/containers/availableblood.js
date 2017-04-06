import { connect } from 'react-redux';
import AvailableBlood  from '../components/blood/availbaleblood';
import { checkBloodRequests } from '../store/actions/availableblood';


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {

    checkBloodRequest       : (data) => dispatch(checkBloodRequests(data))

  };
}

const availableBloodContainer = connect(mapStateToProps, mapDispatchToProps)(AvailableBlood);

export default availableBloodContainer;