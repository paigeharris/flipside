import {
    HYDRATE_DB, UPDATE_SEARCH, UPDATE_FILTERS, UPDATE_SORT
} from "../../common/actions";
import { FILTER_KEYS } from "../../common/constants";

const initState = {
    all: [],
    filtered: [],
    search: '',
    filters: {
        search: '',
        sort: 0
    }
};


const filterRecords = (records, filters) => {
    let updatedRecords = [...records];

    for (const filterKey in filters) {
        if (filterKey === FILTER_KEYS.SEARCH) {
            const searchTerm = filters[FILTER_KEYS.SEARCH].trim().toLowerCase();

            updatedRecords = updatedRecords.filter((record) => record.name.toLowerCase().includes(searchTerm))
        }

        if (filterKey === FILTER_KEYS.SORT) {
            const sortValue = filters[FILTER_KEYS.SORT];

            updatedRecords = updatedRecords.sort((a, b) => a.name.localeCompare(b.name))

            if (sortValue) updatedRecords.reverse();
        }
    }

    return updatedRecords
}


const records = (state = initState, action) => {
    switch (action.type) {
        case HYDRATE_DB:
            const hydratedRecords = Object.values(action.payload);

            return {
                ...state,
                all: hydratedRecords,
                filtered: filterRecords(hydratedRecords, state.filters)
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

