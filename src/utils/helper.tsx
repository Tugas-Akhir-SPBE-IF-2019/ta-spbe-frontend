import moment from 'moment';

export const sortByDate = (indexList: any)  => {
    return indexList.sort((x: any, y: any) => +new Date(y.submitted_date) - +new Date(x.submitted_date));
}

export const formatDate = (date: any)  => {
    return moment(date).format("DD-MM-YYYY");
}

export const checkTextColor = (status: number)  => {
    if (status === 1) {
        return "text-orange";
    }
    else if (status === 2) {
        return "text-green";
    }
    else {
        return "text-blue";
    }
}

export const checkBackgroundColor = (status: number)  => {
    if (status === 1) {
        return "bg-orange";
    }
    else if (status === 2) {
        return "bg-green";
    }
    else {
        return "bg-blue";
    }
}

export const checkStatus = (status: number)  => {
    if (status === 1) {
        return "Sedang Diproses";
    }
    else if (status === 2) {
        return "Selesai";
    }
    else {
        return "Sudah Divalidasi";
    }
}

export const checkDocumentType = (type: string)  => {
    if (type === "NEW_DOCUMENT") {
        return "Dokumen Baru";
    }
    else if (type === "OLD_DOCUMENT") {
        return "Dokumen Lama";
    }
    else {
        return "Dokumen Pendukung";
    }
}

export const checkDocumentStyle = (type: string)  => {
    if (type === "NEW_DOCUMENT") {
        return "text-green bg-green";
    }
    else if (type === "OLD_DOCUMENT") {
        return "text-orange bg-orange";
    }
    else {
        return "text-blue bg-blue";
    }
}

export const checkHistoryTitle = (status: number)  => {
    if (status === 1) {
        return "Dokumen Dalam Proses";
    }
    else if (status === 2) {
        return "Dokumen Telah Selesai";
    }
    else {
        return "Dokumen Sudah Divalidasi";
    }
}

export const checkHistoryCaption = (status: number)  => {
    if (status === 1) {
        return "Sedang dalam proses penilaian pada";
    }
    else if (status === 2) {
        return "Selesai dinilai pada";
    }
    else {
        return "Sudah divalidasi pada";
    }
}

export const formatTimestamp = (date: any)  => {
    return `${moment(date).format("DD MMMM YYYY")} Pukul ${moment(date).format("HH.mm")} WIB`;
}