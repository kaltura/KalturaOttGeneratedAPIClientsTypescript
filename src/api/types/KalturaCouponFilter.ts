
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCouponFilterArgs  extends KalturaFilterArgs {
    couponCodesIn? : string;
}


export class KalturaCouponFilter extends KalturaFilter {

    couponCodesIn : string;

    constructor(data? : KalturaCouponFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponFilter' },
				couponCodesIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponFilter',KalturaCouponFilter);
