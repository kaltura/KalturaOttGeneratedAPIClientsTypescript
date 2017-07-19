
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetCount } from './KalturaAssetCount';

import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaSearchAssetFilter } from './KalturaSearchAssetFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetCountActionArgs  extends KalturaRequestArgs {
    groupBy : KalturaAssetGroupBy[];
	filter? : KalturaSearchAssetFilter;
}

/** 
* Returns a group-by result for media or EPG according to given filter. Lists
* values of each field and their respective count.
**/
export class AssetCountAction extends KalturaRequest<KalturaAssetCount> {

    groupBy : KalturaAssetGroupBy[];
	filter : KalturaSearchAssetFilter;

    constructor(data : AssetCountActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetCount', responseConstructor : KalturaAssetCount  });
        if (typeof this.groupBy === 'undefined') this.groupBy = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'count' },
				groupBy : { type : 'a', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' },
				filter : { type : 'o', subTypeConstructor : KalturaSearchAssetFilter, subType : 'KalturaSearchAssetFilter' }
            }
        );
        return result;
    }
}

