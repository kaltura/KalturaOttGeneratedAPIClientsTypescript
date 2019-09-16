
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAssetFirstImagePerRatioFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAssetFirstImagePerRatioFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAssetFirstImagePerRatioFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFirstImagePerRatioFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFirstImagePerRatioFilter',KalturaAssetFirstImagePerRatioFilter);
