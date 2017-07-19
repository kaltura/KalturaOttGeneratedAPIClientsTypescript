
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetFilter;
	pager? : KalturaFilterPager;
}

/** 
* Returns media or EPG assets. Filters by media identifiers or by EPG internal or
* external identifier.
**/
export class AssetListAction extends KalturaRequest<KalturaAssetListResponse> {

    filter : KalturaAssetFilter;
	pager : KalturaFilterPager;

    constructor(data? : AssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetFilter, subType : 'KalturaAssetFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

