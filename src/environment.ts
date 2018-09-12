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
        apiVersion: '5.0.2.17717'
    },
    response: {
        nestedResponse: true
    }
}