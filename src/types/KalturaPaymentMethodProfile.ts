
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPaymentMethodProfileArgs  extends KalturaObjectBaseArgs {
    paymentGatewayId? : number;
	name? : string;
	allowMultiInstance? : boolean;
}


export class KalturaPaymentMethodProfile extends KalturaObjectBase {

    readonly id : number;
	paymentGatewayId : number;
	name : string;
	allowMultiInstance : boolean;

    constructor(data? : KalturaPaymentMethodProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaymentMethodProfile' },
				id : { type : 'n', readOnly : true },
				paymentGatewayId : { type : 'n' },
				name : { type : 's' },
				allowMultiInstance : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentMethodProfile',KalturaPaymentMethodProfile);
