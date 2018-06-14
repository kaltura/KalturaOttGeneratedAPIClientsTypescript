
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetCount } from './KalturaAssetCount';

import { KalturaSearchAssetFilter } from './KalturaSearchAssetFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSearchAssetFilter;
}

/**
 * Build request payload for service 'asset' action 'count'.
 *
 * Usage: Returns a group-by result for media or EPG according to given filter. Lists values of each field and their respective count
 *
 * Server response type:         KalturaAssetCount
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetCountAction extends KalturaRequest<KalturaAssetCount> {

    filter : KalturaSearchAssetFilter;

    constructor(data? : AssetCountActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetCount', responseConstructor : KalturaAssetCount  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'count' },
				filter : { type : 'o', subTypeConstructor : KalturaSearchAssetFilter, subType : 'KalturaSearchAssetFilter' }
            }
        );
        return result;
    }
}

