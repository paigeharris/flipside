import { connect } from 'react-redux';
import Content from './Content'
import { allRecordsSelector } from '../../redux/reducers/records';


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

export default connect(mapStateToProps, mapDispatchToProps)(Content);