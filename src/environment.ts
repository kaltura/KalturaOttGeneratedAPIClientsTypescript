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
        apiVersion: '4.9.0.42015'
    },
    response: {
        nestedResponse: true
    }
}