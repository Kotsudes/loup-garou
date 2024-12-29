// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createEvent(eventName: string, data: any) {
    return JSON.stringify({
        type: eventName,
        data: data
    });
}
