export const sortByDate = (indexList: any)  => {
    return indexList.sort((x: any, y: any) => +new Date(y.submitted_date) - +new Date(x.submitted_date));
}