const assessmentListSelector = (state: any) => {
    return state?.userDashboardReducer?.assessmentList
        ? state.userDashboardReducer.assessmentList
        : [];
};

export { assessmentListSelector };
