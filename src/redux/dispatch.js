import { HYDRATE_DB } from "../common/actions";

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