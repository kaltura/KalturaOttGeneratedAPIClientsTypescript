
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAssetHistoryFilter } from './KalturaAssetHistoryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetHistoryCleanActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetHistoryFilter;
}

/**
 * Build request payload for service 'assetHistory' action 'clean'.
 *
 * Usage: Clean the user’s viewing history
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetHistoryCleanAction extends KalturaRequest<void> {

    filter : KalturaAssetHistoryFilter;

    constructor(data? : AssetHistoryCleanActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assethistory' },
				action : { type : 'c', default : 'clean' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetHistoryFilter, subType : 'KalturaAssetHistoryFilter' }
            }
        );
        return result;
    }
}

