export interface Environment {
    request: {
        apiVersion: string,
        ottMode: boolean,
        fileFormatValue: number
    }
    response: {
        nestedResponse: boolean,
        customErrorInHttp500: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '8.0.0.30024',
        ottMode: true,
        fileFormatValue: 20
    },
    response: {
        nestedResponse: true,
        customErrorInHttp500: true
    }
}