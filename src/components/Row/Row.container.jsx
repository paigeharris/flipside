import { connect } from 'react-redux';
import Row from './Row'
import { sortSelector } from "../../redux/selectors/records";
import { updateSort } from "../../redux/dispatch/records";


function mapStateToProps(state, ownProps) {
    const sortOrder = sortSelector(state)
    return {
        sortOrder
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateSort: (sort) => dispatch(updateSort(sort)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);