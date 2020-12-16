
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCredentialsProvider } from './KalturaCredentialsProvider';
import { KalturaCognitoUserPool } from './KalturaCognitoUserPool';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIotClientConfigurationArgs  extends KalturaObjectBaseArgs {
    announcementTopic? : string;
	credentialsProvider? : KalturaCredentialsProvider;
	cognitoUserPool? : KalturaCognitoUserPool;
	json? : string;
	topics? : string;
}


export class KalturaIotClientConfiguration extends KalturaObjectBase {

    announcementTopic : string;
	credentialsProvider : KalturaCredentialsProvider;
	cognitoUserPool : KalturaCognitoUserPool;
	json : string;
	topics : string;

    constructor(data? : KalturaIotClientConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotClientConfiguration' },
				announcementTopic : { type : 's' },
				credentialsProvider : { type : 'o', subTypeConstructor : KalturaCredentialsProvider, subType : 'KalturaCredentialsProvider' },
				cognitoUserPool : { type : 'o', subTypeConstructor : KalturaCognitoUserPool, subType : 'KalturaCognitoUserPool' },
				json : { type : 's' },
				topics : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotClientConfiguration',KalturaIotClientConfiguration);
