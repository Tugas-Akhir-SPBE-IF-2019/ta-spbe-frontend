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

const deleteMessageSelector = (state: any) => {
    return state?.profileReducer?.deleteMessage
        ? state.profileReducer.deleteMessage
        : "";
};

export {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector,
    institutionDataSelector,
    deleteMessageSelector
};
