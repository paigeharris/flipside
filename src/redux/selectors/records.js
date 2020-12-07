export const allRecordsSelector = (state, model) => {
    return state.records && state.records.length ? state.records : undefined
};
