const assessmentListSelector = (state: any) => {
    return state?.userDashboardReducer?.assessmentList
        ? state.userDashboardReducer.assessmentList
        : [];
};

const assessmentHistorySelector = (state: any) => {
    return state?.userDashboardReducer?.history
        ? state.userDashboardReducer.history
        : null;
};

const institutionListSelector = (state: any) => {
    return state?.userDashboardReducer?.institutionList
        ? state.userDashboardReducer.institutionList
        : [];
};

export { assessmentListSelector, assessmentHistorySelector, institutionListSelector };
