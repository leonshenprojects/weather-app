export const getDate = (datetime: string) => {
    if (!datetime) {
        return {
            date: '',
            day: '',
            month: '',
        }
    }

    const date = new Date(datetime);

    if (date.toLocaleString('en-us', {day:'numeric'}) === 'Invalid Date') {
        return {
            date: '',
            day: '',
            month: '',  
        }
    }

    return {
        date: date.toLocaleString('en-us', {day:'numeric'}),
        day: date.toLocaleString('en-us', {weekday:'long'}),
        month: date.toLocaleString('en-us', {month:'long'}),
    }
}

export const getTime = (datetime: string) => {
    if (!datetime) {
        return '';
    }

    const date = new Date(datetime);
    return date.toLocaleTimeString('en-us', {hour12: false, hour: '2-digit', minute: '2-digit' }).replace("24:00", "00:00");
}
