export const allRecordsSelector = (state) => {
    return state.records.all && state.records.all.length ? state.records.all : undefined;
};

export const filteredRecordsSelector = (state) => {
    return state.records.filtered && state.records.filtered.length ? state.records.filtered : undefined;
};

export const sortSelector = (state) => {
    return state.records.filters && state.records.filters.sort;
}

export const statesSelector = (state) => {
    return state.records.states.map((state)=>({value:state, label: state}));
}

export const genresSelector = (state) => {
    return state.records.genres.map((genre)=>({value:genre, label: genre}));
}

export const currentStateSelector = (state) => {
    return state.records.state;
}

export const currentGenreSelector = (state) => {
    return state.records.genre;
}

export const currentPageSelector = (state) => {
    return state.records.page;
}

export const currentRecordsSelector = (state) => {
    return state.records.current;
}

export const totalPagesSelector = (state) => {
    return state.records.pages;
}