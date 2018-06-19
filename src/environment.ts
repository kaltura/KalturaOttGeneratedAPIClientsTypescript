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
        apiVersion: '4.82.72.41992'
    },
    response: {
        nestedResponse: true
    }
}