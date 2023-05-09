const loginMessageSelector = (state: any) => {
    return state?.loginReducer?.loginMessage
        ? state.loginReducer.loginMessage
        : null;
};

const institutionDataSelector = (state: any) => {
    return state?.loginReducer?.institutionData
        ? state.loginReducer.institutionData
        : [];
};

export {
    loginMessageSelector,
    institutionDataSelector
};
