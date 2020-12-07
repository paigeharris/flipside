import { connect } from 'react-redux';
import Table from './Table'
import { filteredRecordsSelector } from '../../redux/selectors/records';


function mapStateToProps(state, ownProps) {
    const records = filteredRecordsSelector(state);

    return {
        records
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);