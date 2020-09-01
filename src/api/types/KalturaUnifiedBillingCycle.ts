
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDuration } from './KalturaDuration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUnifiedBillingCycleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	duration? : KalturaDuration;
	paymentGatewayId? : number;
	ignorePartialBilling? : boolean;
}


export class KalturaUnifiedBillingCycle extends KalturaObjectBase {

    name : string;
	duration : KalturaDuration;
	paymentGatewayId : number;
	ignorePartialBilling : boolean;

    constructor(data? : KalturaUnifiedBillingCycleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnifiedBillingCycle' },
				name : { type : 's' },
				duration : { type : 'o', subTypeConstructor : KalturaDuration, subType : 'KalturaDuration' },
				paymentGatewayId : { type : 'n' },
				ignorePartialBilling : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnifiedBillingCycle',KalturaUnifiedBillingCycle);
