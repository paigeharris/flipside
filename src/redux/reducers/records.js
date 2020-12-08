import {
    HYDRATE_DB, UPDATE_SEARCH, UPDATE_FILTERS, UPDATE_SORT, UPDATE_GENRE, UPDATE_STATE, UPDATE_PAGE
} from "../../common/actions";
import { FILTER_KEYS } from "../../common/constants";
import _uniq from 'lodash/uniq';

const initState = {
    all: [],
    filtered: [],
    current: [],
    page: 0,
    pages: 1,
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
    },
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
const pageLength = 10;
const getPageRecords = (records, page) => records.slice(page * pageLength, page * pageLength + pageLength);
const getAmountOfPages =  (filteredRecords) => Math.ceil(filteredRecords.length / pageLength);

const records = (state = initState, action) => {
    switch (action.type) {
        case HYDRATE_DB:
            const hydratedRecords = Object.values(action.payload);
            const genres = _uniq(hydratedRecords.map((record) => record.genre.split(',')).flat());
            const states = _uniq(hydratedRecords.map((record)=> record.state));
            const firstFilteredRecords = filterRecords(hydratedRecords, state.filters);

            return {
                ...state,
                all: hydratedRecords,
                filtered: firstFilteredRecords,
                current: getPageRecords(firstFilteredRecords, state.page),
                genres,
                states,
                pages: getAmountOfPages(firstFilteredRecords)
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
                filtered: searchedRecords,
                current: getPageRecords(searchedRecords, 0),
                page: 0,
                pages: getAmountOfPages(searchedRecords)

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
                filtered: sortedRecords,
                current: getPageRecords(sortedRecords, 0),
                page: 0,
                pages: getAmountOfPages(sortedRecords)
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
                filtered: stateRecords,
                current: getPageRecords(stateRecords, 0),
                page: 0,
                pages: getAmountOfPages(stateRecords)
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
                filtered: genreRecords,
                current: getPageRecords(genreRecords, 0),
                page: 0,
                pages: getAmountOfPages(genreRecords)
            }

        case UPDATE_PAGE:
            const page = action.payload;
            const currentRecords = getPageRecords(filterRecords(state.all, state.filters), page)
            return {
                ...state,
                page,
                current: currentRecords
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
                filtered: filteredRecords,
                current: getPageRecords(filteredRecords, 0),
                page: 0,
                pages: getAmountOfPages(filteredRecords)
            }




        default:
            return state;
    }
};


export default records;

