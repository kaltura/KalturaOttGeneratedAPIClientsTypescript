
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaHouseoldCouponCodeFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaHouseoldCouponCodeFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaHouseoldCouponCodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseoldCouponCodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseoldCouponCodeFilter',KalturaHouseoldCouponCodeFilter);
