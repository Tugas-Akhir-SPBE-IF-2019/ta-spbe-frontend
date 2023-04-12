const biodataSelector = (state: any) => {
    return state?.profileReducer?.biodata
        ? state.profileReducer.biodata
        : null;
};

const evaluationDataSelector = (state: any) => {
    return state?.profileReducer?.evaluationData
        ? state.profileReducer.evaluationData
        : [];
};

const jobDataSelector = (state: any) => {
    return state?.profileReducer?.jobData
        ? state.profileReducer.jobData
        : [];
};

export {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector
};
