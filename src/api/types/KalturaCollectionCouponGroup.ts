
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCollectionCouponGroupArgs  extends KalturaObjectBaseArgs {
    id? : number;
	startDate? : number;
	endDate? : number;
}


export class KalturaCollectionCouponGroup extends KalturaObjectBase {

    id : number;
	startDate : number;
	endDate : number;

    constructor(data? : KalturaCollectionCouponGroupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionCouponGroup' },
				id : { type : 'n' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionCouponGroup',KalturaCollectionCouponGroup);
