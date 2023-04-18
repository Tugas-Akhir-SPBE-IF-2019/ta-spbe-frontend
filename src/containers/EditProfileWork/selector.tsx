const jobDataSelector = (state: any) => {
    return state?.editJobDataReducer?.jobData
        ? state.editJobDataReducer.jobData
        : [];
};

const successMessageSelector = (state: any) => {
    return state?.editJobDataReducer?.successMessage
        ? state.editJobDataReducer.successMessage
        : "";
};

export {
    jobDataSelector,
    successMessageSelector
};
