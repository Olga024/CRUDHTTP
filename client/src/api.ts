import { API_BASE } from "./config";

export type TApiQueryParams = {
    url: string,
    method?: string,
    payload?: any,
}

export const apiQuery = <ResponceType = any>({
    url,
    method,
    payload,
}: TApiQueryParams) => new Promise<ResponceType>((resolve, reject) => {
    const queryParams: any = {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    if (payload) {
        queryParams.body = JSON.stringify(payload);
    }

    fetch(`${API_BASE}/${url}`, queryParams)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
})