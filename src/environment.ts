export interface Environment {
    request: {
        apiVersion: string,
        avoidQueryString: boolean,
        fileFormatValue: number
    }
    response: {
        nestedResponse: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '5.2.0.43081',
        avoidQueryString: true,
        fileFormatValue: 20
    },
    response: {
        nestedResponse: true
    }
}