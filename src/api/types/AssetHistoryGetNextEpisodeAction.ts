
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetHistory } from './KalturaAssetHistory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetHistoryGetNextEpisodeActionArgs  extends KalturaRequestArgs {
    assetId : number;
}

/**
 * Build request payload for service 'assetHistory' action 'getNextEpisode'.
 *
 * Usage: Get next episode by last watch asset in given assetId
 *
 * Server response type:         KalturaAssetHistory
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetHistoryGetNextEpisodeAction extends KalturaRequest<KalturaAssetHistory> {

    assetId : number;

    constructor(data : AssetHistoryGetNextEpisodeActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetHistory', responseConstructor : KalturaAssetHistory  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assethistory' },
				action : { type : 'c', default : 'getNextEpisode' },
				assetId : { type : 'n' }
            }
        );
        return result;
    }
}

