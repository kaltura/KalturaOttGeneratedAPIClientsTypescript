
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntitlementDiscountDetailsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEntitlementDiscountDetails extends KalturaObjectBase {

    readonly amount : number;
	readonly startDate : number;
	readonly endDate : number;

    constructor(data? : KalturaEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementDiscountDetails' },
				amount : { type : 'n', readOnly : true },
				startDate : { type : 'n', readOnly : true },
				endDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementDiscountDetails',KalturaEntitlementDiscountDetails);
