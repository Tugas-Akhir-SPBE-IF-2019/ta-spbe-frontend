const loginMessageSelector = (state: any) => {
    return state?.loginReducer?.loginMessage
        ? state.loginReducer.loginMessage
        : null;
};

export {
    loginMessageSelector,
};
