import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createEvent(eventName: string, data: any) {
    return JSON.stringify({
        type: eventName,
        data: data
    });
}

export enum EProtocol {
    HTTPS = 'https',
    HTTP = 'http',
    SOCKET = 'wss'
}

export function waitForValue<T>(getter: () => T | undefined, interval = 100): Promise<T> {
    return new Promise((resolve) => {
        const check = setInterval(() => {
            const value = getter();
            if (value !== undefined) {
                clearInterval(check);
                resolve(value);
            }
        }, interval);
    });
}
