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
        apiVersion: '5.1.0.41992'
    },
    response: {
        nestedResponse: true
    }
}