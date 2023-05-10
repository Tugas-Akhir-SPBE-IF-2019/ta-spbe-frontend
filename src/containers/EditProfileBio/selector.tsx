const biodataSelector = (state: any) => {
    return state?.editBiodataReducer?.biodata
        ? state.editBiodataReducer.biodata
        : null;
};

const successMessagesSelector = (state: any) => {
    return state?.editBiodataReducer?.successMessage
        ? state.editBiodataReducer.successMessage
        : "";
};

export {
    biodataSelector,
    successMessagesSelector
};
