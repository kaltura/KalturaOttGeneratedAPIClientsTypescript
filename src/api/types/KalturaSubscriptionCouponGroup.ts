
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscriptionCouponGroupArgs  extends KalturaObjectBaseArgs {
    id? : number;
	startDate? : number;
	endDate? : number;
}


export class KalturaSubscriptionCouponGroup extends KalturaObjectBase {

    id : number;
	startDate : number;
	endDate : number;

    constructor(data? : KalturaSubscriptionCouponGroupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionCouponGroup' },
				id : { type : 'n' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionCouponGroup',KalturaSubscriptionCouponGroup);
