import { connect } from 'react-redux';
import Main from './Main'
import { allRecordsSelector } from '../../redux/selectors/records';
import { hydrateDB } from "../../redux/dispatch";


function mapStateToProps(state, ownProps) {
    const records = allRecordsSelector(state);

    return {
       records
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        hydrateDB: () => dispatch(hydrateDB()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);