import { connect } from 'react-redux';
import Table from './Table'
import { allRecordsSelector } from '../../redux/selectors/records';


function mapStateToProps(state, ownProps) {
    const records = allRecordsSelector(state);

    return {
        records
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);