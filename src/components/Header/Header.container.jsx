import { connect } from 'react-redux';
import Header from './Header'
import { updateSearch } from "../../redux/dispatch/records";


function mapStateToProps(state, ownProps) {

    return {
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateSearch: (search) => dispatch(updateSearch(search)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);