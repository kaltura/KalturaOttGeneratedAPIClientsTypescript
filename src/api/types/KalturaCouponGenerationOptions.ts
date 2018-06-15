
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponGenerationOptionsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaCouponGenerationOptions extends KalturaObjectBase {

    

    constructor(data? : KalturaCouponGenerationOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponGenerationOptions' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponGenerationOptions',KalturaCouponGenerationOptions);
