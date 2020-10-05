
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaPaymentGatewayBaseProfile, KalturaPaymentGatewayBaseProfileArgs } from './KalturaPaymentGatewayBaseProfile';

export interface KalturaPaymentGatewayProfileArgs  extends KalturaPaymentGatewayBaseProfileArgs {
    isActive? : number;
	adapterUrl? : string;
	transactUrl? : string;
	statusUrl? : string;
	renewUrl? : string;
	paymentGatewaySettings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
	pendingInterval? : number;
	pendingRetries? : number;
	sharedSecret? : string;
	renewIntervalMinutes? : number;
	renewStartMinutes? : number;
	externalVerification? : boolean;
	isAsyncPolicy? : boolean;
}


export class KalturaPaymentGatewayProfile extends KalturaPaymentGatewayBaseProfile {

    isActive : number;
	adapterUrl : string;
	transactUrl : string;
	statusUrl : string;
	renewUrl : string;
	paymentGatewaySettings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	pendingInterval : number;
	pendingRetries : number;
	sharedSecret : string;
	renewIntervalMinutes : number;
	renewStartMinutes : number;
	externalVerification : boolean;
	isAsyncPolicy : boolean;

    constructor(data? : KalturaPaymentGatewayProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaymentGatewayProfile' },
				isActive : { type : 'n' },
				adapterUrl : { type : 's' },
				transactUrl : { type : 's' },
				statusUrl : { type : 's' },
				renewUrl : { type : 's' },
				paymentGatewaySettings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				pendingInterval : { type : 'n' },
				pendingRetries : { type : 'n' },
				sharedSecret : { type : 's' },
				renewIntervalMinutes : { type : 'n' },
				renewStartMinutes : { type : 'n' },
				externalVerification : { type : 'b' },
				isAsyncPolicy : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentGatewayProfile',KalturaPaymentGatewayProfile);
