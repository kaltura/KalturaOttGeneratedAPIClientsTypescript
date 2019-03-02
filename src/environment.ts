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
        apiVersion: '5.1.2.42049',
        avoidQueryString: true,
        fileFormatValue: 20
    },
    response: {
        nestedResponse: true
    }
}