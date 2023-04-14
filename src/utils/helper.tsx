import moment from 'moment';

export const sortByDate = (indexList: any)  => {
    return indexList.sort((x: any, y: any) => +new Date(y.submitted_date) - +new Date(x.submitted_date));
}

export const formatDate = (date: any)  => {
    return moment(date).format("DD-MM-YYYY");
}

export const checkTextColor = (status: number)  => {
    if (status === 1) {
        return "text-orange"
    }
    else if (status === 2) {
        return "text-green"
    }
    else {
        return "text-blue"
    }
}

export const checkBackgroundColor = (status: number)  => {
    if (status === 1) {
        return "bg-orange"
    }
    else if (status === 2) {
        return "bg-green"
    }
    else {
        return "bg-blue"
    }
}