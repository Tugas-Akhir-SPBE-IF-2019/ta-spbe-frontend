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

const institutionDataSelector = (state: any) => {
    return state?.profileReducer?.institutionData
        ? state.profileReducer.institutionData
        : [];
};

export {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector,
    institutionDataSelector
};
