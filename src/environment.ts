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
        apiVersion: '4.82.7.14130'
    },
    response: {
        nestedResponse: true
    }
}