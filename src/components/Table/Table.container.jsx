import { connect } from 'react-redux';
import Table from './Table'
import {
    currentPageSelector,
    currentRecordsSelector,
    totalPagesSelector
} from '../../redux/selectors/records';
import { updatePage } from "../../redux/dispatch/records";


function mapStateToProps(state, ownProps) {
    const records = currentRecordsSelector(state);
    const page = currentPageSelector(state);
    const pages = totalPagesSelector(state);

    return {
        records,
        page,
        pages
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updatePage: (page) => dispatch(updatePage(page)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);