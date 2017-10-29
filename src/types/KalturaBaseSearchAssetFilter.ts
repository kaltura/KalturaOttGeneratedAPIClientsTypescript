
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaBaseSearchAssetFilterArgs  extends KalturaAssetFilterArgs {
    groupBy? : KalturaAssetGroupBy[];
}


export class KalturaBaseSearchAssetFilter extends KalturaAssetFilter {

    groupBy : KalturaAssetGroupBy[];

    constructor(data? : KalturaBaseSearchAssetFilterArgs)
    {
        super(data);
        if (typeof this.groupBy === 'undefined') this.groupBy = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSearchAssetFilter' },
				groupBy : { type : 'a', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSearchAssetFilter',KalturaBaseSearchAssetFilter);
