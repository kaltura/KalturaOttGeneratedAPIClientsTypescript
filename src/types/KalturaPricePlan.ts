
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUsageModule, KalturaUsageModuleArgs } from './KalturaUsageModule';

export interface KalturaPricePlanArgs  extends KalturaUsageModuleArgs {
    isRenewable? : boolean;
	renewalsNumber? : number;
	priceId? : number;
	discountId? : number;
}

/** 
* Price plan
**/
export class KalturaPricePlan extends KalturaUsageModule {

    isRenewable : boolean;
	renewalsNumber : number;
	priceId : number;
	discountId : number;

    constructor(data? : KalturaPricePlanArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPricePlan' },
				isRenewable : { type : 'b' },
				renewalsNumber : { type : 'n' },
				priceId : { type : 'n' },
				discountId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPricePlan',KalturaPricePlan);
