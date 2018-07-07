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
        apiVersion: '4.9.273.41993'
    },
    response: {
        nestedResponse: true
    }
}