export function formatTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert UNIX timestamp to milliseconds

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Add leading zero if minutes is a single digit

    return formattedTime;
}

export function formatUnixTimestamp(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000; // Convert UNIX timestamp to milliseconds
    const dateObject = new Date(milliseconds); // Create a Date object using the milliseconds

    // Options for formatting the date and time
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    // Format the date and time using the options
    const formattedDateTime = dateObject.toLocaleString(undefined, options);

    return formattedDateTime;
}
