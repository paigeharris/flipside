
import { HYDRATE_DB } from "../common/actions";
import { API_URL } from "./reducers/constants";



export const hydrateDB = () => (dispatch, getState) => {
    fetch(API_URL,
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