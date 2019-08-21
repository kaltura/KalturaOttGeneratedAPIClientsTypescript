
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaHouseholdCouponCodeFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaHouseholdCouponCodeFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaHouseholdCouponCodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdCouponCodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdCouponCodeFilter',KalturaHouseholdCouponCodeFilter);
