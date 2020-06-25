
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetHistory } from './KalturaAssetHistory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetHistoryGetNextEpisodeActionArgs  extends KalturaRequestArgs {
    seriesId : string;
}

/**
 * Build request payload for service 'assetHistory' action 'getNextEpisode'.
 *
 * Usage: Get next episode by last watch asset in given seriesId
 *
 * Server response type:         KalturaAssetHistory
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetHistoryGetNextEpisodeAction extends KalturaRequest<KalturaAssetHistory> {

    seriesId : string;

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
				seriesId : { type : 's' }
            }
        );
        return result;
    }
}

