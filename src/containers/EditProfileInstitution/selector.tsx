const institutionDataSelector = (state: any) => {
    return state?.editInstitutionDataReducer?.institutionData
        ? state.editInstitutionDataReducer.institutionData
        : [];
};

const successMessageSelector = (state: any) => {
    return state?.editInstitutionDataReducer?.successMessage
        ? state.editInstitutionDataReducer.successMessage
        : "";
};

export {
    institutionDataSelector,
    successMessageSelector
};
