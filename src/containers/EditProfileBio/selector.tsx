const biodataSelector = (state: any) => {
    return state?.editBiodataReducer?.biodata
        ? state.editBiodataReducer.biodata
        : null;
};

const successMessageaSelector = (state: any) => {
    return state?.editBiodataReducer?.successMessage
        ? state.editBiodataReducer.successMessage
        : "";
};

export {
    biodataSelector,
    successMessageaSelector
};
