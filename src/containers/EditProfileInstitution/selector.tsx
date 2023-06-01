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

const institutionListSelector = (state: any) => {
    return state?.editInstitutionDataReducer?.institutionList
        ? state.editInstitutionDataReducer.institutionList
        : [];
};

export {
    institutionDataSelector,
    successMessageSelector,
    institutionListSelector
};
