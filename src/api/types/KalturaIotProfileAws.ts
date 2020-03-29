
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaIotProfileAwsArgs  extends KalturaCrudObjectArgs {
    iotEndPoint? : string;
	pfxPath? : string;
	pfxPassword? : string;
	certificatePath? : string;
	brokerPort? : number;
	accessKeyId? : string;
	secretAccessKey? : string;
	tTL? : string;
	iotPolicyName? : string;
	userPoolId? : string;
	clientId? : string;
	identityPoolId? : string;
	region? : string;
	updateDate? : number;
}


export class KalturaIotProfileAws extends KalturaCrudObject {

    iotEndPoint : string;
	pfxPath : string;
	pfxPassword : string;
	certificatePath : string;
	brokerPort : number;
	accessKeyId : string;
	secretAccessKey : string;
	tTL : string;
	iotPolicyName : string;
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
				pfxPath : { type : 's' },
				pfxPassword : { type : 's' },
				certificatePath : { type : 's' },
				brokerPort : { type : 'n' },
				accessKeyId : { type : 's' },
				secretAccessKey : { type : 's' },
				tTL : { type : 's' },
				iotPolicyName : { type : 's' },
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
