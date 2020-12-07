import {
    HYDRATE_DB, UPDATE_SEARCH, UPDATE_FILTERS
} from "../../common/actions";
import { FILTER_KEYS } from "../../common/constants";

const initState = {
    all: [],
    filtered: [],
    search: '',
    filters: {
        search: ''
    }
};


const filterRecords = (records, filters) => {
    let updatedRecords = [...records];

    for (const filterKey in filters) {
        if (filterKey === FILTER_KEYS.SEARCH) {
            const searchTerm = filters[FILTER_KEYS.SEARCH].trim();

            updatedRecords = updatedRecords.filter((record)=> record.name.toLowerCase().includes(searchTerm))
        }
    }

    return updatedRecords
}


const records =  (state = initState, action) => {
    switch (action.type) {
        case HYDRATE_DB:
            const hydratedRecords = Object.values(action.payload);
         return {
             ...state,
             all: hydratedRecords,
             filtered: hydratedRecords
         }

        case UPDATE_SEARCH:
            //modify search filtered records here
            console.warn('action.payload', action.payload)
            const search = action.payload;
            const filtersWithSearch = {
                ...state.filters,
                search
            };
            const filteredRecords = filterRecords(state.all, filtersWithSearch)
            return {
                ...state,
                search,
                filters: filtersWithSearch,
                filtered: filteredRecords
            }

        case UPDATE_FILTERS:
            //modify filtered records here
            const filters = {
                ...action.payload,
                search: state.search
            };
            return {
                ...state,
                filters
            }

        default:
            return state;
    }
};


export default records;

