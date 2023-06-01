const indexListSelector = (state: any) => {
    return state?.guestDashboardReducer?.indexList
        ? state.guestDashboardReducer.indexList
        : [];
};

const institutionListSelector = (state: any) => {
    return state?.guestDashboardReducer?.institutionList
        ? state.guestDashboardReducer.institutionList
        : [];
};

export { indexListSelector, institutionListSelector };
