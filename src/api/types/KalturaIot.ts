
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaIotArgs  extends KalturaCrudObjectArgs {
    udid? : string;
	accessKey? : string;
	accessSecretKey? : string;
	username? : string;
	userPassword? : string;
	identityId? : string;
	thingArn? : string;
	thingId? : string;
	principal? : string;
	endPoint? : string;
	extendedEndPoint? : string;
	identityPoolId? : string;
}


export class KalturaIot extends KalturaCrudObject {

    udid : string;
	accessKey : string;
	accessSecretKey : string;
	username : string;
	userPassword : string;
	identityId : string;
	thingArn : string;
	thingId : string;
	principal : string;
	endPoint : string;
	extendedEndPoint : string;
	identityPoolId : string;

    constructor(data? : KalturaIotArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIot' },
				udid : { type : 's' },
				accessKey : { type : 's' },
				accessSecretKey : { type : 's' },
				username : { type : 's' },
				userPassword : { type : 's' },
				identityId : { type : 's' },
				thingArn : { type : 's' },
				thingId : { type : 's' },
				principal : { type : 's' },
				endPoint : { type : 's' },
				extendedEndPoint : { type : 's' },
				identityPoolId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIot',KalturaIot);
