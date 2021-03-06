import { connect } from 'react-redux';
import Row from './Row'
import {
    currentGenreSelector,
    currentStateSelector,
    genresSelector,
    sortSelector,
    statesSelector
} from "../../redux/selectors/records";
import { updateGenre, updateSort, updateState } from "../../redux/dispatch/records";


function mapStateToProps(state, ownProps) {
    const sortOrder = sortSelector(state);
    const states = statesSelector(state);
    const genres = genresSelector(state);
    const currentGenre = currentGenreSelector(state);
    const currentState = currentStateSelector(state);

    return {
        sortOrder,
        states,
        genres,
        currentGenre,
        currentState
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateSort: (sort) => dispatch(updateSort(sort)),
        updateGenre: (genre) => dispatch(updateGenre(genre)),
        updateState: (state) => dispatch(updateState(state)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);