export const allRecordsSelector = (state) => {
    return state.records.all && state.records.all.length ? state.records.all : undefined;
};

export const filteredRecordsSelector = (state) => {
    return state.records.filtered && state.records.filtered.length ? state.records.filtered : undefined;
};

export const sortSelector = (state) => {
    return state.records.filters && state.records.filters.sort;
}
