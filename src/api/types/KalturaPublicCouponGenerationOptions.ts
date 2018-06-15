
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCouponGenerationOptions, KalturaCouponGenerationOptionsArgs } from './KalturaCouponGenerationOptions';

export interface KalturaPublicCouponGenerationOptionsArgs  extends KalturaCouponGenerationOptionsArgs {
    code? : string;
}


export class KalturaPublicCouponGenerationOptions extends KalturaCouponGenerationOptions {

    code : string;

    constructor(data? : KalturaPublicCouponGenerationOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPublicCouponGenerationOptions' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPublicCouponGenerationOptions',KalturaPublicCouponGenerationOptions);
