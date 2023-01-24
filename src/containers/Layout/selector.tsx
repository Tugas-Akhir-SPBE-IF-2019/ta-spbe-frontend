const loadingSelector = (state: any) => {
    return state?.layoutReducer?.loading ? state.layoutReducer.loading : false;
};
  
export { loadingSelector };
  