import {
    HYDRATE_DB,
    UPDATE_FILTERS,
    UPDATE_GENRE, UPDATE_PAGE,
    UPDATE_SEARCH,
    UPDATE_SORT,
    UPDATE_STATE
} from "../../common/actions";

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

export const updateSort = (sort) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_SORT,
        payload: sort
    });
};
export const updateFilters = (filters) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_FILTERS,
        payload: filters
    });
};

export const updateState = (state) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_STATE,
        payload: state
    });
};

export const updateGenre = (genre) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_GENRE,
        payload: genre
    });
};

export const updatePage = (page) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_PAGE,
        payload: page
    });
};