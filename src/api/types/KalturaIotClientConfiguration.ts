
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIotClientConfigurationArgs  extends KalturaObjectBaseArgs {
    identityPoolId? : string;
	userPoolId? : string;
	awsRegion? : string;
	appClientId? : string;
	legacyEndPoint? : string;
	endPoint? : string;
	thingName? : string;
	thingArn? : string;
	thingId? : string;
	username? : string;
	password? : string;
	topics? : string;
	status? : string;
	message? : string;
}


export class KalturaIotClientConfiguration extends KalturaObjectBase {

    identityPoolId : string;
	userPoolId : string;
	awsRegion : string;
	appClientId : string;
	legacyEndPoint : string;
	endPoint : string;
	thingName : string;
	thingArn : string;
	thingId : string;
	username : string;
	password : string;
	topics : string;
	status : string;
	message : string;

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
				identityPoolId : { type : 's' },
				userPoolId : { type : 's' },
				awsRegion : { type : 's' },
				appClientId : { type : 's' },
				legacyEndPoint : { type : 's' },
				endPoint : { type : 's' },
				thingName : { type : 's' },
				thingArn : { type : 's' },
				thingId : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				topics : { type : 's' },
				status : { type : 's' },
				message : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotClientConfiguration',KalturaIotClientConfiguration);
