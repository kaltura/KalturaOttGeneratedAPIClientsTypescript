
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdPaymentMethodArgs  extends KalturaObjectBaseArgs {
    externalId? : string;
	paymentGatewayId? : number;
	details? : string;
	paymentMethodProfileId? : number;
}


export class KalturaHouseholdPaymentMethod extends KalturaObjectBase {

    readonly id : number;
	externalId : string;
	paymentGatewayId : number;
	details : string;
	readonly isDefault : boolean;
	paymentMethodProfileId : number;

    constructor(data? : KalturaHouseholdPaymentMethodArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdPaymentMethod' },
				id : { type : 'n', readOnly : true },
				externalId : { type : 's' },
				paymentGatewayId : { type : 'n' },
				details : { type : 's' },
				isDefault : { type : 'b', readOnly : true },
				paymentMethodProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPaymentMethod',KalturaHouseholdPaymentMethod);
