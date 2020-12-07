import {
    HYDRATE_DB
} from "../../common/actions";

const initState = [];


const records =  (state = initState, action) => {
    switch (action.type) {
        case HYDRATE_DB:
         return action.payload

        default:
            return state;
    }
};

export const allRecordsSelector = (state, model) => {
    return state.records && state.records.length ? state.records : undefined
};


export default records;

