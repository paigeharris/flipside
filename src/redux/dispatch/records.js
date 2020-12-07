import { HYDRATE_DB, UPDATE_FILTERS, UPDATE_SEARCH } from "../../common/actions";

export const hydrateDB = () => (dispatch, getState) => {
    fetch(process.env.REACT_APP_API_URL,
        {
            headers:
                { Authorization: process.env.REACT_APP_API_KEY },
        }).then((response) => {
        response.json().then((results) => {
            const payload = results;

            dispatch({
                type: HYDRATE_DB,
                payload
            });
        });
    })
};

export const updateSearch = (search) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_SEARCH,
        payload: search
    });
};

export const updateFilters = (filters) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_FILTERS,
        payload: filters
    });
};