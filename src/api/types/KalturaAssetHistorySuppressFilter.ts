
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAssetHistorySuppressFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAssetHistorySuppressFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAssetHistorySuppressFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetHistorySuppressFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetHistorySuppressFilter',KalturaAssetHistorySuppressFilter);
