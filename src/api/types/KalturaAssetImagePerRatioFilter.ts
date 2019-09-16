
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAssetImagePerRatioFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAssetImagePerRatioFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAssetImagePerRatioFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetImagePerRatioFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetImagePerRatioFilter',KalturaAssetImagePerRatioFilter);
