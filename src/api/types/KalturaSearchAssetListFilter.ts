
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchAssetFilter, KalturaSearchAssetFilterArgs } from './KalturaSearchAssetFilter';

export interface KalturaSearchAssetListFilterArgs  extends KalturaSearchAssetFilterArgs {
    excludeWatched? : boolean;
}


export class KalturaSearchAssetListFilter extends KalturaSearchAssetFilter {

    excludeWatched : boolean;

    constructor(data? : KalturaSearchAssetListFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchAssetListFilter' },
				excludeWatched : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchAssetListFilter',KalturaSearchAssetListFilter);
