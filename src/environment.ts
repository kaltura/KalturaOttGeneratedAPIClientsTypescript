export interface Environment {
    request: {
        apiVersion: string
    }
    response: {
        nestedResponse: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '4.82.4.13107'
    },
    response: {
        nestedResponse: true
    }
}