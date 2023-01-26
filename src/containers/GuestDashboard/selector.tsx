const indexListSelector = (state: any) => {
    return state?.guestDashboardReducer?.indexList
      ? state.guestDashboardReducer.indexList
      : [];
  };
  
  export { indexListSelector };
  