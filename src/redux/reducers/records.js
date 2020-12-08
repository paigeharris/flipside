import {
    HYDRATE_DB, UPDATE_SEARCH, UPDATE_FILTERS, UPDATE_SORT, UPDATE_GENRE, UPDATE_STATE
} from "../../common/actions";
import { FILTER_KEYS } from "../../common/constants";
import _uniq from 'lodash/uniq';

const initState = {
    all: [],
    filtered: [],
    search: '',
    state: null,
    genre: null,
    genres: [],
    states: [],
    filters: {
        search: '',
        sort: 0,
        state: null,
        genre: null
    }
};


const filterRecords = (records, filters) => {
    let updatedRecords = [...records];

    for (const filterKey in filters) {
        if (filterKey === FILTER_KEYS.SORT) {
            const sortValue = filters[FILTER_KEYS.SORT];

            updatedRecords = updatedRecords.sort((a, b) => a.name.localeCompare(b.name))

            if (sortValue) updatedRecords.reverse();
        } else if(filterKey === FILTER_KEYS.SEARCH) {
            const searchTerm = filters[filterKey].trim().toLowerCase();

            updatedRecords = updatedRecords.filter((record) => record.name.toLowerCase().includes(searchTerm))
        } else {
            if (filters[filterKey]) {
                const searchTerm = filters[filterKey].trim().toLowerCase();

                updatedRecords = updatedRecords.filter((record) => record[filterKey] && record[filterKey].toLowerCase().includes(searchTerm))
            }
        }
    }

    return updatedRecords
}


const records = (state = initState, action) => {
    switch (action.type) {
        case HYDRATE_DB:
            const hydratedRecords = Object.values(action.payload);
            const genres = _uniq(hydratedRecords.map((record) => record.genre.split(',')).flat());
            const states = _uniq(hydratedRecords.map((record)=> record.state));

            return {
                ...state,
                all: hydratedRecords,
                filtered: filterRecords(hydratedRecords, state.filters),
                genres,
                states
            }

        case UPDATE_SEARCH:
            const search = action.payload;
            const filtersWithSearch = {
                ...state.filters,
                search
            };
            const searchedRecords = filterRecords(state.all, filtersWithSearch)

            return {
                ...state,
                search,
                filters: filtersWithSearch,
                filtered: searchedRecords
            }

        case UPDATE_SORT:
            const sort = action.payload;

            const filtersWithSort = {
                ...state.filters,
                sort
            };
            const sortedRecords = filterRecords(state.all, filtersWithSort)

            return {
                ...state,
                sort,
                filters: filtersWithSort,
                filtered: sortedRecords
            }

        case UPDATE_STATE:
            const updatedState = action.payload;
            const filtersWithState = {
                ...state.filters,
                state: updatedState
            };
            const stateRecords = filterRecords(state.all, filtersWithState)

            return {
                ...state,
                state: updatedState,
                filters: filtersWithState,
                filtered: stateRecords
            }

        case UPDATE_GENRE:
            const genre = action.payload;
            const filtersWithGenre = {
                ...state.filters,
                genre
            };
            const genreRecords = filterRecords(state.all, filtersWithGenre)

            return {
                ...state,
                genre,
                filters: filtersWithGenre,
                filtered: genreRecords
            }


        case UPDATE_FILTERS:
            const filters = {
                ...action.payload,
                search: state.search
            };
            const filteredRecords = filterRecords(state.all, filters)

            return {
                ...state,
                filters,
                filtered: filteredRecords
            }

        default:
            return state;
    }
};


export default records;

