
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaIotProfileAwsArgs  extends KalturaCrudObjectArgs {
    iotEndPoint? : string;
	accessKeyId? : string;
	secretAccessKey? : string;
	userPoolId? : string;
	clientId? : string;
	identityPoolId? : string;
	region? : string;
	updateDate? : number;
}


export class KalturaIotProfileAws extends KalturaCrudObject {

    iotEndPoint : string;
	accessKeyId : string;
	secretAccessKey : string;
	userPoolId : string;
	clientId : string;
	identityPoolId : string;
	region : string;
	updateDate : number;

    constructor(data? : KalturaIotProfileAwsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotProfileAws' },
				iotEndPoint : { type : 's' },
				accessKeyId : { type : 's' },
				secretAccessKey : { type : 's' },
				userPoolId : { type : 's' },
				clientId : { type : 's' },
				identityPoolId : { type : 's' },
				region : { type : 's' },
				updateDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotProfileAws',KalturaIotProfileAws);
