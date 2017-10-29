
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUsageModule, KalturaUsageModuleArgs } from './KalturaUsageModule';

export interface KalturaPricePlanArgs  extends KalturaUsageModuleArgs {
    priceDetailsId? : number;
}


export class KalturaPricePlan extends KalturaUsageModule {

    readonly isRenewable : boolean;
	readonly renewalsNumber : number;
	readonly discountId : number;
	priceDetailsId : number;

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
				isRenewable : { type : 'b', readOnly : true },
				renewalsNumber : { type : 'n', readOnly : true },
				discountId : { type : 'n', readOnly : true },
				priceDetailsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPricePlan',KalturaPricePlan);
