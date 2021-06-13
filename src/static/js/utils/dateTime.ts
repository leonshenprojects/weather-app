export const getDate = (datetime: string) => {
    const date = new Date(datetime);

    return {
        date: date.toLocaleString('en-us', {day:'numeric'}),
        day: date.toLocaleString('en-us', {weekday:'long'}),
        month: date.toLocaleString('en-us', {month:'long'}),
    }
}

export const getTime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-us', {hour12: false, hour: '2-digit', minute: '2-digit' });
}
