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
        apiVersion: '5.0.3.42027'
    },
    response: {
        nestedResponse: true
    }
}